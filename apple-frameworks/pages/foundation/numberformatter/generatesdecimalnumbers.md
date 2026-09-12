> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/generatesdecimalnumbers](https://developer.apple.com/documentation/foundation/numberformatter/generatesdecimalnumbers)

# generatesDecimalNumbers (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.

## Declaration

```swift
var generatesDecimalNumbers: Bool { get set }
```

## See Also

### Configuring Formatter Behavior and Style

- [formatterBehavior](formatterbehavior.md): The formatter behavior of the receiver.
- [setDefaultFormatterBehavior(\_:)](setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [defaultFormatterBehavior()](defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [numberStyle](numberstyle.md): The number style used by the receiver.

# generatesDecimalNumbers (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.

## Declaration

```objectivec
@property BOOL generatesDecimalNumbers;
```

## See Also

### Configuring Formatter Behavior and Style

- [formatterBehavior](formatterbehavior.md): The formatter behavior of the receiver.
- [setDefaultFormatterBehavior:](setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [defaultFormatterBehavior](defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [numberStyle](numberstyle.md): The number style used by the receiver.
