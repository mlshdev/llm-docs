> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshfstypeoffile(_:)](https://developer.apple.com/documentation/foundation/nshfstypeoffile(_:))

# NSHFSTypeOfFile(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a string encoding a file type.

## Declaration

```swift
func NSHFSTypeOfFile(_ fullFilePath: String!) -> String!
```

## Parameters

- `fullFilePath`: The full absolute path of a file.

<a id="return-value"></a>

## Return Value

A string that encodes `fullFilePath`’s HFS file type, or `nil` if the operation was not successful

## See Also

### Working with HFS file types

- [NSFileTypeForHFSTypeCode(\_:)](nsfiletypeforhfstypecode%28__%29.md): Returns a string encoding a file type code.
- [NSHFSTypeCodeFromFileType(\_:)](nshfstypecodefromfiletype%28__%29.md): Returns a file type code.

# NSHFSTypeOfFile (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a string encoding a file type.

## Declaration

```objectivec
extern NSString *NSHFSTypeOfFile(NSString *fullFilePath);
```

## Parameters

- `fullFilePath`: The full absolute path of a file.

<a id="return-value"></a>

## Return Value

A string that encodes `fullFilePath`’s HFS file type, or `nil` if the operation was not successful

## See Also

### Working with HFS file types

- [NSFileTypeForHFSTypeCode](nsfiletypeforhfstypecode%28__%29.md): Returns a string encoding a file type code.
- [NSHFSTypeCodeFromFileType](nshfstypecodefromfiletype%28__%29.md): Returns a file type code.
