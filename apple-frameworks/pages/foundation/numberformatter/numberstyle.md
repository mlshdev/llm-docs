> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/numberstyle](https://developer.apple.com/documentation/foundation/numberformatter/numberstyle)

# numberStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number style used by the receiver.

## Declaration

```swift
var numberStyle: NumberFormatter.Style { get set }
```

<a id="Discussion"></a>

## Discussion

Styles are essentially predetermined sets of values for certain properties. Examples of number-formatter styles are those used for decimal values, percentage values, and currency.

## See Also

### Configuring Formatter Behavior and Style

- [formatterBehavior](formatterbehavior.md): The formatter behavior of the receiver.
- [setDefaultFormatterBehavior(\_:)](setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [defaultFormatterBehavior()](defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [generatesDecimalNumbers](generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.

# numberStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number style used by the receiver.

## Declaration

```objectivec
@property NSNumberFormatterStyle numberStyle;
```

<a id="Discussion"></a>

## Discussion

Styles are essentially predetermined sets of values for certain properties. Examples of number-formatter styles are those used for decimal values, percentage values, and currency.

## See Also

### Configuring Formatter Behavior and Style

- [formatterBehavior](formatterbehavior.md): The formatter behavior of the receiver.
- [setDefaultFormatterBehavior:](setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [defaultFormatterBehavior](defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [generatesDecimalNumbers](generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.
