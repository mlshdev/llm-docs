> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4meshrenderpipelinedescriptor/objectstaticlinkingdescriptor](https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/objectstaticlinkingdescriptor)

# objectStaticLinkingDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides static linking information for the object stage of the render pipeline.

## Declaration

```swift
@NSCopying var objectStaticLinkingDescriptor: MTL4StaticLinkingDescriptor! { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to link extra shader functions to the object stage of the render pipeline.

# objectStaticLinkingDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides static linking information for the object stage of the render pipeline.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) MTL4StaticLinkingDescriptor * objectStaticLinkingDescriptor;
```

<a id="discussion"></a>

## Discussion

Use this property to link extra shader functions to the object stage of the render pipeline.
