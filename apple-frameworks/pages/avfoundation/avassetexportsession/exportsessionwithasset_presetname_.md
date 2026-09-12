> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/exportsessionwithasset:presetname:](https://developer.apple.com/documentation/avfoundation/avassetexportsession/exportsessionwithasset:presetname:)

# exportSessionWithAsset:presetName:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new asset export session that uses the specified preset.

## Declaration

```objectivec
+ (instancetype) exportSessionWithAsset:(AVAsset *) asset presetName:(NSString *) presetName;
```

## Parameters

- `asset`: The asset to export.
- `presetName`: A string constant that specifies the preset template for the export. See [Export presets](../export-presets.md) for values an asset export session supports.

<a id="return-value"></a>

## Return Value

An asset export session.

## See Also

### Creating an export session

- [initWithAsset:presetName:](init%28asset_presetname_%29.md): Creates an export session with a preset configuration.
- [Export presets](../export-presets.md): Configure an export session to output media in standard sizes and formats.
