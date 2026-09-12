> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/presetname](https://developer.apple.com/documentation/avfoundation/avassetexportsession/presetname)

# presetName (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The name of the preset that the asset export session uses.

## Declaration

```swift
var presetName: String { get }
```

<a id="Discussion"></a>

## Discussion

See [Export presets](../export-presets.md) for values an asset export session supports.

This property is key-value observable.

## See Also

### Accessing export presets

- [determineCompatibleFileTypes(completionHandler:)](determinecompatiblefiletypes%28completionhandler_%29.md): Determines the output file types an asset export session supports writing in its current configuration.
- [allExportPresets()](allexportpresets%28%29.md): Returns all available export preset names.
- [determineCompatibility(ofExportPreset:with:outputFileType:completionHandler:)](determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md): Determines an export preset’s compatibility to export the asset in a container of the output file type.

# presetName (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The name of the preset that the asset export session uses.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * presetName;
```

<a id="Discussion"></a>

## Discussion

See [Export presets](../export-presets.md) for values an asset export session supports.

This property is key-value observable.

## See Also

### Accessing export presets

- [determineCompatibleFileTypesWithCompletionHandler:](determinecompatiblefiletypes%28completionhandler_%29.md): Determines the output file types an asset export session supports writing in its current configuration.
- [allExportPresets](allexportpresets%28%29.md): Returns all available export preset names.
- [determineCompatibilityOfExportPreset:withAsset:outputFileType:completionHandler:](determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md): Determines an export preset’s compatibility to export the asset in a container of the output file type.
