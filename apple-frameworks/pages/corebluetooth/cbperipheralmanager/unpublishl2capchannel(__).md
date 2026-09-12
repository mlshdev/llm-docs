> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/unpublishl2capchannel(_:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/unpublishl2capchannel(_:))

# unpublishL2CAPChannel(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Removes a published service from the local system.

## Declaration

```swift
func unpublishL2CAPChannel(_ PSM: CBL2CAPPSM)
```

## Parameters

- `PSM`: The Protocol and Service Multiplexer (PSM) to remove from the system.

<a id="Discussion"></a>

## Discussion

After you make this call, the peripheral manager accepts no new connections for this PSM, and closes any existing L2CAP channels using this PSM.

## See Also

### Using L2CAP Channels

- [publishL2CAPChannel(withEncryption:)](publishl2capchannel%28withencryption_%29.md): Creates a listener for incoming L2CAP channel connections.

# unpublishL2CAPChannel: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Removes a published service from the local system.

## Declaration

```objectivec
- (void) unpublishL2CAPChannel:(CBL2CAPPSM) PSM;
```

## Parameters

- `PSM`: The Protocol and Service Multiplexer (PSM) to remove from the system.

<a id="Discussion"></a>

## Discussion

After you make this call, the peripheral manager accepts no new connections for this PSM, and closes any existing L2CAP channels using this PSM.

## See Also

### Using L2CAP Channels

- [publishL2CAPChannelWithEncryption:](publishl2capchannel%28withencryption_%29.md): Creates a listener for incoming L2CAP channel connections.
