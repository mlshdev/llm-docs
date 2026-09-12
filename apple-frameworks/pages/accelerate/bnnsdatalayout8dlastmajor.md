> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayout8dlastmajor](https://developer.apple.com/documentation/accelerate/bnnsdatalayout8dlastmajor)

# BNNSDataLayout8DLastMajor (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 8D last-major tensor.

## Declaration

```swift
var BNNSDataLayout8DLastMajor: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(i, j, k, l, m, n, o, p)` is at index:

`i * stride[0] + j * stride[1] + k * stride[2] + l * stride[3] +`

`m * stride[4] + n * stride[5] + o * stride[6] + p * stride[7]`

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).
- `size[2]` is the size of the third dimension (`k`).
- `size[3]` is the size of the fourth dimension (`l`).
- `size[4]` is the size of the fifth dimension (`m`).
- `size[5]` is the size of the sixth dimension (`n`).
- `size[6]` is the size of the seventh dimension (`o`).
- `size[7]` is the size of the eighth  dimension (`p`).

## See Also

### 8D Data Layouts

- [BNNSDataLayout8DFirstMajor](bnnsdatalayout8dfirstmajor.md): A constant that represents a 8D first-major tensor.

# BNNSDataLayout8DLastMajor (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 8D last-major tensor.

## Declaration

```objectivec
BNNSDataLayout8DLastMajor
```

<a id="Discussion"></a>

## Discussion

The value `(i, j, k, l, m, n, o, p)` is at index:

`i * stride[0] + j * stride[1] + k * stride[2] + l * stride[3] +`

`m * stride[4] + n * stride[5] + o * stride[6] + p * stride[7]`

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).
- `size[2]` is the size of the third dimension (`k`).
- `size[3]` is the size of the fourth dimension (`l`).
- `size[4]` is the size of the fifth dimension (`m`).
- `size[5]` is the size of the sixth dimension (`n`).
- `size[6]` is the size of the seventh dimension (`o`).
- `size[7]` is the size of the eighth  dimension (`p`).

## See Also

### 8D Data Layouts

- [BNNSDataLayout8DFirstMajor](bnnsdatalayout8dfirstmajor.md): A constant that represents a 8D first-major tensor.
