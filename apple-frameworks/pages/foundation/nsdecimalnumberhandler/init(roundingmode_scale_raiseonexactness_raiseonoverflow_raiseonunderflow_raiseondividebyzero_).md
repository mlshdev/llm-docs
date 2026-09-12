> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumberhandler/init(roundingmode:scale:raiseonexactness:raiseonoverflow:raiseonunderflow:raiseondividebyzero:)](https://developer.apple.com/documentation/foundation/nsdecimalnumberhandler/init(roundingmode:scale:raiseonexactness:raiseonoverflow:raiseonunderflow:raiseondividebyzero:))

# init(roundingMode:scale:raiseOnExactness:raiseOnOverflow:raiseOnUnderflow:raiseOnDivideByZero:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSDecimalNumberHandler` object initialized so it behaves as specified by the method’s arguments.

## Declaration

```swift
init(roundingMode: NSDecimalNumber.RoundingMode, scale: Int16, raiseOnExactness exact: Bool, raiseOnOverflow overflow: Bool, raiseOnUnderflow underflow: Bool, raiseOnDivideByZero divideByZero: Bool)
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

An initialized `NSDecimalNumberHandler` object initialized with customized behavior. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

See the [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md) protocol specification for a complete explanation of the possible behaviors.

# initWithRoundingMode:scale:raiseOnExactness:raiseOnOverflow:raiseOnUnderflow:raiseOnDivideByZero: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSDecimalNumberHandler` object initialized so it behaves as specified by the method’s arguments.

## Declaration

```objectivec
- (instancetype) initWithRoundingMode:(NSRoundingMode) roundingMode scale:(short) scale raiseOnExactness:(BOOL) exact raiseOnOverflow:(BOOL) overflow raiseOnUnderflow:(BOOL) underflow raiseOnDivideByZero:(BOOL) divideByZero;
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

An initialized `NSDecimalNumberHandler` object initialized with customized behavior. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

See the [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md) protocol specification for a complete explanation of the possible behaviors.
