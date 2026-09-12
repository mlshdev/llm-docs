> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/allexportpresets()](https://developer.apple.com/documentation/avfoundation/avassetexportsession/allexportpresets())

# allExportPresets() (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns all available export preset names.

## Declaration

```swift
class func allExportPresets() -> [String]
```

<a id="return-value"></a>

## Return Value

See [Export presets](../export-presets.md) for values an asset export session supports.

<a id="Discussion"></a>

## Discussion

Not all presets are compatible with all assets.

## See Also

### Accessing export presets

- [presetName](presetname.md): The name of the preset that the asset export session uses.
- [determineCompatibleFileTypes(completionHandler:)](determinecompatiblefiletypes%28completionhandler_%29.md): Determines the output file types an asset export session supports writing in its current configuration.
- [determineCompatibility(ofExportPreset:with:outputFileType:completionHandler:)](determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md): Determines an export preset’s compatibility to export the asset in a container of the output file type.

# allExportPresets (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns all available export preset names.

## Declaration

```objectivec
+ (NSArray<NSString *> *) allExportPresets;
```

<a id="return-value"></a>

## Return Value

See [Export presets](../export-presets.md) for values an asset export session supports.

<a id="Discussion"></a>

## Discussion

Not all presets are compatible with all assets.

## See Also

### Accessing export presets

- [presetName](presetname.md): The name of the preset that the asset export session uses.
- [determineCompatibleFileTypesWithCompletionHandler:](determinecompatiblefiletypes%28completionhandler_%29.md): Determines the output file types an asset export session supports writing in its current configuration.
- [determineCompatibilityOfExportPreset:withAsset:outputFileType:completionHandler:](determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md): Determines an export preset’s compatibility to export the asset in a container of the output file type.
