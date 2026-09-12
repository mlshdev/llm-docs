> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/matchingflags/internalerror](https://developer.apple.com/documentation/foundation/nsregularexpression/matchingflags/internalerror)

# internalError (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Set when matching failed due to an internal error.

## Declaration

```swift
static var internalError: NSRegularExpression.MatchingFlags { get }
```

## See Also

### Constants

- [progress](progress.md): Set when the Block is called to report progress during a long-running match operation.
- [completed](completed.md): Set when the Block is called after matching has completed.
- [hitEnd](hitend.md): Set when the current match operation reached the end of the search range.
- [requiredEnd](requiredend.md): Set when the current match depended on the location of the end of the search range.

# NSMatchingInternalError (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Set when matching failed due to an internal error.

## Declaration

```objectivec
NSMatchingInternalError
```

## See Also

### Constants

- [NSMatchingProgress](progress.md): Set when the Block is called to report progress during a long-running match operation.
- [NSMatchingCompleted](completed.md): Set when the Block is called after matching has completed.
- [NSMatchingHitEnd](hitend.md): Set when the current match operation reached the end of the search range.
- [NSMatchingRequiredEnd](requiredend.md): Set when the current match depended on the location of the end of the search range.
