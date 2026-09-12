> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/islenient](https://developer.apple.com/documentation/foundation/numberformatter/islenient)

# isLenient (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the receiver will use heuristics to guess at the number which is intended by a string.

## Declaration

```swift
var isLenient: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the formatter is set to be lenient, as with any guessing it may get the result number wrong (that is, a number other than that which was intended).

# lenient (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the receiver will use heuristics to guess at the number which is intended by a string.

## Declaration

```objectivec
@property (getter=isLenient) BOOL lenient;
```

<a id="Discussion"></a>

## Discussion

If the formatter is set to be lenient, as with any guessing it may get the result number wrong (that is, a number other than that which was intended).
