> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsextenttype/readonly

# FSExtentType.readOnly (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

An extent type to indicate read-only data.

## Declaration

```swift
case readOnly
```

<a id="discussion"></a>

## Discussion

Use this type to represent ranges in the file that data can be read but not written to.

## See Also

### Working with extent types

- [FSExtentType.data](data.md): An extent type to indicate valid data.
- [FSExtentType.zeroFill](zerofill.md): An extent type to indicate uninitialized data.

# FSExtentTypeReadOnly (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 27.0+

An extent type to indicate read-only data.

## Declaration

```objectivec
FSExtentTypeReadOnly
```

<a id="discussion"></a>

## Discussion

Use this type to represent ranges in the file that data can be read but not written to.

## See Also

### Working with extent types

- [FSExtentTypeData](data.md): An extent type to indicate valid data.
- [FSExtentTypeZeroFill](zerofill.md): An extent type to indicate uninitialized data.
