> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumberhandler/decimalnumberhandlerwithroundingmode:scale:raiseonexactness:raiseonoverflow:raiseonunderflow:raiseondividebyzero:](https://developer.apple.com/documentation/foundation/nsdecimalnumberhandler/decimalnumberhandlerwithroundingmode:scale:raiseonexactness:raiseonoverflow:raiseonunderflow:raiseondividebyzero:)

# decimalNumberHandlerWithRoundingMode:scale:raiseOnExactness:raiseOnOverflow:raiseOnUnderflow:raiseOnDivideByZero:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSDecimalNumberHandler` object with customized behavior.

## Declaration

```objectivec
+ (instancetype) decimalNumberHandlerWithRoundingMode:(NSRoundingMode) roundingMode scale:(short) scale raiseOnExactness:(BOOL) exact raiseOnOverflow:(BOOL) overflow raiseOnUnderflow:(BOOL) underflow raiseOnDivideByZero:(BOOL) divideByZero;
```

## Parameters

- `roundingMode`: The rounding mode to use. There are four possible values: `NSRoundUp`, `NSRoundDown`, `NSRoundPlain`, and `NSRoundBankers`.
- `scale`: The number of digits a rounded value should have after its decimal point.
- `exact`: If [true](https://developer.apple.com/documentation/swift/true), in the event of an exactness error the handler will raise an exception, otherwise it will ignore the error and return control to the calling method.
- `overflow`: If [true](https://developer.apple.com/documentation/swift/true), in the event of an overflow error the handler will raise an exception, otherwise it will ignore the error and return control to the calling method
- `underflow`: If [true](https://developer.apple.com/documentation/swift/true), in the event of an underflow error the handler will raise an exception, otherwise it will ignore the error and return control to the calling method
- `divideByZero`: If [true](https://developer.apple.com/documentation/swift/true), in the event of a divide by zero error the handler will raise an exception, otherwise it will ignore the error and return control to the calling method

<a id="return-value"></a>

## Return Value

An `NSDecimalNumberHandler` object with customized behavior.

<a id="Discussion"></a>

## Discussion

See the [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md) protocol specification for a complete explanation of the possible behaviors.

## See Also

### Creating a Decimal Number Handler

- [defaultDecimalNumberHandler](default.md): Returns the default instance of `NSDecimalNumberHandler`.
