#!/bin/bash
# program:
# this pro is to generate the pdf file of a tex file automaticlly.
# modified on : Sun Nov 11 09:06:52 HKT 2012
# add annotation.
# 
# first typed on : Tue Nov  6 18:56:13 HKT 2012
# modified on : Sat Nov 10 13:31:07 HKT 2012i
# zhang DL help me to finish the first version.
# modified on : Tue Nov  6 19:15:27 HKT 2012
# modified on : Sat Nov 10 11:27:00 HKT 2012
# add a judgement 2 pdflatex a new file or the default file.


#zdl add 2012_11_10 modified by m, on Sat Nov 10 16:22:14 HKT 2012
	texfile=main
#	latex $texfile.tex
#	latex $texfile.tex
#	bibtex $texfile
#	bibtex $texfile
#	latex $texfile.tex
#        latex $texfile.tex
#	dvips $texfile.dvi
#	ps2pdf $texfile.ps


pdflatex $texfile.tex
pdflatex $texfile.tex
bibtex $texfile
bibtex $texfile
pdflatex $texfile.tex
makeindex $texfile.idx
pdflatex $texfile.tex
