> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmutablepresenceevent/presenceeventtype](https://developer.apple.com/documentation/homekit/hmmutablepresenceevent/presenceeventtype)

# presenceEventType (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The event type that triggers the presence event.

## Declaration

```swift
var presenceEventType: HMPresenceEventType { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to change the presence type that triggers this event.

## See Also

### Configuring a presence event

- [presenceUserType](presenceusertype.md): The user type whose presence triggers the event.

# presenceEventType (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The event type that triggers the presence event.

## Declaration

```objectivec
@property (nonatomic, readwrite) HMPresenceEventType presenceEventType;
```

<a id="Discussion"></a>

## Discussion

Use this property to change the presence type that triggers this event.

## See Also

### Configuring a presence event

- [presenceUserType](presenceusertype.md): The user type whose presence triggers the event.
