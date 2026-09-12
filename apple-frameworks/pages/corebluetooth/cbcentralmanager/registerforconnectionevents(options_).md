> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/registerforconnectionevents(options:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/registerforconnectionevents(options:))

# registerForConnectionEvents(options:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Register for an event notification when the central manager makes a connection matching the given options.

## Declaration

```swift
func registerForConnectionEvents(options: [CBConnectionEventMatchingOption : Any]? = nil)
```

## Parameters

- `options`: A dictionary that specifies options for connection events. See [Peripheral Connection Options](../peripheral-connection-options.md) for a list of possible options.

<a id="Discussion"></a>

## Discussion

When the central manager makes a connection that matches the options, it calls the delegate’s [centralManager(\_:connectionEventDidOccur:for:)](../cbcentralmanagerdelegate/centralmanager%28__connectioneventdidoccur_for_%29.md) method.

## See Also

### Receiving Connection Events

- [Peripheral Connection Options](../peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [CBConnectionEvent](../cbconnectionevent.md): A change to the connection state of a peer.
- [CBConnectionEventMatchingOption](../cbconnectioneventmatchingoption.md): A set of options to use when registering for connection events.

# registerForConnectionEventsWithOptions: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Register for an event notification when the central manager makes a connection matching the given options.

## Declaration

```objectivec
- (void) registerForConnectionEventsWithOptions:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `options`: A dictionary that specifies options for connection events. See [Peripheral Connection Options](../peripheral-connection-options.md) for a list of possible options.

<a id="Discussion"></a>

## Discussion

When the central manager makes a connection that matches the options, it calls the delegate’s [centralManager:connectionEventDidOccur:forPeripheral:](../cbcentralmanagerdelegate/centralmanager%28__connectioneventdidoccur_for_%29.md) method.

## See Also

### Receiving Connection Events

- [Peripheral Connection Options](../peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [CBConnectionEvent](../cbconnectionevent.md): A change to the connection state of a peer.
- [CBConnectionEventMatchingOption](../cbconnectioneventmatchingoption.md): A set of options to use when registering for connection events.
