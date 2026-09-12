> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionleakyrectifiedlinear](https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionleakyrectifiedlinear)

# BNNSActivationFunctionLeakyRectifiedLinear

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An activation function that returns its input when that is greater than or equal to zero, otherwise it returns its input multiplied by a specified value.

## Declaration

```objectivec
BNNSActivationFunctionLeakyRectifiedLinear
```

<a id="Discussion"></a>

## Discussion

This constant defines an activation function that returns values using the following operation:

```c
alpha*x if x<0, and x if x>=0
```

Use `alpha` to specify the multiplier for values less than zero range:

```swift
var activation = BNNSActivation(function: .leakyRectifiedLinear, 
                                alpha: 0.25)
```

The following illustrates the output that the activation function generates from inputs in the range `-10...10`:

![Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. ](https://developer.apple.com/images/com.apple.accelerate/media-3401548@2x.png)
