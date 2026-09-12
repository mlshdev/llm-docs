> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetheldcallaction/init(coder:)](https://developer.apple.com/documentation/callkit/cxsetheldcallaction/init(coder:))

# init(coder:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new action to place a call on hold with data in an unarchiver.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: An unarchiver object.

## See Also

### Creating New Actions

- [init(call:onHold:)](init%28call_onhold_%29.md): Initializes a new action for a call identified by a given UUID, as well as whether the call is on hold.

# initWithCoder: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new action to place a call on hold with data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: An unarchiver object.

## See Also

### Creating New Actions

- [initWithCallUUID:onHold:](init%28call_onhold_%29.md): Initializes a new action for a call identified by a given UUID, as well as whether the call is on hold.
