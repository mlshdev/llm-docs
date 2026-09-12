> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionscaledtanh](https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionscaledtanh)

# BNNSActivationFunctionScaledTanh

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An activation function that returns the scaled hyperbolic tangent of its input.

## Declaration

```objectivec
BNNSActivationFunctionScaledTanh
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the following operation:

```c
alpha*tanh(x*beta)
```

Use `alpha` and `beta` to specify the scale and input multiplier:

```swift
var activation = BNNSActivation(function: .scaledTanh, 
                                alpha: 1, 
                                beta: 0.5)
```

The following illustrates the output that the activation function generates from inputs in the range `-10...10`:

![Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. ](https://developer.apple.com/images/com.apple.accelerate/media-3401547@2x.png)
