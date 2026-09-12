> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/inverted](https://developer.apple.com/documentation/foundation/nscharacterset/inverted)

# inverted (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A character set containing only characters that don’t exist in the receiver.

## Declaration

```swift
var inverted: CharacterSet { get }
```

<a id="Discussion"></a>

## Discussion

Using the inverse of an immutable character set is much more efficient than inverting a mutable character set.

## See Also

### Related Documentation

- [invert()](../nsmutablecharacterset/invert%28%29.md): Replaces all the characters in the receiver with all the characters it didn’t previously contain.

# invertedSet (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A character set containing only characters that don’t exist in the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSCharacterSet * invertedSet;
```

<a id="Discussion"></a>

## Discussion

Using the inverse of an immutable character set is much more efficient than inverting a mutable character set.

## See Also

### Related Documentation

- [invert](../nsmutablecharacterset/invert%28%29.md): Replaces all the characters in the receiver with all the characters it didn’t previously contain.
