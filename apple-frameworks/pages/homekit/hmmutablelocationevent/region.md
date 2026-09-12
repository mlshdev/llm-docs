> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmutablelocationevent/region](https://developer.apple.com/documentation/homekit/hmmutablelocationevent/region)

# region (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · watchOS 4.0+

The region on which events are triggered.

## Declaration

```swift
var region: CLRegion? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to set the region on which the location event is triggered. The region object must have at least one of [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) or [notifyOnExit](../../corelocation/clregion/notifyonexit.md) set to [true](https://developer.apple.com/documentation/swift/true).

This property is `nil` when an application is not authorized for location services.

# region (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · watchOS 4.0+

The region on which events are triggered.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) CLRegion * region;
```

<a id="Discussion"></a>

## Discussion

Use this property to set the region on which the location event is triggered. The region object must have at least one of [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) or [notifyOnExit](../../corelocation/clregion/notifyonexit.md) set to [true](https://developer.apple.com/documentation/swift/true).

This property is `nil` when an application is not authorized for location services.
