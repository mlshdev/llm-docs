> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4meshrenderpipelinedescriptor/payloadmemorylength](https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/payloadmemorylength)

# payloadMemoryLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Reserves storage for the object-to-mesh stage payload.

## Declaration

```swift
var payloadMemoryLength: Int { get set }
```

<a id="discussion"></a>

## Discussion

This property determines the size, in bytes, of the buffer you indicate via the Metal Shading Language `[[payload]]` attribute in the object and mesh shader functions of the mesh render pipeline.

If this value is `0`, Metal derives the size from the (dereferenced) type you declare for the payload in the object shader function. If the type is a pointer, Metal reserves space for a single element.

The default value is `0`.

# payloadMemoryLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Reserves storage for the object-to-mesh stage payload.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger payloadMemoryLength;
```

<a id="discussion"></a>

## Discussion

This property determines the size, in bytes, of the buffer you indicate via the Metal Shading Language `[[payload]]` attribute in the object and mesh shader functions of the mesh render pipeline.

If this value is `0`, Metal derives the size from the (dereferenced) type you declare for the payload in the object shader function. If the type is a pointer, Metal reserves space for a single element.

The default value is `0`.
