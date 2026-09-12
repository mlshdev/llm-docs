> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4meshrenderpipelinedescriptor/meshstaticlinkingdescriptor](https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/meshstaticlinkingdescriptor)

# meshStaticLinkingDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides static linking information for the mesh stage of the render pipeline.

## Declaration

```swift
@NSCopying var meshStaticLinkingDescriptor: MTL4StaticLinkingDescriptor! { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to link extra shader functions to the mesh stage of the render pipeline.

# meshStaticLinkingDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides static linking information for the mesh stage of the render pipeline.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) MTL4StaticLinkingDescriptor * meshStaticLinkingDescriptor;
```

<a id="discussion"></a>

## Discussion

Use this property to link extra shader functions to the mesh stage of the render pipeline.
