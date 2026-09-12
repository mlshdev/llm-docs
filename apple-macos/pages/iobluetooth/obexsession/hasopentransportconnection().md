> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/hasopentransportconnection()](https://developer.apple.com/documentation/iobluetooth/obexsession/hasopentransportconnection())

# hasOpenTransportConnection() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

You must override this - it will be called periodically to determine if a transport connection is open or not.

## Declaration

```swift
func hasOpenTransportConnection() -> Bool
```

<a id="return-value"></a>

## Return Value

Return whether or not the transport connection is still open.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must override this! When called you simply return if the transport connection is still open or not.

# hasOpenTransportConnection (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

You must override this - it will be called periodically to determine if a transport connection is open or not.

## Declaration

```objectivec
- (Boolean) hasOpenTransportConnection;
```

<a id="return-value"></a>

## Return Value

Return whether or not the transport connection is still open.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must override this! When called you simply return if the transport connection is still open or not.
