> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmpresenceevent/init(presenceeventtype:presenceusertype:)](https://developer.apple.com/documentation/homekit/hmpresenceevent/init(presenceeventtype:presenceusertype:))

# init(presenceEventType:presenceUserType:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new presence event with the specified event and user presence types.

## Declaration

```swift
init(presenceEventType: HMPresenceEventType, presenceUserType: HMPresenceEventUserType)
```

## Parameters

- `presenceEventType`: The event type that determines when the event fires.
- `presenceUserType`: The user type whose presence triggers the event.

<a id="return-value"></a>

## Return Value

An initialized presence event.

# initWithPresenceEventType:presenceUserType: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new presence event with the specified event and user presence types.

## Declaration

```objectivec
- (instancetype) initWithPresenceEventType:(HMPresenceEventType) presenceEventType presenceUserType:(HMPresenceEventUserType) presenceUserType;
```

## Parameters

- `presenceEventType`: The event type that determines when the event fires.
- `presenceUserType`: The user type whose presence triggers the event.

<a id="return-value"></a>

## Return Value

An initialized presence event.
