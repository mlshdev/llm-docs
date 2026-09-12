> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/kaudiochannellayouttag_beginreserved](https://developer.apple.com/documentation/coreaudiotypes/kaudiochannellayouttag_beginreserved)

# kAudioChannelLayoutTag_BeginReserved (Swift)

**Framework:** Core Audio Types  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The beginning value for a reserved range of layout tags.

## Declaration

```swift
var kAudioChannelLayoutTag_BeginReserved: AudioChannelLayoutTag { get }
```

<a id="Discussion"></a>

## Discussion

The values in the range between `kAudioChannelLayoutTag_BeginReserved` and [kAudioChannelLayoutTag_EndReserved](kaudiochannellayouttag_endreserved.md) are for future Apple use. Do not create layout tags that fall in the range created by these values.

## See Also

### Reserved Tag Range

- [kAudioChannelLayoutTag_EndReserved](kaudiochannellayouttag_endreserved.md): The ending value for a reserved range of layout tags.

# kAudioChannelLayoutTag_BeginReserved (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The beginning value for a reserved range of layout tags.

## Declaration

```objectivec
kAudioChannelLayoutTag_BeginReserved
```

<a id="Discussion"></a>

## Discussion

The values in the range between `kAudioChannelLayoutTag_BeginReserved` and [kAudioChannelLayoutTag_EndReserved](kaudiochannellayouttag_endreserved.md) are for future Apple use. Do not create layout tags that fall in the range created by these values.

## See Also

### Reserved Tag Range

- [kAudioChannelLayoutTag_EndReserved](kaudiochannellayouttag_endreserved.md): The ending value for a reserved range of layout tags.
