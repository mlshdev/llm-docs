> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562355-vn_default_error](https://developer.apple.com/documentation/kernel/1562355-vn_default_error)

# vn_default_error

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Default vnode operation to fill unsupported slots in vnode operation vectors.

## Declaration

```objectivec
int vn_default_error(void);
```

<a id="return_value"></a>

## Return Value

ENOTSUP
