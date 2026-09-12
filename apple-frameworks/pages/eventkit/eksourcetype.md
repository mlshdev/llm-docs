> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/eksourcetype](https://developer.apple.com/documentation/eventkit/eksourcetype)

# EKSourceType (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The type of source object.

## Declaration

```swift
enum EKSourceType
```

<a id="overview"></a>

## Overview

The [sourceType](eksource/sourcetype.md) property will be set to one of these values.

## Topics

### EventKit Source Types

- [EKSourceType.local](eksourcetype/local.md): Represents a local source.
- [EKSourceType.exchange](eksourcetype/exchange.md): Represents an Exchange source.
- [EKSourceType.calDAV](eksourcetype/caldav.md): Represents a CalDAV or iCloud source.
- [EKSourceType.mobileMe](eksourcetype/mobileme.md): Represents a MobileMe source.
- [EKSourceType.subscribed](eksourcetype/subscribed.md): Represents a subscribed source.
- [EKSourceType.birthdays](eksourcetype/birthdays.md): Represents a birthday source.

### Initializers

- [init(rawValue:)](eksourcetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Source Properties

- [sourceIdentifier](eksource/sourceidentifier.md): A unique identifier for the source object.
- [sourceType](eksource/sourcetype.md): The type of this source object.
- [title](eksource/title.md): The name of this source object.

# EKSourceType (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The type of source object.

## Declaration

```objectivec
enum EKSourceType : NSInteger;
```

<a id="overview"></a>

## Overview

The [sourceType](eksource/sourcetype.md) property will be set to one of these values.

## Topics

### EventKit Source Types

- [EKSourceTypeLocal](eksourcetype/local.md): Represents a local source.
- [EKSourceTypeExchange](eksourcetype/exchange.md): Represents an Exchange source.
- [EKSourceTypeCalDAV](eksourcetype/caldav.md): Represents a CalDAV or iCloud source.
- [EKSourceTypeMobileMe](eksourcetype/mobileme.md): Represents a MobileMe source.
- [EKSourceTypeSubscribed](eksourcetype/subscribed.md): Represents a subscribed source.
- [EKSourceTypeBirthdays](eksourcetype/birthdays.md): Represents a birthday source.

## See Also

### Accessing Source Properties

- [sourceIdentifier](eksource/sourceidentifier.md): A unique identifier for the source object.
- [sourceType](eksource/sourcetype.md): The type of this source object.
- [title](eksource/title.md): The name of this source object.
