> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendargetidentifier(_:)](https://developer.apple.com/documentation/corefoundation/cfcalendargetidentifier(_:))

# CFCalendarGetIdentifier(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the given calendar’s identifier.

## Declaration

```swift
func CFCalendarGetIdentifier(_ calendar: CFCalendar!) -> CFCalendarIdentifier!
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

A string representation of `calendar`’s identifier. Calendar identifier constants can be found in [CFLocale](cflocale.md). Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

# CFCalendarGetIdentifier (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the given calendar’s identifier.

## Declaration

```objectivec
extern CFCalendarIdentifierCFCalendarGetIdentifier(CFCalendarRef calendar);
```

## Parameters

- `calendar`: The calendar to examine.

<a id="return-value"></a>

## Return Value

A string representation of `calendar`’s identifier. Calendar identifier constants can be found in [CFLocaleRef](cflocale.md). Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).
