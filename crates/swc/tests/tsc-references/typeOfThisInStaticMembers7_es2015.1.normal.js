// @target: esnext, es2022, es6, es5
class C {
}
C.a = 1;
C.b = this.a + 1;
class D extends C {
}
D.c = 2;
D.d = this.c + 1;
D.e = 1 + super.a + (this.c + 1) + 1;
