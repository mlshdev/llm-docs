> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticselect](https://developer.apple.com/documentation/accelerate/bnnsarithmeticselect)

# BNNSArithmeticSelect (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An operation that selects elements from either its second or third input based on the corresponding value of its first input.

## Declaration

```swift
var BNNSArithmeticSelect: BNNSArithmeticFunction { get }
```

<a id="Discussion"></a>

## Discussion

This function returns values using the following operation:

```c
 out = in1 ? in2 : in3
```

## See Also

### Ternary Arithmetic Functions

- [BNNSArithmeticMultiplyAdd](bnnsarithmeticmultiplyadd.md): An operation that calculates the element-wise fused multiply-add of its three inputs.

# BNNSArithmeticSelect (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An operation that selects elements from either its second or third input based on the corresponding value of its first input.

## Declaration

```objectivec
BNNSArithmeticSelect
```

<a id="Discussion"></a>

## Discussion

This function returns values using the following operation:

```c
 out = in1 ? in2 : in3
```

## See Also

### Ternary Arithmetic Functions

- [BNNSArithmeticMultiplyAdd](bnnsarithmeticmultiplyadd.md): An operation that calculates the element-wise fused multiply-add of its three inputs.
