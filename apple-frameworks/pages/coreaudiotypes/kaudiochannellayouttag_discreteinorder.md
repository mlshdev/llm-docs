> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/kaudiochannellayouttag_discreteinorder](https://developer.apple.com/documentation/coreaudiotypes/kaudiochannellayouttag_discreteinorder)

# kAudioChannelLayoutTag_DiscreteInOrder (Swift)

**Framework:** Core Audio Types  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A tag used to map input channels to output channels without changing the channel order.

## Declaration

```swift
var kAudioChannelLayoutTag_DiscreteInOrder: AudioChannelLayoutTag { get }
```

<a id="Discussion"></a>

## Discussion

This tag needs to be `OR`ed with the actual number of channels.

## See Also

### General Information Tags

- [kAudioChannelLayoutTag_Unknown](kaudiochannellayouttag_unknown.md): The channel layout is unknown.

# kAudioChannelLayoutTag_DiscreteInOrder (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A tag used to map input channels to output channels without changing the channel order.

## Declaration

```objectivec
kAudioChannelLayoutTag_DiscreteInOrder
```

<a id="Discussion"></a>

## Discussion

This tag needs to be `OR`ed with the actual number of channels.

## See Also

### General Information Tags

- [kAudioChannelLayoutTag_Unknown](kaudiochannellayouttag_unknown.md): The channel layout is unknown.
