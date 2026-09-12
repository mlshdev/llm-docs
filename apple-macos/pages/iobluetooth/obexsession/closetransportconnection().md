> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/closetransportconnection()](https://developer.apple.com/documentation/iobluetooth/obexsession/closetransportconnection())

# closeTransportConnection() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

You must override this - it will be called when the transport connection should be shutdown.

## Declaration

```swift
func closeTransportConnection() -> OBEXError
```

<a id="return-value"></a>

## Return Value

Return whether or not the transport connection was closed successfully or not. Return OBEXSuccess ( 0 ) on success, otherwise an error code.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must override this! When called you should take whatever steps are necessary to actually close down the transport connection.

# closeTransportConnection (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

You must override this - it will be called when the transport connection should be shutdown.

## Declaration

```objectivec
- (OBEXError) closeTransportConnection;
```

<a id="return-value"></a>

## Return Value

Return whether or not the transport connection was closed successfully or not. Return OBEXSuccess ( 0 ) on success, otherwise an error code.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must override this! When called you should take whatever steps are necessary to actually close down the transport connection.
