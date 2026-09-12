> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/withincomingrfcommchannel(_:eventselector:selectortarget:refcon:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/withincomingrfcommchannel(_:eventselector:selectortarget:refcon:))

# withIncomingRFCOMMChannel(\_:eventSelector:selectorTarget:refCon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a Bluetooth-based OBEX Session using an incoming RFCOMM channel.

## Declaration

```swift
class func withIncomingRFCOMMChannel(_ inChannel: IOBluetoothRFCOMMChannel!, eventSelector inEventSelector: Selector!, selectorTarget inEventSelectorTarget: Any!, refCon inUserRefCon: UnsafeMutableRawPointer!) -> Self!
```

## Parameters

- `inChannel`: The channel to use to create a connection to a device.
- `inEventSelector`: The selector that gets called when an event occurs on the OBEX Session.
- `inEventSelectorTarget`: The object that is used to call the above selector.
- `inUserRefCon`: The reference constant. Pass whatever you wish - it will be returned to you in the selector.

<a id="Discussion"></a>

## Discussion

*IMPORTANT NOTE* In Bluetooth framework version 1.0.0, the session returned will NOT be autoreleased as it should be according to objc convention. This has been changed starting in Bluetooth version 1.0.1 and later, so it WILL be autoreleased upon return, so you will need to retain it if you want to reference it later.

# withIncomingRFCOMMChannel:eventSelector:selectorTarget:refCon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a Bluetooth-based OBEX Session using an incoming RFCOMM channel.

## Declaration

```objectivec
+ (instancetype) withIncomingRFCOMMChannel:(IOBluetoothRFCOMMChannel *) inChannel eventSelector:(SEL) inEventSelector selectorTarget:(id) inEventSelectorTarget refCon:(void *) inUserRefCon;
```

## Parameters

- `inChannel`: The channel to use to create a connection to a device.
- `inEventSelector`: The selector that gets called when an event occurs on the OBEX Session.
- `inEventSelectorTarget`: The object that is used to call the above selector.
- `inUserRefCon`: The reference constant. Pass whatever you wish - it will be returned to you in the selector.

<a id="Discussion"></a>

## Discussion

*IMPORTANT NOTE* In Bluetooth framework version 1.0.0, the session returned will NOT be autoreleased as it should be according to objc convention. This has been changed starting in Bluetooth version 1.0.1 and later, so it WILL be autoreleased upon return, so you will need to retain it if you want to reference it later.
