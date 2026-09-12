> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldatatype/rg11b10float](https://developer.apple.com/documentation/metal/mtldatatype/rg11b10float)

# MTLDataType.rg11b10Float (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

A packed 32-bit format with three floating-point color components, two of which are 11-bit values, and one is a 10-bit value.

## Declaration

```swift
case rg11b10Float
```

<a id="discussion"></a>

## Discussion

The 11-bit components for red and green each store five exponent bits and six mantissa bits. The 10-bit blue component stores five exponent bits and five mantissa bits.

> **Note**

>  None of the color components have a sign bit.

## See Also

### 32-bit color floating-point types

- [MTLDataType.rgb9e5Float](rgb9e5float.md): A packed 32-bit format with three color components, each of which is a 9-bit floating-point value.

# MTLDataTypeRG11B10Float (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

A packed 32-bit format with three floating-point color components, two of which are 11-bit values, and one is a 10-bit value.

## Declaration

```objectivec
MTLDataTypeRG11B10Float
```

<a id="discussion"></a>

## Discussion

The 11-bit components for red and green each store five exponent bits and six mantissa bits. The 10-bit blue component stores five exponent bits and five mantissa bits.

> **Note**

>  None of the color components have a sign bit.

## See Also

### 32-bit color floating-point types

- [MTLDataTypeRGB9E5Float](rgb9e5float.md): A packed 32-bit format with three color components, each of which is a 9-bit floating-point value.
