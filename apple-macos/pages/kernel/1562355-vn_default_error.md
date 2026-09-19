> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1562355-vn_default_error

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
