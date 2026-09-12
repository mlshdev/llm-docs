> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondatasource/copy(with:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondatasource/copy(with:device:))

# copy(with:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
optional func copy(with zone: NSZone? = nil, device: (any MTLDevice)?) -> Self
```

## See Also

### Instance Methods

- [biasTerms()](biasterms%28%29.md)
- [dataType()](datatype%28%29.md)
- [descriptor()](descriptor%28%29.md)
- [label()](label%28%29.md)
- [load()](load%28%29.md)
- [lookupTableForUInt8Kernel()](lookuptableforuint8kernel%28%29.md)
- [purge()](purge%28%29.md)
- [rangesForUInt8Kernel()](rangesforuint8kernel%28%29.md)
- [weights()](weights%28%29.md)
- [kernelWeightsDataType()](kernelweightsdatatype%28%29.md)
- [update(with:gradientState:sourceState:)](update%28with_gradientstate_sourcestate_%29.md)
- [update(with:sourceState:)](update%28with_sourcestate_%29.md)
- [weightsLayout()](weightslayout%28%29.md)
- [weightsQuantizationType()](weightsquantizationtype%28%29.md)

# copyWithZone:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) copyWithZone:(NSZone *) zone device:(id<MTLDevice>) device;
```

## See Also

### Instance Methods

- [biasTerms](biasterms%28%29.md)
- [dataType](datatype%28%29.md)
- [descriptor](descriptor%28%29.md)
- [label](label%28%29.md)
- [load](load%28%29.md)
- [lookupTableForUInt8Kernel](lookuptableforuint8kernel%28%29.md)
- [purge](purge%28%29.md)
- [rangesForUInt8Kernel](rangesforuint8kernel%28%29.md)
- [weights](weights%28%29.md)
- [kernelWeightsDataType](kernelweightsdatatype%28%29.md)
- [updateWithCommandBuffer:gradientState:sourceState:](update%28with_gradientstate_sourcestate_%29.md)
- [updateWithGradientState:sourceState:](update%28with_sourcestate_%29.md)
- [weightsLayout](weightslayout%28%29.md)
- [weightsQuantizationType](weightsquantizationtype%28%29.md)
