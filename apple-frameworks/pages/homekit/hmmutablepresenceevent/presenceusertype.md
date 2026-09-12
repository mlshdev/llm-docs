> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmutablepresenceevent/presenceusertype](https://developer.apple.com/documentation/homekit/hmmutablepresenceevent/presenceusertype)

# presenceUserType (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The user type whose presence triggers the event.

## Declaration

```swift
var presenceUserType: HMPresenceEventUserType { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to change the user presence type that triggers this event.

## See Also

### Configuring a presence event

- [presenceEventType](presenceeventtype.md): The event type that triggers the presence event.

# presenceUserType (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The user type whose presence triggers the event.

## Declaration

```objectivec
@property (nonatomic, readwrite) HMPresenceEventUserType presenceUserType;
```

<a id="Discussion"></a>

## Discussion

Use this property to change the user presence type that triggers this event.

## See Also

### Configuring a presence event

- [presenceEventType](presenceeventtype.md): The event type that triggers the presence event.
