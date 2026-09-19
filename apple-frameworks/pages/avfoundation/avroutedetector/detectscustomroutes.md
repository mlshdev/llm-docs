> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avroutedetector/detectscustomroutes

# detectsCustomRoutes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether route detection includes custom routes.

> To detect custom routes, adopt the [AVSystemRouting](https://developer.apple.com/documentation/avsystemrouting) framework instead.

## Declaration

```swift
var detectsCustomRoutes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Only set it to [true](https://developer.apple.com/documentation/swift/true) if your app uses an instance of [AVCustomRoutingController](../../avrouting/avcustomroutingcontroller.md).

# detectsCustomRoutes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether route detection includes custom routes.

> To detect custom routes, adopt the [AVSystemRouting](https://developer.apple.com/documentation/avsystemrouting) framework instead.

## Declaration

```objectivec
@property (nonatomic) BOOL detectsCustomRoutes;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Only set it to [true](https://developer.apple.com/documentation/swift/true) if your app uses an instance of [AVCustomRoutingController](../../avrouting/avcustomroutingcontroller.md).
