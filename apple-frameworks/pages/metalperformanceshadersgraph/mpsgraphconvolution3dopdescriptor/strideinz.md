> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/strideinz](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/strideinz)

# strideInZ (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The scale that maps`z`-coordinate of destination to `z`-coordinate of source.

## Declaration

```swift
var strideInZ: Int { get set }
```

<a id="discussion"></a>

## Discussion

Source `z`-coordinate, `sz` is computed from destination `z`-coordinate, `dz` as `sz = strideInZ*dz`. Default value is 1.

# strideInZ (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The scale that maps`z`-coordinate of destination to `z`-coordinate of source.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger strideInZ;
```

<a id="discussion"></a>

## Discussion

Source `z`-coordinate, `sz` is computed from destination `z`-coordinate, `dz` as `sz = strideInZ*dz`. Default value is 1.
