> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancebehavior](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancebehavior)

# MACaptionAppearanceBehavior (Swift)

**Framework:** Media Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A value that indicates the preferred behavior for a preference setting.

## Declaration

```swift
enum MACaptionAppearanceBehavior
```

## Topics

### Constants

- [MACaptionAppearanceBehavior.useValue](macaptionappearancebehavior/usevalue.md): The preference setting should always be used.
- [MACaptionAppearanceBehavior.useContentIfAvailable](macaptionappearancebehavior/usecontentifavailable.md): The preference setting should be used unless the content media being played has its own custom value for this setting.

### Initializers

- [init(rawValue:)](macaptionappearancebehavior/init%28rawvalue_%29.md)

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

- [MACaptionAppearanceDomain](macaptionappearancedomain.md): A value that specifies which domain to retrieve a preference setting from.
- [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md): A value that specifies the type of captions to display.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
- [MACaptionAppearanceTextEdgeStyle](macaptionappearancetextedgestyle.md): A value that specifies a style for the outside of the text.

# MACaptionAppearanceBehavior (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A value that indicates the preferred behavior for a preference setting.

## Declaration

```objectivec
enum MACaptionAppearanceBehavior : CFIndex;
```

## Topics

### Constants

- [kMACaptionAppearanceBehaviorUseValue](macaptionappearancebehavior/usevalue.md): The preference setting should always be used.
- [kMACaptionAppearanceBehaviorUseContentIfAvailable](macaptionappearancebehavior/usecontentifavailable.md): The preference setting should be used unless the content media being played has its own custom value for this setting.

## See Also

### Constants

- [MACaptionAppearanceDomain](macaptionappearancedomain.md): A value that specifies which domain to retrieve a preference setting from.
- [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md): A value that specifies the type of captions to display.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
- [MACaptionAppearanceTextEdgeStyle](macaptionappearancetextedgestyle.md): A value that specifies a style for the outside of the text.
