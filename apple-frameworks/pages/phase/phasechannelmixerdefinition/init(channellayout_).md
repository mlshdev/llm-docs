> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasechannelmixerdefinition/init(channellayout:)](https://developer.apple.com/documentation/phase/phasechannelmixerdefinition/init(channellayout:))

# init(channelLayout:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a channel mixer with the given channel layout.

## Declaration

```swift
init(channelLayout layout: AVAudioChannelLayout)
```

## Parameters

- `layout`: A channel configuration for the mixer’s input audio.

## See Also

### Creating a Channel Mixer

- [init(channelLayout:identifier:)](init%28channellayout_identifier_%29.md): Creates a named channel mixer with the given channel layout.

# initWithChannelLayout: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a channel mixer with the given channel layout.

## Declaration

```objectivec
- (instancetype) initWithChannelLayout:(AVAudioChannelLayout *) layout;
```

## Parameters

- `layout`: A channel configuration for the mixer’s input audio.

## See Also

### Creating a Channel Mixer

- [initWithChannelLayout:identifier:](init%28channellayout_identifier_%29.md): Creates a named channel mixer with the given channel layout.
