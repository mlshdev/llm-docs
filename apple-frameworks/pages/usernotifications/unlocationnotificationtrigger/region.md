> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unlocationnotificationtrigger/region](https://developer.apple.com/documentation/usernotifications/unlocationnotificationtrigger/region)

# region (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · watchOS 3.0+

The region used to determine when the system sends the notification.

## Declaration

```swift
@NSCopying var region: CLRegion { get }
```

<a id="Discussion"></a>

## Discussion

Use the [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) and [notifyOnExit](../../corelocation/clregion/notifyonexit.md) properties of this region to specify whether the system sends notifications when the user enters or exits the specified geographic area.

# region (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · watchOS 3.0+

The region used to determine when the system sends the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CLRegion * region;
```

```objectivec
@property (atomic, copy, readonly) CLRegion * region;
```

<a id="Discussion"></a>

## Discussion

Use the [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) and [notifyOnExit](../../corelocation/clregion/notifyonexit.md) properties of this region to specify whether the system sends notifications when the user enters or exits the specified geographic area.
