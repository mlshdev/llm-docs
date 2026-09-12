> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendarcreatewithidentifier(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcalendarcreatewithidentifier(_:_:))

# CFCalendarCreateWithIdentifier(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a calendar object for the calendar identified by a calendar identifier.

## Declaration

```swift
func CFCalendarCreateWithIdentifier(_ allocator: CFAllocator!, _ identifier: CFCalendarIdentifier!) -> CFCalendar!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `identifier`: A calendar identifier. Calendar identifier constants are given in [CFLocale](cflocale.md).

<a id="return-value"></a>

## Return Value

A calendar object for the calendar identified by `ident`. If the identifier is unknown (if, for example, it is either an unrecognized string, or the calendar is not supported by the current version of the operating system), returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Calendar

- [CFCalendarCopyCurrent()](cfcalendarcopycurrent%28%29.md): Returns a copy of the logical calendar for the current user.

# CFCalendarCreateWithIdentifier (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a calendar object for the calendar identified by a calendar identifier.

## Declaration

```objectivec
extern CFCalendarRefCFCalendarCreateWithIdentifier(CFAllocatorRef allocator, CFCalendarIdentifier identifier);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `identifier`: A calendar identifier. Calendar identifier constants are given in [CFLocaleRef](cflocale.md).

<a id="return-value"></a>

## Return Value

A calendar object for the calendar identified by `ident`. If the identifier is unknown (if, for example, it is either an unrecognized string, or the calendar is not supported by the current version of the operating system), returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Calendar

- [CFCalendarCopyCurrent](cfcalendarcopycurrent%28%29.md): Returns a copy of the logical calendar for the current user.
