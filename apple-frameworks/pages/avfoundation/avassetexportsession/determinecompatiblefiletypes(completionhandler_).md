> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetexportsession/determinecompatiblefiletypes(completionhandler:)

# determineCompatibleFileTypes(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Determines the output file types an asset export session supports writing in its current configuration.

## Declaration

```swift
func determineCompatibleFileTypes(completionHandler handler: @escaping @Sendable ([AVFileType]) -> Void)
```

```swift
var compatibleFileTypes: [AVFileType] { get async }
```

## Parameters

- `handler`: A callback the system passes an array of [AVFileType](../avfiletype.md) structures when it determines the compatible file types.

## See Also

### Accessing export presets

- [presetName](presetname.md): The name of the preset that the asset export session uses.
- [allExportPresets()](allexportpresets%28%29.md): Returns all available export preset names.
- [determineCompatibility(ofExportPreset:with:outputFileType:completionHandler:)](determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md): Determines an export preset’s compatibility to export the asset in a container of the output file type.

# determineCompatibleFileTypesWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Determines the output file types an asset export session supports writing in its current configuration.

## Declaration

```objectivec
- (void) determineCompatibleFileTypesWithCompletionHandler:(void (^)(NSArray<NSString *> *compatibleFileTypes)) handler;
```

## Parameters

- `handler`: A callback the system passes an array of [AVFileType](../avfiletype.md) structures when it determines the compatible file types.

## See Also

### Accessing export presets

- [presetName](presetname.md): The name of the preset that the asset export session uses.
- [allExportPresets](allexportpresets%28%29.md): Returns all available export preset names.
- [determineCompatibilityOfExportPreset:withAsset:outputFileType:completionHandler:](determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md): Determines an export preset’s compatibility to export the asset in a container of the output file type.
