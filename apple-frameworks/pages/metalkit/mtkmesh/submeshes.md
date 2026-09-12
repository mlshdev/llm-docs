> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmesh/submeshes](https://developer.apple.com/documentation/metalkit/mtkmesh/submeshes)

# submeshes (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array of submeshes containing index buffers referencing the mesh vertices.

## Declaration

```swift
var submeshes: [MTKSubmesh] { get }
```

<a id="Discussion"></a>

## Discussion

Submeshes may also contain texture materials to apply when rendering the mesh object.

# submeshes (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array of submeshes containing index buffers referencing the mesh vertices.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) NSArray<MTKSubmesh *> * submeshes;
```

<a id="Discussion"></a>

## Discussion

Submeshes may also contain texture materials to apply when rendering the mesh object.
