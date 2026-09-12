> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/kaudiochannellayouttag_unknown](https://developer.apple.com/documentation/coreaudiotypes/kaudiochannellayouttag_unknown)

# kAudioChannelLayoutTag_Unknown (Swift)

**Framework:** Core Audio Types  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The channel layout is unknown.

## Declaration

```swift
var kAudioChannelLayoutTag_Unknown: AudioChannelLayoutTag { get }
```

<a id="Discussion"></a>

## Discussion

This tag needs to be `OR`ed with the actual number of channels.

## See Also

### General Information Tags

- [kAudioChannelLayoutTag_DiscreteInOrder](kaudiochannellayouttag_discreteinorder.md): A tag used to map input channels to output channels without changing the channel order.

# kAudioChannelLayoutTag_Unknown (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The channel layout is unknown.

## Declaration

```objectivec
kAudioChannelLayoutTag_Unknown
```

<a id="Discussion"></a>

## Discussion

This tag needs to be `OR`ed with the actual number of channels.

## See Also

### General Information Tags

- [kAudioChannelLayoutTag_DiscreteInOrder](kaudiochannellayouttag_discreteinorder.md): A tag used to map input channels to output channels without changing the channel order.
