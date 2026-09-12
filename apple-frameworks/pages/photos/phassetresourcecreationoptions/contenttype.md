> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcecreationoptions/contenttype](https://developer.apple.com/documentation/photos/phassetresourcecreationoptions/contenttype)

# contentType (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The type of data being provided for this asset resource. If not specified, one will be inferred from the PHAssetResourceType or file URL extension (if provided).

## Declaration

```swift
var contentType: UTType? { get set }
```

## See Also

### Describing a New Asset Resource

- [originalFilename](originalfilename.md): The filename for the asset resource being created.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the resource.

# contentType (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The type of data being provided for this asset resource. If not specified, one will be inferred from the PHAssetResourceType or file URL extension (if provided).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UTType * contentType;
```

## See Also

### Describing a New Asset Resource

- [originalFilename](originalfilename.md): The filename for the asset resource being created.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the resource.
