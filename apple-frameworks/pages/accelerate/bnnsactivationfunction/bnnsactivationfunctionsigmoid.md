> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionsigmoid](https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionsigmoid)

# BNNSActivationFunctionSigmoid

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An activation function that returns the sigmoid function of its input.

## Declaration

```objectivec
BNNSActivationFunctionSigmoid
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the logistic function:

```c
1.0 / (1.0 + exp(-x))
```

The following illustrates the output that the activation function generates from inputs in the range `-10...10`:

![Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. ](https://developer.apple.com/images/com.apple.accelerate/media-3402819@2x.png)
