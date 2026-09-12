> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/isopaque](https://developer.apple.com/documentation/scenekit/scnprogram/isopaque)

# isOpaque (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that indicates whether fragments rendered by the program are fully opaque.

## Declaration

```swift
var isOpaque: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), indicating that all fragments rendered by the program are fully opaque. In this case, SceneKit can composite these fragments into the final image without blending, improving rendering performance.

If your shader program renders fragment colors whose alpha value is less than `1.0`, change this property’s value to [false](https://developer.apple.com/documentation/swift/false) for proper blending.

# opaque (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS

A Boolean value that indicates whether fragments rendered by the program are fully opaque.

## Declaration

```objectivec
@property (nonatomic, getter=isOpaque) BOOL opaque;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), indicating that all fragments rendered by the program are fully opaque. In this case, SceneKit can composite these fragments into the final image without blending, improving rendering performance.

If your shader program renders fragment colors whose alpha value is less than `1.0`, change this property’s value to [false](https://developer.apple.com/documentation/swift/false) for proper blending.
