> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancedomain](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancedomain)

# MACaptionAppearanceDomain (Swift)

**Framework:** Media Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A value that specifies which domain to retrieve a preference setting from.

## Declaration

```swift
enum MACaptionAppearanceDomain
```

## Topics

### Constants

- [MACaptionAppearanceDomain.default](macaptionappearancedomain/default.md): The system default value for the setting should be returned.
- [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md): The user’s preferred value for the setting should be returned.

### Enumeration Cases

- [MACaptionAppearanceDomain.videoConferencing](macaptionappearancedomain/videoconferencing.md)

### Initializers

- [init(rawValue:)](macaptionappearancedomain/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md): A value that specifies the type of captions to display.
- [MACaptionAppearanceBehavior](macaptionappearancebehavior.md): A value that indicates the preferred behavior for a preference setting.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
- [MACaptionAppearanceTextEdgeStyle](macaptionappearancetextedgestyle.md): A value that specifies a style for the outside of the text.

# MACaptionAppearanceDomain (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A value that specifies which domain to retrieve a preference setting from.

## Declaration

```objectivec
enum MACaptionAppearanceDomain : CFIndex;
```

## Topics

### Constants

- [kMACaptionAppearanceDomainDefault](macaptionappearancedomain/default.md): The system default value for the setting should be returned.
- [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md): The user’s preferred value for the setting should be returned.

### Enumeration Cases

- [kMACaptionAppearanceDomainVideoConferencing](macaptionappearancedomain/videoconferencing.md)

## See Also

### Constants

- [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md): A value that specifies the type of captions to display.
- [MACaptionAppearanceBehavior](macaptionappearancebehavior.md): A value that indicates the preferred behavior for a preference setting.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
- [MACaptionAppearanceTextEdgeStyle](macaptionappearancetextedgestyle.md): A value that specifies a style for the outside of the text.
