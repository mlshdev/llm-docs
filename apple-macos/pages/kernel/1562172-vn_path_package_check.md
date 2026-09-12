> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562172-vn_path_package_check](https://developer.apple.com/documentation/kernel/1562172-vn_path_package_check)

# vn_path_package_check

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

Figure out if a path corresponds to a macOS package.

## Declaration

```objectivec
int vn_path_package_check(vnode_t vp, char *path, int pathlen, int *component);
```

## Parameters

- `vp`: Unused.
- `path`: Path to check.
- `pathlen`: Size of path buffer.
- `component`: Set to index of start of last path component if the path is found to be a package. Set to -1 if the path is not a known package type.

<a id="return_value"></a>

## Return Value

0 unless some parameter was invalid, in which case EINVAL is returned. Determine package-ness by checking what \*component is set to.

<a id="discussion"></a>

## Discussion

Determines if the extension on a path is a known macOS extension type.
