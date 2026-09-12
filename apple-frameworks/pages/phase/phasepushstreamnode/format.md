> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnode/format](https://developer.apple.com/documentation/phase/phasepushstreamnode/format)

# format (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The format of the audio stream data.

## Declaration

```swift
var format: AVAudioFormat { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the [init(mixerDefinition:format:)](../phasepushstreamnodedefinition/init%28mixerdefinition_format_%29.md) argument.

## See Also

### Inspecting Stream Properties

- [mixer](mixer.md): The audio stream’s output pipeline.

# format (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The format of the audio stream data.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) AVAudioFormat * format;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the [initWithMixerDefinition:format:](../phasepushstreamnodedefinition/init%28mixerdefinition_format_%29.md) argument.

## See Also

### Inspecting Stream Properties

- [mixer](mixer.md): The audio stream’s output pipeline.
