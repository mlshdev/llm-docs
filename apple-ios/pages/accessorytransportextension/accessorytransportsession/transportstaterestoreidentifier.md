> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/transportstaterestoreidentifier

# transportStateRestoreIdentifier

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

An optional identifier for restoring transport state across sessions.

## Declaration

```swift
var transportStateRestoreIdentifier: String?
```

<a id="discussion"></a>

## Discussion

Use this identifier to restore an interrupted Bluetooth session in your transport extension. Restoring the prior session allows your extension to skip accessory scanning and notification-forwarding subscription after the system relaunches or resumes your extension from the background. When reinitializing your extension’s [CBCentralManager](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager), pass the value of this property as the `CBCentralManagerOptionRestoreIdentifierKey` options key to the [init(delegate:queue:options:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/init%28delegate:queue:options:%29) initializer:

```swift
// Build the options dictionary.
var options: [String: Any] = [:]
if let restoreID = transportSession.transportStateRestoreIdentifier {
    options[CBCentralManagerOptionRestoreIdentifierKey] = restoreID
}

// Instantiate the `CBCentralManager`.
let centralManager = CBCentralManager(
    delegate: self,
    queue: .main,        // Or, use a dedicated dispatch queue.
    options: options
)
```

Create only one `CBCentralManager` with this identifier in your extension. Your extension also needs to implement the [centralManager(\_:willRestoreState:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager%28_:willrestorestate:%29) delegate method to reconstitute the restored state when the system launches your extension from a cold state. The system doesn’t call this method when your extension resumes from a warm suspended state, since the objects remain in memory.

## See Also

### Determining the communication method

- [transport](transport.md): A transport method that the session uses to communicate with the accessory.
- [pushToken](pushtoken.md): A token that identifies the iOS device to the Apple Push Notification service for routing accessory responses over the internet.
