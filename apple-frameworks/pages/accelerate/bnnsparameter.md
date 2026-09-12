> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsparameter](https://developer.apple.com/documentation/accelerate/bnnsparameter)

# BNNSParameter (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A parameter that’s trainable, such as weights or bias.

## Declaration

```swift
var BNNSParameter: BNNSDescriptorType { get }
```

## See Also

### Descriptor Types

- [init(\_:)](bnnsdescriptortype/init%28__%29.md)
- [init(rawValue:)](bnnsdescriptortype/init%28rawvalue_%29.md)
- [rawValue](bnnsdescriptortype/rawvalue.md)
- [BNNSConstant](bnnsconstant.md): A constant that doesn’t have a gradient.
- [BNNSSample](bnnssample.md): A sample such as input or output.

# BNNSParameter (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A parameter that’s trainable, such as weights or bias.

## Declaration

```objectivec
BNNSParameter
```

## See Also

### Descriptor Types

- [BNNSConstant](bnnsconstant.md): A constant that doesn’t have a gradient.
- [BNNSSample](bnnssample.md): A sample such as input or output.
