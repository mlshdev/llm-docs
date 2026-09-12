> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/dilationrateiny](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/dilationrateiny)

# dilationRateInY (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The amount by which weights tensor expands in the `y`-direction.

## Declaration

```swift
var dilationRateInY: Int { get set }
```

<a id="discussion"></a>

## Discussion

The weights tensor is dilated by inserting `dilationRateInY-1` zeros between consecutive values in `y`-dimension. Dilated weights tensor width is `(dilationRateInY-1)*kernelHeight+1`. Default value is 1.

# dilationRateInY (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The amount by which weights tensor expands in the `y`-direction.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger dilationRateInY;
```

<a id="discussion"></a>

## Discussion

The weights tensor is dilated by inserting `dilationRateInY-1` zeros between consecutive values in `y`-dimension. Dilated weights tensor width is `(dilationRateInY-1)*kernelHeight+1`. Default value is 1.
