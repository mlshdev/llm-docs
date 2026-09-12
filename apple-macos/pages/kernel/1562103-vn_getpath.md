> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562103-vn_getpath](https://developer.apple.com/documentation/kernel/1562103-vn_getpath)

# vn_getpath

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Construct the path to a vnode.

## Declaration

```objectivec
int vn_getpath(struct vnode *vp, char *pathbuf, int *len);
```

## Parameters

- `vp`: The vnode whose path to obtain.
- `pathbuf`: Destination for pathname; should be of size MAXPATHLEN
- `len`: Destination for length of resulting path string. Result will include NULL-terminator in count--that is, "len" will be strlen(pathbuf) + 1.

<a id="return_value"></a>

## Return Value

0 for success or an error code.

<a id="discussion"></a>

## Discussion

Paths to vnodes are not always straightforward: a file with multiple hard-links will have multiple pathnames, and it is sometimes impossible to determine a vnode's full path. vn_getpath() will not enter the filesystem.
