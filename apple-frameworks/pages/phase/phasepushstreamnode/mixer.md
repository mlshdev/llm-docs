> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnode/mixer](https://developer.apple.com/documentation/phase/phasepushstreamnode/mixer)

# mixer (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The audio stream’s output pipeline.

## Declaration

```swift
var mixer: PHASEMixer { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value based on the definition initializer’s `mixerDefinition` argument. See [init(mixerDefinition:format:)](../phasepushstreamnodedefinition/init%28mixerdefinition_format_%29.md).

## See Also

### Inspecting Stream Properties

- [format](format.md): The format of the audio stream data.

# mixer (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The audio stream’s output pipeline.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHASEMixer * mixer;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value based on the definition initializer’s `mixerDefinition` argument. See [initWithMixerDefinition:format:](../phasepushstreamnodedefinition/init%28mixerdefinition_format_%29.md).

## See Also

### Inspecting Stream Properties

- [format](format.md): The format of the audio stream data.
