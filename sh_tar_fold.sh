# tar fold

ls -l | grep '^d' | awk ' { print $9 } ' > list_fold

echo 'main.tex'       >> list_fold
echo 'sh_genpdf.sh'   >> list_fold
echo 'sh_run.sh'      >> list_fold
echo 'sh_tar_fold.sh' >> list_fold

more list_fold

cat list_fold | while read na
do
      rar a ${na}.rar ${na} 
done

# mod : 2014年 09月 12日 星期五 16:25:15 CST
