> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentreverbparameters/level](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentreverbparameters/level)

# level (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Controls the amount of reverb, in decibels.

## Declaration

```swift
var level: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. The values must be within the range of `-40` to `40` dB.

## See Also

### Getting and Setting Reverb Values

- [filterParameters](filterparameters.md): A filter that the system applies to the output.
- [loadFactoryReverbPreset(\_:)](loadfactoryreverbpreset%28__%29.md): Loads one of the reverbs factory presets.

# level (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Controls the amount of reverb, in decibels.

## Declaration

```objectivec
@property (nonatomic) float level;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. The values must be within the range of `-40` to `40` dB.

## See Also

### Getting and Setting Reverb Values

- [filterParameters](filterparameters.md): A filter that the system applies to the output.
- [loadFactoryReverbPreset:](loadfactoryreverbpreset%28__%29.md): Loads one of the reverbs factory presets.
