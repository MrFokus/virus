let back = 1
let next = back
for (;;) {
    back=next
    next*=back
    console.log(next)
}