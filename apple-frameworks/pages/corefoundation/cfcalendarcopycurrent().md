> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendarcopycurrent()](https://developer.apple.com/documentation/corefoundation/cfcalendarcopycurrent())

# CFCalendarCopyCurrent() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of the logical calendar for the current user.

## Declaration

```swift
func CFCalendarCopyCurrent() -> CFCalendar!
```

<a id="return-value"></a>

## Return Value

The logical calendar for the current user that is formed from the settings for the current user’s chosen system locale overlaid with any custom settings the user has specified in System Preferences. This function may return a retained cached object, not a new object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Settings you get from this calendar do not change if user defaults change so that your operations are consistent.

Typically you perform some operations on the returned object and then release it. The returned object may be cached, so you do not need to hold on to it indefinitely.

## See Also

### Creating a Calendar

- [CFCalendarCreateWithIdentifier(\_:\_:)](cfcalendarcreatewithidentifier%28____%29.md): Returns a calendar object for the calendar identified by a calendar identifier.

# CFCalendarCopyCurrent (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of the logical calendar for the current user.

## Declaration

```objectivec
extern CFCalendarRefCFCalendarCopyCurrent();
```

<a id="return-value"></a>

## Return Value

The logical calendar for the current user that is formed from the settings for the current user’s chosen system locale overlaid with any custom settings the user has specified in System Preferences. This function may return a retained cached object, not a new object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Settings you get from this calendar do not change if user defaults change so that your operations are consistent.

Typically you perform some operations on the returned object and then release it. The returned object may be cached, so you do not need to hold on to it indefinitely.

## See Also

### Creating a Calendar

- [CFCalendarCreateWithIdentifier](cfcalendarcreatewithidentifier%28____%29.md): Returns a calendar object for the calendar identified by a calendar identifier.
