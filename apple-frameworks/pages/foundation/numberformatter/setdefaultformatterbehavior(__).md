> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/setdefaultformatterbehavior(_:)](https://developer.apple.com/documentation/foundation/numberformatter/setdefaultformatterbehavior(_:))

# setDefaultFormatterBehavior(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the default formatter behavior for new instances of `NSNumberFormatter` .

## Declaration

```swift
class func setDefaultFormatterBehavior(_ behavior: NumberFormatter.Behavior)
```

## Parameters

- `behavior`: An `NSNumberFormatterBehavior` constant that indicates the revision of the class providing the default behavior.

## See Also

### Configuring Formatter Behavior and Style

- [formatterBehavior](formatterbehavior.md): The formatter behavior of the receiver.
- [defaultFormatterBehavior()](defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [numberStyle](numberstyle.md): The number style used by the receiver.
- [generatesDecimalNumbers](generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.

# setDefaultFormatterBehavior: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the default formatter behavior for new instances of `NSNumberFormatter` .

## Declaration

```objectivec
+ (void) setDefaultFormatterBehavior:(NSNumberFormatterBehavior) behavior;
```

## Parameters

- `behavior`: An `NSNumberFormatterBehavior` constant that indicates the revision of the class providing the default behavior.

## See Also

### Configuring Formatter Behavior and Style

- [formatterBehavior](formatterbehavior.md): The formatter behavior of the receiver.
- [defaultFormatterBehavior](defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [numberStyle](numberstyle.md): The number style used by the receiver.
- [generatesDecimalNumbers](generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](../nsdecimalnumber.md) when it converts strings to number objects.
