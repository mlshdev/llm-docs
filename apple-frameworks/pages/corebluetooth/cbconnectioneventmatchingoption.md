> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbconnectioneventmatchingoption](https://developer.apple.com/documentation/corebluetooth/cbconnectioneventmatchingoption)

# CBConnectionEventMatchingOption (Swift)

**Framework:** Core Bluetooth  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A set of options to use when registering for connection events.

## Declaration

```swift
struct CBConnectionEventMatchingOption
```

## Topics

### Creating a Matching Option Instance

- [init(rawValue:)](cbconnectioneventmatchingoption/init%28rawvalue_%29.md): Creates a matching option from the provided raw value.

### Matching Options

- [peripheralUUIDs](cbconnectioneventmatchingoption/peripheraluuids.md): An array of UUID objects that represents peripherals to match.
- [serviceUUIDs](cbconnectioneventmatchingoption/serviceuuids.md): An array that represents service identifiers to match.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving Connection Events

- [registerForConnectionEvents(options:)](cbcentralmanager/registerforconnectionevents%28options_%29.md): Register for an event notification when the central manager makes a connection matching the given options.
- [Peripheral Connection Options](peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [CBConnectionEvent](cbconnectionevent.md): A change to the connection state of a peer.

# CBConnectionEventMatchingOption (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A set of options to use when registering for connection events.

## Declaration

```objectivec
typedef NSString * CBConnectionEventMatchingOption;
```

## Topics

### Matching Options

- [CBConnectionEventMatchingOptionPeripheralUUIDs](cbconnectioneventmatchingoption/peripheraluuids.md): An array of UUID objects that represents peripherals to match.
- [CBConnectionEventMatchingOptionServiceUUIDs](cbconnectioneventmatchingoption/serviceuuids.md): An array that represents service identifiers to match.

## See Also

### Receiving Connection Events

- [registerForConnectionEventsWithOptions:](cbcentralmanager/registerforconnectionevents%28options_%29.md): Register for an event notification when the central manager makes a connection matching the given options.
- [Peripheral Connection Options](peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [CBConnectionEvent](cbconnectionevent.md): A change to the connection state of a peer.
