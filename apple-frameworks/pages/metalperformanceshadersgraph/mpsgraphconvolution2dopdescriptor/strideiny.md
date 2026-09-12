> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/strideiny](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/strideiny)

# strideInY (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The scale that maps `y`-coordinate of the destination to `y`-coordinate of the source.

## Declaration

```swift
var strideInY: Int { get set }
```

<a id="discussion"></a>

## Discussion

Source `y`-coordinate, `sy` is computed from destination `y`-coordinate, `dy` as `sy = strideInY*dy`. Default value is 1.

# strideInY (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The scale that maps `y`-coordinate of the destination to `y`-coordinate of the source.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger strideInY;
```

<a id="discussion"></a>

## Discussion

Source `y`-coordinate, `sy` is computed from destination `y`-coordinate, `dy` as `sy = strideInY*dy`. Default value is 1.
