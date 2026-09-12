> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectionevent/resolution](https://developer.apple.com/documentation/coremotion/cmfalldetectionevent/resolution)

# resolution (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** watchOS 7.2+

The event’s resolution.

## Declaration

```swift
var resolution: CMFallDetectionEvent.UserResolution { get }
```

<a id="Discussion"></a>

## Discussion

The resolution of an event reflects the user’s action in response to the fall detection notification. For example, the user might tap a button to respond inside the notification, or press the digital crown to dismiss the notification.

## See Also

### Accessing Fall Data

- [CMFallDetectionEvent.UserResolution](userresolution.md): User resolutions for fall detection events.

# resolution (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** watchOS 7.2+

The event’s resolution.

## Declaration

```objectivec
@property (nonatomic, readonly) CMFallDetectionEventUserResolution resolution;
```

<a id="Discussion"></a>

## Discussion

The resolution of an event reflects the user’s action in response to the fall detection notification. For example, the user might tap a button to respond inside the notification, or press the digital crown to dismiss the notification.

## See Also

### Accessing Fall Data

- [CMFallDetectionEventUserResolution](userresolution.md): User resolutions for fall detection events.
