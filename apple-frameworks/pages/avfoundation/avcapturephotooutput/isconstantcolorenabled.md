> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isconstantcolorenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isconstantcolorenabled)

# isConstantColorEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the photo output configures the render pipeline to perform constant color capture.

## Declaration

```swift
var isConstantColorEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) to enable support for taking constant color photos. You can only enable constant color capture if the value of [isConstantColorSupported](isconstantcolorsupported.md) is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  Enabling constant color requires a lengthy reconfiguration of the capture pipeline. If you intend to capture constant color photos, set this property to [true](https://developer.apple.com/documentation/swift/true) before calling [startRunning()](../avcapturesession/startrunning%28%29.md), or within [beginConfiguration()](../avcapturesession/beginconfiguration%28%29.md) and [commitConfiguration()](../avcapturesession/commitconfiguration%28%29.md) calls on a running capture session.

## See Also

### Configuring constant color

- [isConstantColorSupported](isconstantcolorsupported.md): A Boolean value that indicates whether a photo output supports constant color capture.

# constantColorEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the photo output configures the render pipeline to perform constant color capture.

## Declaration

```objectivec
@property (nonatomic, getter=isConstantColorEnabled) BOOL constantColorEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) to enable support for taking constant color photos. You can only enable constant color capture if the value of [constantColorSupported](isconstantcolorsupported.md) is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  Enabling constant color requires a lengthy reconfiguration of the capture pipeline. If you intend to capture constant color photos, set this property to [true](https://developer.apple.com/documentation/swift/true) before calling [startRunning](../avcapturesession/startrunning%28%29.md), or within [beginConfiguration](../avcapturesession/beginconfiguration%28%29.md) and [commitConfiguration](../avcapturesession/commitconfiguration%28%29.md) calls on a running capture session.

## See Also

### Configuring constant color

- [constantColorSupported](isconstantcolorsupported.md): A Boolean value that indicates whether a photo output supports constant color capture.
