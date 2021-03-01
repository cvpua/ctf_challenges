
for i in {3..9}
do
echo $i    
    cat 'dump_'$i'.txt' >> 'dumptruck_'$i'.jpg'
      
done
