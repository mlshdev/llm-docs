> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/opentransportconnection(_:selectortarget:refcon:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/opentransportconnection(_:selectortarget:refcon:))

# openTransportConnection(\_:selectorTarget:refCon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

An OBEXSession override. When this is called by the session baseclass, we will attempt to open the transport connection. In our case, this would be an RFCOMM channel to another Bluetooth device.

## Declaration

```swift
func openTransportConnection(_ inSelector: Selector!, selectorTarget inTarget: Any!, refCon inUserRefCon: UnsafeMutableRawPointer!) -> OBEXError
```

<a id="Discussion"></a>

## Discussion

Your selector should have the following signature:

-(void)transportConnectionSelector:(id)refcon status:(OBEXError)status;

Thus you could use it with openTransportConnection like this:

OBEXError error = \[anOBEXSession openTransportConnection:@selector( transportConnectionSelector:status: ) selectorTarget:self refCon:anOBEXSession\]; // or whatever you want to pass as a refCon…

Be sure to check the status code! Assume the connection was not opened unless status is kOBEXSuccess.

# openTransportConnection:selectorTarget:refCon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

An OBEXSession override. When this is called by the session baseclass, we will attempt to open the transport connection. In our case, this would be an RFCOMM channel to another Bluetooth device.

## Declaration

```objectivec
- (OBEXError) openTransportConnection:(SEL) inSelector selectorTarget:(id) inTarget refCon:(void *) inUserRefCon;
```

<a id="Discussion"></a>

## Discussion

Your selector should have the following signature:

-(void)transportConnectionSelector:(id)refcon status:(OBEXError)status;

Thus you could use it with openTransportConnection like this:

OBEXError error = \[anOBEXSession openTransportConnection:@selector( transportConnectionSelector:status: ) selectorTarget:self refCon:anOBEXSession\]; // or whatever you want to pass as a refCon…

Be sure to check the status code! Assume the connection was not opened unless status is kOBEXSuccess.
