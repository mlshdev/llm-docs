> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpipelinedescriptor/fragmentstaticlinkingdescriptor](https://developer.apple.com/documentation/metal/mtl4renderpipelinedescriptor/fragmentstaticlinkingdescriptor)

# fragmentStaticLinkingDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides static linking information for the fragment stage of the render pipeline.

## Declaration

```swift
@NSCopying var fragmentStaticLinkingDescriptor: MTL4StaticLinkingDescriptor! { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to link extra shader functions to the fragment stage of the render pipeline.

# fragmentStaticLinkingDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides static linking information for the fragment stage of the render pipeline.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) MTL4StaticLinkingDescriptor * fragmentStaticLinkingDescriptor;
```

<a id="discussion"></a>

## Discussion

Use this property to link extra shader functions to the fragment stage of the render pipeline.
