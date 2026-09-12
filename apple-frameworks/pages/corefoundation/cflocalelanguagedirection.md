> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalelanguagedirection](https://developer.apple.com/documentation/corefoundation/cflocalelanguagedirection)

# CFLocaleLanguageDirection (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants describe the text direction for a language. They are returned by the functions [CFLocaleGetLanguageCharacterDirection(\_:)](cflocalegetlanguagecharacterdirection%28__%29.md) and [CFLocaleGetLanguageLineDirection(\_:)](cflocalegetlanguagelinedirection%28__%29.md).

## Declaration

```swift
enum CFLocaleLanguageDirection
```

## Topics

### Constants

- [CFLocaleLanguageDirection.unknown](cflocalelanguagedirection/unknown.md)
- [CFLocaleLanguageDirection.leftToRight](cflocalelanguagedirection/lefttoright.md)
- [CFLocaleLanguageDirection.rightToLeft](cflocalelanguagedirection/righttoleft.md)
- [CFLocaleLanguageDirection.topToBottom](cflocalelanguagedirection/toptobottom.md)
- [CFLocaleLanguageDirection.bottomToTop](cflocalelanguagedirection/bottomtotop.md)

### Initializers

- [init(rawValue:)](cflocalelanguagedirection/init%28rawvalue_%29.md)

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

- [Locale Property Keys](locale-property-keys.md): Predefined locale keys used to get property values.
- [Locale Calendar Identifiers](locale-calendar-identifiers.md): Predefined locale keys used to get calendar values—values for `kCFLocaleCalendarIdentifier`.
- [Locale Change Notification](locale-change-notification.md): Identifier for notification sent if the current locale changes.

# CFLocaleLanguageDirection (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants describe the text direction for a language. They are returned by the functions [CFLocaleGetLanguageCharacterDirection](cflocalegetlanguagecharacterdirection%28__%29.md) and [CFLocaleGetLanguageLineDirection](cflocalegetlanguagelinedirection%28__%29.md).

## Declaration

```objectivec
enum CFLocaleLanguageDirection : CFIndex;
```

## Topics

### Constants

- [kCFLocaleLanguageDirectionUnknown](cflocalelanguagedirection/unknown.md)
- [kCFLocaleLanguageDirectionLeftToRight](cflocalelanguagedirection/lefttoright.md)
- [kCFLocaleLanguageDirectionRightToLeft](cflocalelanguagedirection/righttoleft.md)
- [kCFLocaleLanguageDirectionTopToBottom](cflocalelanguagedirection/toptobottom.md)
- [kCFLocaleLanguageDirectionBottomToTop](cflocalelanguagedirection/bottomtotop.md)

## See Also

### Constants

- [Locale Property Keys](locale-property-keys.md): Predefined locale keys used to get property values.
- [Locale Calendar Identifiers](locale-calendar-identifiers.md): Predefined locale keys used to get calendar values—values for `kCFLocaleCalendarIdentifier`.
- [Locale Change Notification](locale-change-notification.md): Identifier for notification sent if the current locale changes.
