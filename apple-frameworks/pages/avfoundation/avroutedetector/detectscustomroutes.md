> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avroutedetector/detectscustomroutes](https://developer.apple.com/documentation/avfoundation/avroutedetector/detectscustomroutes)

# detectsCustomRoutes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

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
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates whether route detection includes custom routes.

> To detect custom routes, adopt the [AVSystemRouting](https://developer.apple.com/documentation/avsystemrouting) framework instead.

## Declaration

```objectivec
@property (nonatomic) BOOL detectsCustomRoutes;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Only set it to [true](https://developer.apple.com/documentation/swift/true) if your app uses an instance of [AVCustomRoutingController](../../avrouting/avcustomroutingcontroller.md).
