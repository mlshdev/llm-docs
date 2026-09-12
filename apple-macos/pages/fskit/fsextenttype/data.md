> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsextenttype/data](https://developer.apple.com/documentation/fskit/fsextenttype/data)

# FSExtentType.data (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

An extent type to indicate valid data.

## Declaration

```swift
case data
```

<a id="discussion"></a>

## Discussion

Use this type for all extents on a file system that doesn’t support sparse files.

> **Tip**

> The kernel keeps track of the end of file, so it knows a range of `[EOF, allocated space]` is uninitialized. Because of this behavior, it’s valid to pass the data extent type for such a range.

## See Also

### Working with extent types

- [FSExtentType.zeroFill](zerofill.md): An extent type to indicate uninitialized data.
- [FSExtentType.readOnly](readonly.md): An extent type to indicate read-only data.

# FSExtentTypeData (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An extent type to indicate valid data.

## Declaration

```objectivec
FSExtentTypeData
```

<a id="discussion"></a>

## Discussion

Use this type for all extents on a file system that doesn’t support sparse files.

> **Tip**

> The kernel keeps track of the end of file, so it knows a range of `[EOF, allocated space]` is uninitialized. Because of this behavior, it’s valid to pass the data extent type for such a range.

## See Also

### Working with extent types

- [FSExtentTypeZeroFill](zerofill.md): An extent type to indicate uninitialized data.
- [FSExtentTypeReadOnly](readonly.md): An extent type to indicate read-only data.
