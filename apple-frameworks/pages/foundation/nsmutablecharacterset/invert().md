> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/invert()](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/invert())

# invert() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces all the characters in the receiver with all the characters it didn’t previously contain.

## Declaration

```swift
func invert()
```

<a id="Discussion"></a>

## Discussion

Inverting a mutable character set, whether by [invert()](invert%28%29.md) or by [inverted](../nscharacterset/inverted.md), is much less efficient than inverting an immutable character set with [inverted](../nscharacterset/inverted.md).

## See Also

### Related Documentation

- [inverted](../nscharacterset/inverted.md): A character set containing only characters that don’t exist in the receiver.

# invert (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces all the characters in the receiver with all the characters it didn’t previously contain.

## Declaration

```objectivec
- (void) invert;
```

<a id="Discussion"></a>

## Discussion

Inverting a mutable character set, whether by [invert](invert%28%29.md) or by [invertedSet](../nscharacterset/inverted.md), is much less efficient than inverting an immutable character set with [invertedSet](../nscharacterset/inverted.md).

## See Also

### Related Documentation

- [invertedSet](../nscharacterset/inverted.md): A character set containing only characters that don’t exist in the receiver.
