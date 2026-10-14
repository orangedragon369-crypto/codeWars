function digitalRoot(n, ans=0){
    if (n >= 10){
        String(n).split("").map((item)=>{
            ans += parseInt(item);
        })
        return ans = digitalRoot(n)
    } else return n;
}