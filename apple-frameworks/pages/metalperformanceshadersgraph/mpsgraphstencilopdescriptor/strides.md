> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/strides](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/strides)

# strides (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The property that defines strides for spatial dimensions.

## Declaration

```swift
var strides: [NSNumber] { get set }
```

<a id="discussion"></a>

## Discussion

Must be four numbers, one for each spatial dimension, fastest running index last. Default value: `@[ @1, @1, @1, @1 ]`

# strides (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The property that defines strides for spatial dimensions.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) MPSShape * strides;
```

<a id="discussion"></a>

## Discussion

Must be four numbers, one for each spatial dimension, fastest running index last. Default value: `@[ @1, @1, @1, @1 ]`
