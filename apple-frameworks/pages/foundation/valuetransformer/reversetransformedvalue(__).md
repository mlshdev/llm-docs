> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/valuetransformer/reversetransformedvalue(_:)](https://developer.apple.com/documentation/foundation/valuetransformer/reversetransformedvalue(_:))

# reverseTransformedValue(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of the reverse transformation of a given value.

## Declaration

```swift
func reverseTransformedValue(_ value: Any?) -> Any?
```

## Parameters

- `value`: The value to reverse transform.

<a id="return-value"></a>

## Return Value

The reverse transformation of `value`.

<a id="Discussion"></a>

## Discussion

The default implementation raises an exception if [allowsReverseTransformation()](allowsreversetransformation%28%29.md) returns [false](https://developer.apple.com/documentation/swift/false); otherwise it will invoke [transformedValue(\_:)](transformedvalue%28__%29.md) with `value`.

A subclass should override this method if they require a reverse transformation that is not the same as simply reapplying the original transform (as would be the case with negation, for example). For example, if a value transformer converts a value in Fahrenheit to Celsius, this method would converts a value from Celsius to Fahrenheit.

## See Also

### Transforming Values

- [transformedValue(\_:)](transformedvalue%28__%29.md): Returns the result of transforming a given value.

# reverseTransformedValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of the reverse transformation of a given value.

## Declaration

```objectivec
- (id) reverseTransformedValue:(id) value;
```

## Parameters

- `value`: The value to reverse transform.

<a id="return-value"></a>

## Return Value

The reverse transformation of `value`.

<a id="Discussion"></a>

## Discussion

The default implementation raises an exception if [allowsReverseTransformation](allowsreversetransformation%28%29.md) returns [false](https://developer.apple.com/documentation/swift/false); otherwise it will invoke [transformedValue:](transformedvalue%28__%29.md) with `value`.

A subclass should override this method if they require a reverse transformation that is not the same as simply reapplying the original transform (as would be the case with negation, for example). For example, if a value transformer converts a value in Fahrenheit to Celsius, this method would converts a value from Celsius to Fahrenheit.

## See Also

### Transforming Values

- [transformedValue:](transformedvalue%28__%29.md): Returns the result of transforming a given value.
