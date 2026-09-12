> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/alertingcontext/sound-swift.property](https://developer.apple.com/documentation/accessorynotifications/alertingcontext/sound-swift.property)

# sound

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

An optional sound configuration for the notification.

## Declaration

```swift
var sound: AlertingContext.Sound? { get }
```

<a id="discussion"></a>

## Discussion

A value of `nil` indicates the notification has no sound. Use the [AlertingContext.Sound](sound-swift.struct.md) properties to determine sound characteristics.

## See Also

### Configuring notification sound

- [AlertingContext.Sound](sound-swift.struct.md): A structure that describes sound characteristics for a notification.
