> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/eksource/calendars](https://developer.apple.com/documentation/eventkit/eksource/calendars)

# calendars (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 2.0)

The calendars that belong to this source object.

## Declaration

```swift
var calendars: Set<EKCalendar> { get }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This property is not available in macOS.

## See Also

### Accessing Calendars

- [calendars(for:)](calendars%28for_%29.md): Returns the calendars that belong to this source object that support a particular entity type.

# calendars (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

The calendars that belong to this source object.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<EKCalendar *> * calendars;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This property is not available in macOS.

## See Also

### Accessing Calendars

- [calendarsForEntityType:](calendars%28for_%29.md): Returns the calendars that belong to this source object that support a particular entity type.
