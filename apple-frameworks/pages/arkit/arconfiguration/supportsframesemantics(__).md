> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/supportsframesemantics(_:)](https://developer.apple.com/documentation/arkit/arconfiguration/supportsframesemantics(_:))

# supportsFrameSemantics(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Checks whether a particular feature is supported.

## Declaration

```swift
class func supportsFrameSemantics(_ frameSemantics: ARConfiguration.FrameSemantics) -> Bool
```

## Parameters

- `frameSemantics`: The frame semantics for which to check device support.

<a id="return-value"></a>

## Return Value

A boolean value that indicates whether the device supports the argument frame semantics.

<a id="Discussion"></a>

## Discussion

Call this function before attempting to enable a frame semantic on your app’s configuration. For example, if you call `supportsFrameSemantic(.sceneDepth)` on [ARWorldTrackingConfiguration](../arworldtrackingconfiguration.md), the function returns [true](https://developer.apple.com/documentation/swift/true) on devices that support the LiDAR scanner’s depth buffer.

> **Warning**

>  Do not call this function on the superclass, [ARConfiguration](../arconfiguration.md). Only configuration subclasses support frame semantics, such as those listed in `Choose your session's configuration`.

## See Also

### Enabling frame features

- [frameSemantics](framesemantics-swift.property.md): The set of active semantics on the frame.
- [ARConfiguration.FrameSemantics](framesemantics-swift.struct.md): Types of optional frame features you can enable in your app.

# supportsFrameSemantics: (Objective-C)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Checks whether a particular feature is supported.

## Declaration

```objectivec
+ (BOOL) supportsFrameSemantics:(ARFrameSemantics) frameSemantics;
```

## Parameters

- `frameSemantics`: The frame semantics for which to check device support.

<a id="return-value"></a>

## Return Value

A boolean value that indicates whether the device supports the argument frame semantics.

<a id="Discussion"></a>

## Discussion

Call this function before attempting to enable a frame semantic on your app’s configuration. For example, if you call `supportsFrameSemantic(.sceneDepth)` on [ARWorldTrackingConfiguration](../arworldtrackingconfiguration.md), the function returns [true](https://developer.apple.com/documentation/swift/true) on devices that support the LiDAR scanner’s depth buffer.

> **Warning**

>  Do not call this function on the superclass, [ARConfiguration](../arconfiguration.md). Only configuration subclasses support frame semantics, such as those listed in `Choose your session's configuration`.

## See Also

### Enabling frame features

- [frameSemantics](framesemantics-swift.property.md): The set of active semantics on the frame.
- [ARFrameSemantics](framesemantics-swift.struct.md): Types of optional frame features you can enable in your app.
