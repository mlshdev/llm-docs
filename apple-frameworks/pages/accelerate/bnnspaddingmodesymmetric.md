> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspaddingmodesymmetric](https://developer.apple.com/documentation/accelerate/bnnspaddingmodesymmetric)

# BNNSPaddingModeSymmetric (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that indicates that a padding operation fills the padded area to form an even-symmetric pattern.

## Declaration

```swift
var BNNSPaddingModeSymmetric: BNNSPaddingMode { get }
```

<a id="Discussion"></a>

## Discussion

For example, given the following padding size and input:

```swift
let paddingSize = (2, 4)

let source: [Float] = [ 0, 1, 2, 3, 4, 5, 7, 8, 9 ]

var destination = [Float](repeating: 0,
                          count: source.count + paddingSize.0 + paddingSize.1)
```

A padding operation using [BNNSPaddingModeSymmetric](bnnspaddingmodesymmetric.md) populates destination with the following values:

```swift
[1.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 8.0, 9.0, 9.0, 8.0, 7.0, 5.0]
```

## See Also

### Padding Modes

- [init(\_:)](bnnspaddingmode/init%28__%29.md)
- [init(rawValue:)](bnnspaddingmode/init%28rawvalue_%29.md)
- [rawValue](bnnspaddingmode/rawvalue.md)
- [BNNSPaddingModeConstant](bnnspaddingmodeconstant.md): A constant that indicates that a padding operation fills the padded area with a specified constant.
- [BNNSPaddingModeReflect](bnnspaddingmodereflect.md): A constant that indicates that a padding operation fills the padded area to form an odd-symmetric pattern.

# BNNSPaddingModeSymmetric (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that indicates that a padding operation fills the padded area to form an even-symmetric pattern.

## Declaration

```objectivec
BNNSPaddingModeSymmetric
```

<a id="Discussion"></a>

## Discussion

For example, given the following padding size and input:

```swift
let paddingSize = (2, 4)

let source: [Float] = [ 0, 1, 2, 3, 4, 5, 7, 8, 9 ]

var destination = [Float](repeating: 0,
                          count: source.count + paddingSize.0 + paddingSize.1)
```

A padding operation using [BNNSPaddingModeSymmetric](bnnspaddingmodesymmetric.md) populates destination with the following values:

```swift
[1.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 8.0, 9.0, 9.0, 8.0, 7.0, 5.0]
```

## See Also

### Padding Modes

- [BNNSPaddingModeConstant](bnnspaddingmodeconstant.md): A constant that indicates that a padding operation fills the padded area with a specified constant.
- [BNNSPaddingModeReflect](bnnspaddingmodereflect.md): A constant that indicates that a padding operation fills the padded area to form an odd-symmetric pattern.
