Fork of [Traceur project](http://code.google.com/p/traceur-compiler/).

Source has [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Master branch will track svn.  I will work on jjb branch.

Created thus:
git clone git@github.com:johnjbarton/traceur.git
cd ..
svn checkout http://traceur-compiler.googlecode.com/svn traceur-compiler-read-only
cd traceur-compiler-read-only
find . | xargs zip ../traceurSVN.zip
cd ../traceur
unzip ../traceurSVN.zip
git add -A
git commit...



