<!DOCTYPE html>
<html>
<body>
<?php
$visitor = $_SERVER['REMOTE_ADDR'];
if (preg_match("/73.170.172.81/",$visitor)) {
      header('Location: https://2d4u.github.io/fox');
} else {
      header('Location: https://2d4u.github.io/');
};
?>
</body>
</html>
