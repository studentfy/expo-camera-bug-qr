
# How to reproduce the error.

1. Deploy on iOS
2. Open 2 QR codes images to be scanned, there are two qr_example_*.png on the repo base folder but any will do.
3. Scan the first and quickly scan the second While paying attention to console.logs.
4. The error: console.logs should prove that instead of scanning the two QR codes, the first one scans twice.
5. If you can't reproduce, try doing it a few times until it pops (No more than 10 times needed, it usually fails very fast even the first time.)
6. Remember that the test has to be done on iOS, to me Android works.


