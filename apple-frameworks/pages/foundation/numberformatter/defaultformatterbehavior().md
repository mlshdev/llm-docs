> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/defaultformatterbehavior()](https://developer.apple.com/documentation/foundation/numberformatter/defaultformatterbehavior())

# defaultFormatterBehavior() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.

## Declaration

```swift
class func defaultFormatterBehavior() -> NumberFormatter.Behavior
```

<a id="return-value"></a>

## Return Value

An `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.

## See Also

### Configuring Formatter Behavior and Style

- [formatterBehavior](formatterbehavior.md): The formatter behavior of the receiver.
- [setDefaultFormatterBehavior(\_:)](setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [numberStyle](numberstyle.md): The number style used by the receiver.
- [generatesDecimalNumbers](generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.

# defaultFormatterBehavior (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.

## Declaration

```objectivec
+ (NSNumberFormatterBehavior) defaultFormatterBehavior;
```

<a id="return-value"></a>

## Return Value

An `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.

## See Also

### Configuring Formatter Behavior and Style

- [formatterBehavior](formatterbehavior.md): The formatter behavior of the receiver.
- [setDefaultFormatterBehavior:](setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [numberStyle](numberstyle.md): The number style used by the receiver.
- [generatesDecimalNumbers](generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.
