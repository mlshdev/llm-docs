> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseambientmixerdefinition/init(channellayout:orientation:identifier:)](https://developer.apple.com/documentation/phase/phaseambientmixerdefinition/init(channellayout:orientation:identifier:))

# init(channelLayout:orientation:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named ambient mixer with the given channel layout and orientation.

## Declaration

```swift
convenience init(channelLayout layout: AVAudioChannelLayout, orientation: simd_quatf, identifier: String)
```

## Parameters

- `layout`: The channel layout of input audio.
- `orientation`: A quaternion that describes the orientation of the speaker layout relative to the scene origin.
- `identifier`: A unique name for the mixer.

## See Also

### Creating an Ambient Mixer

- [init(channelLayout:orientation:)](init%28channellayout_orientation_%29.md): Creates an ambient mixer with the given channel layout and orientation.

# initWithChannelLayout:orientation:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named ambient mixer with the given channel layout and orientation.

## Declaration

```objectivec
- (instancetype) initWithChannelLayout:(AVAudioChannelLayout *) layout orientation:(simd_quatf) orientation identifier:(NSString *) identifier;
```

## Parameters

- `layout`: The channel layout of input audio.
- `orientation`: A quaternion that describes the orientation of the speaker layout relative to the scene origin.
- `identifier`: A unique name for the mixer.

## See Also

### Creating an Ambient Mixer

- [initWithChannelLayout:orientation:](init%28channellayout_orientation_%29.md): Creates an ambient mixer with the given channel layout and orientation.
