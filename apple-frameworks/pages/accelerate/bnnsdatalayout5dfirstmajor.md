> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayout5dfirstmajor](https://developer.apple.com/documentation/accelerate/bnnsdatalayout5dfirstmajor)

# BNNSDataLayout5DFirstMajor (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 5D first-major tensor.

## Declaration

```swift
var BNNSDataLayout5DFirstMajor: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(i, j, k, l, m)` is at index:

`m * stride[0] + l * stride[1] + k * stride[2] + j * stride[3] + i * stride[4]`.

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).
- `size[2]` is the size of the third dimension (`k`).
- `size[3]` is the size of the fourth dimension (`l`).
- `size[4]` is the size of the fifth dimension (`m`).

## See Also

### 5D Data Layouts

- [BNNSDataLayout5DLastMajor](bnnsdatalayout5dlastmajor.md): A constant that represents a 5D last-major tensor.

# BNNSDataLayout5DFirstMajor (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 5D first-major tensor.

## Declaration

```objectivec
BNNSDataLayout5DFirstMajor
```

<a id="Discussion"></a>

## Discussion

The value `(i, j, k, l, m)` is at index:

`m * stride[0] + l * stride[1] + k * stride[2] + j * stride[3] + i * stride[4]`.

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).
- `size[2]` is the size of the third dimension (`k`).
- `size[3]` is the size of the fourth dimension (`l`).
- `size[4]` is the size of the fifth dimension (`m`).

## See Also

### 5D Data Layouts

- [BNNSDataLayout5DLastMajor](bnnsdatalayout5dlastmajor.md): A constant that represents a 5D last-major tensor.
