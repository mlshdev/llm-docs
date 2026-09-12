> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/options/searchbackwards](https://developer.apple.com/documentation/foundation/nscalendar/options/searchbackwards)

# searchBackwards (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the operation should travel backwards to find the previous match before the given date.

## Declaration

```swift
static var searchBackwards: NSCalendar.Options { get }
```

## See Also

### Constants

- [wrapComponents](wrapcomponents.md): Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.
- [matchStrictly](matchstrictly.md): Specifies that the operation should travel as far forward or backward as necessary looking for a match.
- [matchPreviousTimePreservingSmallerUnits](matchprevioustimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *previous* existing value of the missing unit and preserves the lower units’ values.
- [matchNextTimePreservingSmallerUnits](matchnexttimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and preserves the lower units’ values.
- [matchNextTime](matchnexttime.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and *does not* preserve the lower units’ values.
- [matchFirst](matchfirst.md): Specifies that, if there are two or more matching times, the operation should return the first occurrence.
- [matchLast](matchlast.md): Specifies that, if there are two or more matching times, the operation should return the last occurrence.
- [NSWrapCalendarComponents](../../nswrapcalendarcomponents.md): Deprecated. Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.

# NSCalendarSearchBackwards (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the operation should travel backwards to find the previous match before the given date.

## Declaration

```objectivec
NSCalendarSearchBackwards
```

## See Also

### Constants

- [NSCalendarWrapComponents](wrapcomponents.md): Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.
- [NSCalendarMatchStrictly](matchstrictly.md): Specifies that the operation should travel as far forward or backward as necessary looking for a match.
- [NSCalendarMatchPreviousTimePreservingSmallerUnits](matchprevioustimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *previous* existing value of the missing unit and preserves the lower units’ values.
- [NSCalendarMatchNextTimePreservingSmallerUnits](matchnexttimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and preserves the lower units’ values.
- [NSCalendarMatchNextTime](matchnexttime.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and *does not* preserve the lower units’ values.
- [NSCalendarMatchFirst](matchfirst.md): Specifies that, if there are two or more matching times, the operation should return the first occurrence.
- [NSCalendarMatchLast](matchlast.md): Specifies that, if there are two or more matching times, the operation should return the last occurrence.
- [NSWrapCalendarComponents](../../nswrapcalendarcomponents.md): Deprecated. Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.
