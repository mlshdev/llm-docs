> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmpresenceevent/presenceusertype

# presenceUserType (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The user type whose presence triggers the event.

## Declaration

```swift
var presenceUserType: HMPresenceEventUserType { get }
```

## See Also

### Inspecting a presence event

- [presenceEventType](presenceeventtype.md): The event type that triggers the presence event.

# presenceUserType (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The user type whose presence triggers the event.

## Declaration

```objectivec
@property (nonatomic, readonly) HMPresenceEventUserType presenceUserType;
```

## See Also

### Inspecting a presence event

- [presenceEventType](presenceeventtype.md): The event type that triggers the presence event.
