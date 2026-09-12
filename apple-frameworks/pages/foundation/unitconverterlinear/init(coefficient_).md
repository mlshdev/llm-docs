> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitconverterlinear/init(coefficient:)](https://developer.apple.com/documentation/foundation/unitconverterlinear/init(coefficient:))

# init(coefficient:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes the unit converter with the coefficient you specify.

## Declaration

```swift
convenience init(coefficient: Double)
```

## Parameters

- `coefficient`: The coefficient used in the linear unit conversion calculation.

<a id="return-value"></a>

## Return Value

A unit converter initialized with the specified coefficient.

<a id="Discussion"></a>

## Discussion

Calling this initializer is equivalent to calling [init(coefficient:constant:)](init%28coefficient_constant_%29.md), passing `0` for the `constant` parameter.

## See Also

### Creating Unit Converters

- [init(coefficient:constant:)](init%28coefficient_constant_%29.md): Creates a unit converter with the coefficient and constant you specify.

# initWithCoefficient: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes the unit converter with the coefficient you specify.

## Declaration

```objectivec
- (instancetype) initWithCoefficient:(double) coefficient;
```

## Parameters

- `coefficient`: The coefficient used in the linear unit conversion calculation.

<a id="return-value"></a>

## Return Value

A unit converter initialized with the specified coefficient.

<a id="Discussion"></a>

## Discussion

Calling this initializer is equivalent to calling [initWithCoefficient:constant:](init%28coefficient_constant_%29.md), passing `0` for the `constant` parameter.

## See Also

### Creating Unit Converters

- [initWithCoefficient:constant:](init%28coefficient_constant_%29.md): Creates a unit converter with the coefficient and constant you specify.
