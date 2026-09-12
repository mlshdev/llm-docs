> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/renderquality-swift.struct](https://developer.apple.com/documentation/compositorservices/layerrenderer/renderquality-swift.struct)

# LayerRenderer.RenderQuality (Swift)

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

Render quality controls the quality which drawing happens at.

## Declaration

```swift
struct RenderQuality
```

<a id="overview"></a>

## Overview

This can be used to increase the quality of what users see, however this directly impacts the memory allocated for resources which is billed to the app as well as per-frame GPU time. The app should monitor its frame rate to ensure its not regularly missing frames and will likely need to change the quality based on scene complexity that is being shown.

To control the memory allocated for resources

To control the per-frame GPU cost

## Topics

### Initializers

- [init(\_:)](renderquality-swift.struct/init%28__%29.md)
- [init(rawValue:)](renderquality-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# cp_render_quality_t (Objective-C)

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 26.0+

Render quality controls the quality which drawing happens at.

## Declaration

```objectivec
typedef float cp_render_quality_t;
```

<a id="overview"></a>

## Overview

This can be used to increase the quality of what users see, however this directly impacts the memory allocated for resources which is billed to the app as well as per-frame GPU time. The app should monitor its frame rate to ensure its not regularly missing frames and will likely need to change the quality based on scene complexity that is being shown.

To control the memory allocated for resources

To control the per-frame GPU cost
