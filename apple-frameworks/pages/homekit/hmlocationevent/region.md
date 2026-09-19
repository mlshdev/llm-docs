> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmlocationevent/region

# region (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · watchOS 2.0+

The region on which events are triggered.

## Declaration

```swift
var region: CLRegion? { get }
```

<a id="Discussion"></a>

## Discussion

The event is triggered based on the values of the [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) and [notifyOnExit](../../corelocation/clregion/notifyonexit.md) properties.

This property is `nil` when an application is not authorized for location services.

# region (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · watchOS 2.0+

The region on which events are triggered.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CLRegion * region;
```

<a id="Discussion"></a>

## Discussion

The event is triggered based on the values of the [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) and [notifyOnExit](../../corelocation/clregion/notifyonexit.md) properties.

This property is `nil` when an application is not authorized for location services.
