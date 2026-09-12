> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshfstypecodefromfiletype(_:)](https://developer.apple.com/documentation/foundation/nshfstypecodefromfiletype(_:))

# NSHFSTypeCodeFromFileType(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a file type code.

## Declaration

```swift
func NSHFSTypeCodeFromFileType(_ fileTypeString: String!) -> OSType
```

## Parameters

- `fileTypeString`: A string of the sort encoded by `NSFileTypeForHFSTypeCode()`.

<a id="return-value"></a>

## Return Value

The HFS file type code corresponding to `fileTypeString`, or `0` if it cannot be found.

## See Also

### Working with HFS file types

- [NSFileTypeForHFSTypeCode(\_:)](nsfiletypeforhfstypecode%28__%29.md): Returns a string encoding a file type code.
- [NSHFSTypeOfFile(\_:)](nshfstypeoffile%28__%29.md): Returns a string encoding a file type.

# NSHFSTypeCodeFromFileType (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a file type code.

## Declaration

```objectivec
extern OSType NSHFSTypeCodeFromFileType(NSString *fileTypeString);
```

## Parameters

- `fileTypeString`: A string of the sort encoded by `NSFileTypeForHFSTypeCode()`.

<a id="return-value"></a>

## Return Value

The HFS file type code corresponding to `fileTypeString`, or `0` if it cannot be found.

## See Also

### Working with HFS file types

- [NSFileTypeForHFSTypeCode](nsfiletypeforhfstypecode%28__%29.md): Returns a string encoding a file type code.
- [NSHFSTypeOfFile](nshfstypeoffile%28__%29.md): Returns a string encoding a file type.
