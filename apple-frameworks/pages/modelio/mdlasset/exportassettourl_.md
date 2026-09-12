> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/exportassettourl:](https://developer.apple.com/documentation/modelio/mdlasset/exportassettourl:)

# exportAssetToURL:

**Interface language:** Objective-C

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Writes asset data to a file at the specified URL.

## Declaration

```objectivec
- (BOOL) exportAssetToURL:(NSURL *) URL;
```

## Parameters

- `URL`: A URL specifying the location to export asset data to. This parameter must be a `file:` URL.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if export succeeded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For best results, use the [exportAssetToURL:error:](export%28to_%29.md) method so that you can respond to possible errors during export.

The [MDLAsset](../mdlasset.md) class infers the data format to export in from the [pathExtension](../../foundation/nsurl/pathextension.md) property of the specified URL. To determine whether a format is supported for export, call the [canExportFileExtension:](canexportfileextension%28__%29.md) method.

## See Also

### Exporting an Asset

- [canExportFileExtension:](canexportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](../mdlasset.md) class can write asset data as a file with the specified format extension.
- [exportAssetToURL:error:](export%28to_%29.md): Writes asset data to a file at the specified URL and reports errors that occur during export.
