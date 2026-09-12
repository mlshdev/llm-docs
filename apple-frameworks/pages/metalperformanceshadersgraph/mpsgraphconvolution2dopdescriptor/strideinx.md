> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/strideinx](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/strideinx)

# strideInX (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The scale that maps `x`-coordinate of the destination to `x`-coordinate of the source.

## Declaration

```swift
var strideInX: Int { get set }
```

<a id="discussion"></a>

## Discussion

Source `x`-coordinate, `sx` is computed from destination `x`-coordinate, `dx` as `sx = strideInX*dx`. Default value is 1.

# strideInX (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The scale that maps `x`-coordinate of the destination to `x`-coordinate of the source.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger strideInX;
```

<a id="discussion"></a>

## Discussion

Source `x`-coordinate, `sx` is computed from destination `x`-coordinate, `dx` as `sx = strideInX*dx`. Default value is 1.
