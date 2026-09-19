> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseambientmixerdefinition/orientation

# orientation (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A quaternion that describes the orientation of the speaker layout relative to the scene origin.

## Declaration

```swift
var orientation: simd_quatf { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the `orientation` initializer argument. See [init(channelLayout:orientation:)](init%28channellayout_orientation_%29.md).

## See Also

### Inspecting the Mixer

- [inputChannelLayout](inputchannellayout.md): The channel layout of input audio.

# orientation (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A quaternion that describes the orientation of the speaker layout relative to the scene origin.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_quatf orientation;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the `orientation` initializer argument. See [initWithChannelLayout:orientation:](init%28channellayout_orientation_%29.md).

## See Also

### Inspecting the Mixer

- [inputChannelLayout](inputchannellayout.md): The channel layout of input audio.
