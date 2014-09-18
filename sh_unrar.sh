 ls *.rar > list
#cat list

for na in `cat list`
do
echo $na
	unrar x $na
done
