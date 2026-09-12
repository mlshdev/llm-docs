> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingsassistant/availableoutputsettingspresets()](https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/availableoutputsettingspresets())

# availableOutputSettingsPresets() (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Returns an array of preset values to use to initialize an output settings assistant.

## Declaration

```swift
class func availableOutputSettingsPresets() -> [AVOutputSettingsPreset]
```

<a id="return-value"></a>

## Return Value

An array of available output settings presets.

## See Also

### Creating an assistant

- [init(preset:)](init%28preset_%29.md): Creates an output setting assistant with a preset configuration.
- [AVOutputSettingsPreset](../avoutputsettingspreset.md): A structure that defines preset configurations for an output settings assistant.

# availableOutputSettingsPresets (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Returns an array of preset values to use to initialize an output settings assistant.

## Declaration

```objectivec
+ (NSArray<NSString *> *) availableOutputSettingsPresets;
```

<a id="return-value"></a>

## Return Value

An array of available output settings presets.

## See Also

### Creating an assistant

- [outputSettingsAssistantWithPreset:](init%28preset_%29.md): Creates an output setting assistant with a preset configuration.
- [AVOutputSettingsPreset](../avoutputsettingspreset.md): A structure that defines preset configurations for an output settings assistant.
