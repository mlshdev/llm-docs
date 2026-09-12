> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562107-vn_bwrite](https://developer.apple.com/documentation/kernel/1562107-vn_bwrite)

# vn_bwrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

System-provided implementation of "bwrite" vnop.

## Declaration

```objectivec
int vn_bwrite(struct vnop_bwrite_args *ap);
```

## Parameters

- `ap`: Standard parameters to a bwrite vnop.

<a id="return_value"></a>

## Return Value

Results of buf_bwrite directly.

<a id="discussion"></a>

## Discussion

This routine is available for filesystems which do not want to implement their own "bwrite" vnop. It just calls buf_bwrite() without modifying its arguments.
