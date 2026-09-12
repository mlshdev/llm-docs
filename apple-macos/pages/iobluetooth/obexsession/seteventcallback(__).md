> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/seteventcallback(_:)](https://developer.apple.com/documentation/iobluetooth/obexsession/seteventcallback(_:))

# setEventCallback(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sets the C-API callback used when the session recieves data.

## Declaration

```swift
func setEventCallback(_ inEventCallback: OBEXSessionEventCallback!)
```

## Parameters

- `inEventCallback`: Function to callback. Should be non-NULL, unless you are attempting to clear the callback, but doing that doesn’t make much sense.

<a id="Discussion"></a>

## Discussion

This is really not intended for client sessions. Only subclasses would really be interested in using this. They should set these when their subclass object is created, because otherwise they will have no way of receiving the initial command data packet. This is a partner to setEventRefCon, described below.

# setEventCallback: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sets the C-API callback used when the session recieves data.

## Declaration

```objectivec
- (void) setEventCallback:(OBEXSessionEventCallback) inEventCallback;
```

## Parameters

- `inEventCallback`: Function to callback. Should be non-NULL, unless you are attempting to clear the callback, but doing that doesn’t make much sense.

<a id="Discussion"></a>

## Discussion

This is really not intended for client sessions. Only subclasses would really be interested in using this. They should set these when their subclass object is created, because otherwise they will have no way of receiving the initial command data packet. This is a partner to setEventRefCon, described below.
