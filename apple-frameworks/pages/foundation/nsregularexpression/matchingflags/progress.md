> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/matchingflags/progress](https://developer.apple.com/documentation/foundation/nsregularexpression/matchingflags/progress)

# progress (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Set when the Block is called to report progress during a long-running match operation.

## Declaration

```swift
static var progress: NSRegularExpression.MatchingFlags { get }
```

## See Also

### Constants

- [completed](completed.md): Set when the Block is called after matching has completed.
- [hitEnd](hitend.md): Set when the current match operation reached the end of the search range.
- [requiredEnd](requiredend.md): Set when the current match depended on the location of the end of the search range.
- [internalError](internalerror.md): Set when matching failed due to an internal error.

# NSMatchingProgress (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Set when the Block is called to report progress during a long-running match operation.

## Declaration

```objectivec
NSMatchingProgress
```

## See Also

### Constants

- [NSMatchingCompleted](completed.md): Set when the Block is called after matching has completed.
- [NSMatchingHitEnd](hitend.md): Set when the current match operation reached the end of the search range.
- [NSMatchingRequiredEnd](requiredend.md): Set when the current match depended on the location of the end of the search range.
- [NSMatchingInternalError](internalerror.md): Set when matching failed due to an internal error.
