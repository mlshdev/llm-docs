> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/formatterbehavior](https://developer.apple.com/documentation/foundation/numberformatter/formatterbehavior)

# formatterBehavior (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatter behavior of the receiver.

## Declaration

```swift
var formatterBehavior: NumberFormatter.Behavior { get set }
```

## See Also

### Related Documentation

- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)

### Configuring Formatter Behavior and Style

- [setDefaultFormatterBehavior(\_:)](setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [defaultFormatterBehavior()](defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [numberStyle](numberstyle.md): The number style used by the receiver.
- [generatesDecimalNumbers](generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.

# formatterBehavior (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatter behavior of the receiver.

## Declaration

```objectivec
@property NSNumberFormatterBehavior formatterBehavior;
```

## See Also

### Related Documentation

- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)

### Configuring Formatter Behavior and Style

- [setDefaultFormatterBehavior:](setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [defaultFormatterBehavior](defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [numberStyle](numberstyle.md): The number style used by the receiver.
- [generatesDecimalNumbers](generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.
