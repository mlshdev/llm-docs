> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/connect()

# connect() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Connect to the device

## Declaration

```swift
func connect()
```

<a id="Discussion"></a>

## Discussion

Connects to the device and sets up a service level connection (RFCOMM channel). Delegate methods will be called once the connection is complete or a failure occurs.

# connect (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Connect to the device

## Declaration

```objectivec
- (void) connect;
```

<a id="Discussion"></a>

## Discussion

Connects to the device and sets up a service level connection (RFCOMM channel). Delegate methods will be called once the connection is complete or a failure occurs.
