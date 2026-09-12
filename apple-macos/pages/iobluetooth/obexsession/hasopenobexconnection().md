> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/hasopenobexconnection()](https://developer.apple.com/documentation/iobluetooth/obexsession/hasopenobexconnection())

# hasOpenOBEXConnection() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Has a successful connect packet been sent and received? This API tells you so.

## Declaration

```swift
func hasOpenOBEXConnection() -> Bool
```

<a id="return-value"></a>

## Return Value

True or false, we are OBEX-connected to another OBEX entity.

<a id="Discussion"></a>

## Discussion

A “transport” connection may exist (such as a Bluetooth baseband connection), but the OBEX connection may not be established over that transport. If it has been, this function returns true.

# hasOpenOBEXConnection (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Has a successful connect packet been sent and received? This API tells you so.

## Declaration

```objectivec
- (BOOL) hasOpenOBEXConnection;
```

<a id="return-value"></a>

## Return Value

True or false, we are OBEX-connected to another OBEX entity.

<a id="Discussion"></a>

## Discussion

A “transport” connection may exist (such as a Bluetooth baseband connection), but the OBEX connection may not be established over that transport. If it has been, this function returns true.
