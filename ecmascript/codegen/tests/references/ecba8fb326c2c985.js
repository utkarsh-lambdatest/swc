var a, b, c, d, e;
if (b) {
    a = 1 + 2;
} else {
    a = 3;
}
if (b) {
    a = 4 + 5;
} else if (c) {
    a = 6;
} else {
    a = 7 - 8;
}
a = b ? 'f' : 'g' + 'h';
a = b ? 'f' : b ? 'f' : 'g' + 'h';
if (i()) {
    a = 9 + 10;
} else {
    a = 11;
}
if (c) {
    a = 'j';
} else if (i()) {
    a = 'k' + 'l';
} else {
    a = 'j';
}
a = i() ? 'm' : 'f' + 'n';
a = b ? d : e;
a = b ? 'f' : 'g';
