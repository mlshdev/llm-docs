> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nswrapcalendarcomponents](https://developer.apple.com/documentation/foundation/nswrapcalendarcomponents)

# NSWrapCalendarComponents (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.

> Use [wrapComponents](nscalendar/options/wrapcomponents.md) instead.

## Declaration

```swift
var NSWrapCalendarComponents: Int { get }
```

## See Also

### Constants

- [wrapComponents](nscalendar/options/wrapcomponents.md): Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.
- [matchStrictly](nscalendar/options/matchstrictly.md): Specifies that the operation should travel as far forward or backward as necessary looking for a match.
- [searchBackwards](nscalendar/options/searchbackwards.md): Specifies that the operation should travel backwards to find the previous match before the given date.
- [matchPreviousTimePreservingSmallerUnits](nscalendar/options/matchprevioustimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *previous* existing value of the missing unit and preserves the lower units’ values.
- [matchNextTimePreservingSmallerUnits](nscalendar/options/matchnexttimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and preserves the lower units’ values.
- [matchNextTime](nscalendar/options/matchnexttime.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and *does not* preserve the lower units’ values.
- [matchFirst](nscalendar/options/matchfirst.md): Specifies that, if there are two or more matching times, the operation should return the first occurrence.
- [matchLast](nscalendar/options/matchlast.md): Specifies that, if there are two or more matching times, the operation should return the last occurrence.

# NSWrapCalendarComponents (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.

> Use [NSCalendarWrapComponents](nscalendar/options/wrapcomponents.md) instead.

## Declaration

```objectivec
NSWrapCalendarComponents
```

## See Also

### Constants

- [NSCalendarWrapComponents](nscalendar/options/wrapcomponents.md): Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.
- [NSCalendarMatchStrictly](nscalendar/options/matchstrictly.md): Specifies that the operation should travel as far forward or backward as necessary looking for a match.
- [NSCalendarSearchBackwards](nscalendar/options/searchbackwards.md): Specifies that the operation should travel backwards to find the previous match before the given date.
- [NSCalendarMatchPreviousTimePreservingSmallerUnits](nscalendar/options/matchprevioustimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *previous* existing value of the missing unit and preserves the lower units’ values.
- [NSCalendarMatchNextTimePreservingSmallerUnits](nscalendar/options/matchnexttimepreservingsmallerunits.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and preserves the lower units’ values.
- [NSCalendarMatchNextTime](nscalendar/options/matchnexttime.md): Specifies that, when there is no matching time before the end of the next instance of the next highest unit specified in the given `NSDateComponents` object, this method uses the *next* existing value of the missing unit and *does not* preserve the lower units’ values.
- [NSCalendarMatchFirst](nscalendar/options/matchfirst.md): Specifies that, if there are two or more matching times, the operation should return the first occurrence.
- [NSCalendarMatchLast](nscalendar/options/matchlast.md): Specifies that, if there are two or more matching times, the operation should return the last occurrence.
