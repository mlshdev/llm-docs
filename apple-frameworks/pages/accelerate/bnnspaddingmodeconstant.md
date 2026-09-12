> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspaddingmodeconstant](https://developer.apple.com/documentation/accelerate/bnnspaddingmodeconstant)

# BNNSPaddingModeConstant (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that indicates that a padding operation fills the padded area with a specified constant.

## Declaration

```swift
var BNNSPaddingModeConstant: BNNSPaddingMode { get }
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

A padding operation using [BNNSPaddingModeConstant](bnnspaddingmodeconstant.md) and a padding value of `99` populates destination with the following values:

```swift
[99.0, 99.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 8.0, 9.0, 99.0, 99.0, 99.0, 99.0]
```

## See Also

### Padding Modes

- [init(\_:)](bnnspaddingmode/init%28__%29.md)
- [init(rawValue:)](bnnspaddingmode/init%28rawvalue_%29.md)
- [rawValue](bnnspaddingmode/rawvalue.md)
- [BNNSPaddingModeReflect](bnnspaddingmodereflect.md): A constant that indicates that a padding operation fills the padded area to form an odd-symmetric pattern.
- [BNNSPaddingModeSymmetric](bnnspaddingmodesymmetric.md): A constant that indicates that a padding operation fills the padded area to form an even-symmetric pattern.

# BNNSPaddingModeConstant (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that indicates that a padding operation fills the padded area with a specified constant.

## Declaration

```objectivec
BNNSPaddingModeConstant
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

A padding operation using [BNNSPaddingModeConstant](bnnspaddingmodeconstant.md) and a padding value of `99` populates destination with the following values:

```swift
[99.0, 99.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 8.0, 9.0, 99.0, 99.0, 99.0, 99.0]
```

## See Also

### Padding Modes

- [BNNSPaddingModeReflect](bnnspaddingmodereflect.md): A constant that indicates that a padding operation fills the padded area to form an odd-symmetric pattern.
- [BNNSPaddingModeSymmetric](bnnspaddingmodesymmetric.md): A constant that indicates that a padding operation fills the padded area to form an even-symmetric pattern.
