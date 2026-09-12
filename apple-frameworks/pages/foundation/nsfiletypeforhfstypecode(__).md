> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfiletypeforhfstypecode(_:)](https://developer.apple.com/documentation/foundation/nsfiletypeforhfstypecode(_:))

# NSFileTypeForHFSTypeCode(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a string encoding a file type code.

## Declaration

```swift
func NSFileTypeForHFSTypeCode(_ hfsFileTypeCode: OSType) -> String!
```

## Parameters

- `hfsFileTypeCode`: An HFS file type code.

<a id="return-value"></a>

## Return Value

A string that encodes `hfsFileTypeCode`.

## See Also

### Working with HFS file types

- [NSHFSTypeCodeFromFileType(\_:)](nshfstypecodefromfiletype%28__%29.md): Returns a file type code.
- [NSHFSTypeOfFile(\_:)](nshfstypeoffile%28__%29.md): Returns a string encoding a file type.

# NSFileTypeForHFSTypeCode (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a string encoding a file type code.

## Declaration

```objectivec
extern NSString *NSFileTypeForHFSTypeCode(OSType hfsFileTypeCode);
```

## Parameters

- `hfsFileTypeCode`: An HFS file type code.

<a id="return-value"></a>

## Return Value

A string that encodes `hfsFileTypeCode`.

## See Also

### Working with HFS file types

- [NSHFSTypeCodeFromFileType](nshfstypecodefromfiletype%28__%29.md): Returns a file type code.
- [NSHFSTypeOfFile](nshfstypeoffile%28__%29.md): Returns a string encoding a file type.
