> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getlastservicesupdate()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getlastservicesupdate())

# getLastServicesUpdate() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the date/time of the last SDP query.

## Declaration

```swift
func getLastServicesUpdate() -> Date!
```

<a id="return-value"></a>

## Return Value

Returns the date/time of the last SDP query. If an SDP query has never been performed on the device, nil is returned.

# getLastServicesUpdate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the date/time of the last SDP query.

## Declaration

```objectivec
- (NSDate *) getLastServicesUpdate;
```

<a id="return-value"></a>

## Return Value

Returns the date/time of the last SDP query. If an SDP query has never been performed on the device, nil is returned.
