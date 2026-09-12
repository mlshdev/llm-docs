> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsextenttype/zerofill](https://developer.apple.com/documentation/fskit/fsextenttype/zerofill)

# FSExtentType.zeroFill (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

An extent type to indicate uninitialized data.

## Declaration

```swift
case zeroFill
```

<a id="discussion"></a>

## Discussion

Only use this extent type in file systems that support sparse files, and only then to represent ranges in the file that aren’t allocated yet.

## See Also

### Working with extent types

- [FSExtentType.data](data.md): An extent type to indicate valid data.
- [FSExtentType.readOnly](readonly.md): An extent type to indicate read-only data.

# FSExtentTypeZeroFill (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An extent type to indicate uninitialized data.

## Declaration

```objectivec
FSExtentTypeZeroFill
```

<a id="discussion"></a>

## Discussion

Only use this extent type in file systems that support sparse files, and only then to represent ranges in the file that aren’t allocated yet.

## See Also

### Working with extent types

- [FSExtentTypeData](data.md): An extent type to indicate valid data.
- [FSExtentTypeReadOnly](readonly.md): An extent type to indicate read-only data.
