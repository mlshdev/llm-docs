> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/kernelsizes](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/kernelsizes)

# kernelSizes (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Defines the pooling window size.

## Declaration

```swift
var kernelSizes: [NSNumber] { get set }
```

<a id="discussion"></a>

## Discussion

Must be four numbers, one for each spatial dimension, fastest running index last.

# kernelSizes (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Defines the pooling window size.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSNumber *> * kernelSizes;
```

<a id="discussion"></a>

## Discussion

Must be four numbers, one for each spatial dimension, fastest running index last.
