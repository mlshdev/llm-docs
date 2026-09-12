> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/opentransportconnection(_:selectortarget:refcon:)](https://developer.apple.com/documentation/iobluetooth/obexsession/opentransportconnection(_:selectortarget:refcon:))

# openTransportConnection(\_:selectorTarget:refCon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Opens a transport connection to a device. A Bluetooth connection is one example of a transport.

## Declaration

```swift
func openTransportConnection(_ inSelector: Selector!, selectorTarget inTarget: Any!, refCon inUserRefCon: UnsafeMutableRawPointer!) -> OBEXError
```

## Parameters

- `inSelector`: Selector to call for success, failure or timeout.
- `inTarget`: Target on which to call the selector.
- `inUserRefCon`: Caller’s reference constant.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must override this! when called you should attempt to open your transport connection, and if you are successful, return kOBEXSuccess, otherwise an interesting error code.

# openTransportConnection:selectorTarget:refCon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Opens a transport connection to a device. A Bluetooth connection is one example of a transport.

## Declaration

```objectivec
- (OBEXError) openTransportConnection:(SEL) inSelector selectorTarget:(id) inTarget refCon:(void *) inUserRefCon;
```

## Parameters

- `inSelector`: Selector to call for success, failure or timeout.
- `inTarget`: Target on which to call the selector.
- `inUserRefCon`: Caller’s reference constant.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must override this! when called you should attempt to open your transport connection, and if you are successful, return kOBEXSuccess, otherwise an interesting error code.
