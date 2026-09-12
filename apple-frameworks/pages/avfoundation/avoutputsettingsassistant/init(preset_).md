> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingsassistant/init(preset:)](https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/init(preset:))

# init(preset:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates an output setting assistant with a preset configuration.

## Declaration

```swift
convenience init?(preset presetIdentifier: AVOutputSettingsPreset)
```

<a id="discussion"></a>

## Discussion

- presetIdentifier: A preset configuration for the object.

## See Also

### Creating an assistant

- [AVOutputSettingsPreset](../avoutputsettingspreset.md): A structure that defines preset configurations for an output settings assistant.
- [availableOutputSettingsPresets()](availableoutputsettingspresets%28%29.md): Returns an array of preset values to use to initialize an output settings assistant.

# outputSettingsAssistantWithPreset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates an output setting assistant with a preset configuration.

## Declaration

```objectivec
+ (instancetype) outputSettingsAssistantWithPreset:(AVOutputSettingsPreset) presetIdentifier;
```

<a id="discussion"></a>

## Discussion

- presetIdentifier: A preset configuration for the object.

## See Also

### Creating an assistant

- [AVOutputSettingsPreset](../avoutputsettingspreset.md): A structure that defines preset configurations for an output settings assistant.
- [availableOutputSettingsPresets](availableoutputsettingspresets%28%29.md): Returns an array of preset values to use to initialize an output settings assistant.
