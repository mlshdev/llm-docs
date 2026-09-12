> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/style](https://developer.apple.com/documentation/foundation/dateformatter/style)

# DateFormatter.Style (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The following constants specify predefined format styles for dates and times.

## Declaration

```swift
enum Style
```

<a id="overview"></a>

## Overview

The format for these date and time styles is not exact because they depend on the locale, user preference settings, and the operating system version. Do not use these constants if you want an exact format.

## Topics

### Constants

- [DateFormatter.Style.none](style/none.md)
- [DateFormatter.Style.short](style/short.md)
- [DateFormatter.Style.medium](style/medium.md)
- [DateFormatter.Style.long](style/long.md)
- [DateFormatter.Style.full](style/full.md)

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

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

- [DateFormatter.Behavior](behavior.md): Constants that specify the behavior `NSDateFormatter` should exhibit.

# NSDateFormatterStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The following constants specify predefined format styles for dates and times.

## Declaration

```objectivec
enum NSDateFormatterStyle : NSUInteger;
```

<a id="overview"></a>

## Overview

The format for these date and time styles is not exact because they depend on the locale, user preference settings, and the operating system version. Do not use these constants if you want an exact format.

## Topics

### Constants

- [NSDateFormatterNoStyle](style/none.md)
- [NSDateFormatterShortStyle](style/short.md)
- [NSDateFormatterMediumStyle](style/medium.md)
- [NSDateFormatterLongStyle](style/long.md)
- [NSDateFormatterFullStyle](style/full.md)

## See Also

### Constants

- [NSDateFormatterBehavior](behavior.md): Constants that specify the behavior `NSDateFormatter` should exhibit.
