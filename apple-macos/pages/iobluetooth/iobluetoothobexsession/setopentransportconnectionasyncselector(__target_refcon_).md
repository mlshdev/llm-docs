> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/setopentransportconnectionasyncselector(_:target:refcon:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/setopentransportconnectionasyncselector(_:target:refcon:))

# setOpenTransportConnectionAsyncSelector(\_:target:refCon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows you to set the selector to be used when a transport connection is opened, or fails to open.

## Declaration

```swift
func setOpenTransportConnectionAsyncSelector(_ inSelector: Selector!, target inSelectorTarget: Any!, refCon inUserRefCon: UnsafeMutableRawPointer!)
```

## Parameters

- `inSelector`: Selector to call on the target.
- `inSelectorTarget`: Target to be called with the selector.
- `inUserRefCon`: User’s refCon that will get passed to them when their selector is invoked.

<a id="Discussion"></a>

## Discussion

You do not need to call this on the session typically, unless you have subclassed the OBEXSession to implement a new transport and that transport supports async opening of connections. If it does not support async open, then using this is pointless.

# setOpenTransportConnectionAsyncSelector:target:refCon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows you to set the selector to be used when a transport connection is opened, or fails to open.

## Declaration

```objectivec
- (void) setOpenTransportConnectionAsyncSelector:(SEL) inSelector target:(id) inSelectorTarget refCon:(void *) inUserRefCon;
```

## Parameters

- `inSelector`: Selector to call on the target.
- `inSelectorTarget`: Target to be called with the selector.
- `inUserRefCon`: User’s refCon that will get passed to them when their selector is invoked.

<a id="Discussion"></a>

## Discussion

You do not need to call this on the session typically, unless you have subclassed the OBEXSession to implement a new transport and that transport supports async opening of connections. If it does not support async open, then using this is pointless.
