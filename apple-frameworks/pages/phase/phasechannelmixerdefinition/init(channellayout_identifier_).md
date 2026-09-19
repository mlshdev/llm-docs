> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasechannelmixerdefinition/init(channellayout:identifier:)

# init(channelLayout:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named channel mixer with the given channel layout.

## Declaration

```swift
convenience init(channelLayout layout: AVAudioChannelLayout, identifier: String)
```

## Parameters

- `layout`: A channel configuration for the mixer’s input audio.
- `identifier`: A unique name for the channel mixer.

## See Also

### Creating a Channel Mixer

- [init(channelLayout:)](init%28channellayout_%29.md): Creates a channel mixer with the given channel layout.

# initWithChannelLayout:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named channel mixer with the given channel layout.

## Declaration

```objectivec
- (instancetype) initWithChannelLayout:(AVAudioChannelLayout *) layout identifier:(NSString *) identifier;
```

## Parameters

- `layout`: A channel configuration for the mixer’s input audio.
- `identifier`: A unique name for the channel mixer.

## See Also

### Creating a Channel Mixer

- [initWithChannelLayout:](init%28channellayout_%29.md): Creates a channel mixer with the given channel layout.
