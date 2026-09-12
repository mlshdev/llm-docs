> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/dilationrateinz](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/dilationrateinz)

# dilationRateInZ (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The amount by which weights tensor expands in the `z`-direction.

## Declaration

```swift
var dilationRateInZ: Int { get set }
```

<a id="discussion"></a>

## Discussion

The weights tensor is dilated by inserting `dilationRateInZ-1` zeros between consecutive values in `z`-dimension. Dilated weights tensor depth is `(dilationRateInZ-1)*kernelDepth+1`. Default value is 1.

# dilationRateInZ (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The amount by which weights tensor expands in the `z`-direction.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger dilationRateInZ;
```

<a id="discussion"></a>

## Discussion

The weights tensor is dilated by inserting `dilationRateInZ-1` zeros between consecutive values in `z`-dimension. Dilated weights tensor depth is `(dilationRateInZ-1)*kernelDepth+1`. Default value is 1.
