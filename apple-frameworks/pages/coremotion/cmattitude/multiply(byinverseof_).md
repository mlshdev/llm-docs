> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmattitude/multiply(byinverseof:)](https://developer.apple.com/documentation/coremotion/cmattitude/multiply(byinverseof:))

# multiply(byInverseOf:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Yields the change in attitude given a specific attitude.

## Declaration

```swift
func multiply(byInverseOf attitude: CMAttitude)
```

## Parameters

- `attitude`: An object representing the device’s attitude at a given moment of measurement.

<a id="Discussion"></a>

## Discussion

This method multiplies the inverse of the specified `CMAttitude` object by the attitude represented by the receiving object. It replaces the receiving instance with the attitude *change* relative to the object passed in `attitude`. You should cache the `CMAttitude` instance you want to use as a reference and pass that object as the argument to subsequent calls of this method.

# multiplyByInverseOfAttitude: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Yields the change in attitude given a specific attitude.

## Declaration

```objectivec
- (void) multiplyByInverseOfAttitude:(CMAttitude *) attitude;
```

## Parameters

- `attitude`: An object representing the device’s attitude at a given moment of measurement.

<a id="Discussion"></a>

## Discussion

This method multiplies the inverse of the specified `CMAttitude` object by the attitude represented by the receiving object. It replaces the receiving instance with the attitude *change* relative to the object passed in `attitude`. You should cache the `CMAttitude` instance you want to use as a reference and pass that object as the argument to subsequent calls of this method.
