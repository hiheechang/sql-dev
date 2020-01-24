# Selection

SELECT DISTINCT <> FROM <table>;

SELECT DISTINCT CONCAT(<>,<>) FROM <table>;
SELECT DISTINCT <>,<> FROM <table>;

## ORDER BY
SELECT <> FROM <table> ORDER BY <>;
SELECT <> FROM <table> ORDER BY <> DESC;
SELECT <c1>,<c2> FROM <table> ORDER BY 2; // sorted according to <c2>

## LIMIT
SELECT <> FROM <table> LIMIT 3;
SELECT <> FROM <table> LIMIT 5, 3; // 3 after 5

## LIKE
WHERE author_fname LIKE '%da%';
WHERE stock_quantity LIKE '____'; // four digits long
WHERE author_fname LIKE '%\%%';
