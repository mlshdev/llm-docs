> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemapdescriptor/screensize](https://developer.apple.com/documentation/metal/mtlrasterizationratemapdescriptor/screensize)

# screenSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The size of the viewport coordinate system, in logical pixels.

## Declaration

```swift
var screenSize: MTLSize { get set }
```

## Mentioned In

- [Creating a rasterization rate map](../creating-a-rasterization-rate-map.md)

<a id="discussion"></a>

## Discussion

Metal ignores the depth component of this property.

The viewport coordinate system’s origin is always at `(0,0)` and this property determines its size.

# screenSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The size of the viewport coordinate system, in logical pixels.

## Declaration

```objectivec
@property (nonatomic) MTLSize screenSize;
```

## Mentioned In

- [Creating a rasterization rate map](../creating-a-rasterization-rate-map.md)

<a id="discussion"></a>

## Discussion

Metal ignores the depth component of this property.

The viewport coordinate system’s origin is always at `(0,0)` and this property determines its size.
