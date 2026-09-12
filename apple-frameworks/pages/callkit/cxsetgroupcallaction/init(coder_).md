> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetgroupcallaction/init(coder:)](https://developer.apple.com/documentation/callkit/cxsetgroupcallaction/init(coder:))

# init(coder:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new action to group calls with data in an unarchiver.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: An unarchiver object.

## See Also

### Creating New Actions

- [init(call:callUUIDToGroupWith:)](init%28call_calluuidtogroupwith_%29.md): Initializes a new action for a call identified by a given UUID, as well as a call to group with identified by another UUID.

# initWithCoder: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new action to group calls with data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: An unarchiver object.

## See Also

### Creating New Actions

- [initWithCallUUID:callUUIDToGroupWith:](init%28call_calluuidtogroupwith_%29.md): Initializes a new action for a call identified by a given UUID, as well as a call to group with identified by another UUID.
