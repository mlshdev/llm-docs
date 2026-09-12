> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/canexportfileextension(_:)](https://developer.apple.com/documentation/modelio/mdlasset/canexportfileextension(_:))

# canExportFileExtension(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can write asset data as a file with the specified format extension.

## Declaration

```swift
class func canExportFileExtension(_ extension: String) -> Bool
```

## Parameters

- `extension`: The filename extension identifying an asset file format.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the [MDLAsset](../mdlasset.md) class can export asset data in the format with the specified extension; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), you can use the [export(to:)](export%28to_%29.md) method to write an asset to a file using the format identified by the specified extension.

The set of supported formats includes Wavefront Object (`.obj`) and Standard Tessellation Language (`.stl`). Additional formats may be supported as well.

## See Also

### Exporting an Asset

- [export(to:)](export%28to_%29.md): Writes asset data to a file at the specified URL and reports errors that occur during export.

# canExportFileExtension: (Objective-C)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can write asset data as a file with the specified format extension.

## Declaration

```objectivec
+ (BOOL) canExportFileExtension:(NSString *) extension;
```

## Parameters

- `extension`: The filename extension identifying an asset file format.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the [MDLAsset](../mdlasset.md) class can export asset data in the format with the specified extension; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), you can use the [exportAssetToURL:error:](export%28to_%29.md) method to write an asset to a file using the format identified by the specified extension.

The set of supported formats includes Wavefront Object (`.obj`) and Standard Tessellation Language (`.stl`). Additional formats may be supported as well.

## See Also

### Exporting an Asset

- [exportAssetToURL:](exportassettourl_.md): Writes asset data to a file at the specified URL.
- [exportAssetToURL:error:](export%28to_%29.md): Writes asset data to a file at the specified URL and reports errors that occur during export.
