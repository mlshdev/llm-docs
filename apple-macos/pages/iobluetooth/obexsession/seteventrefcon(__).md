> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/seteventrefcon(_:)](https://developer.apple.com/documentation/iobluetooth/obexsession/seteventrefcon(_:))

# setEventRefCon(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sets the C-API callback refCon used when the session recieves data.

## Declaration

```swift
func setEventRefCon(_ inRefCon: UnsafeMutableRawPointer!)
```

## Parameters

- `inRefCon`: User’s refCon that will get passed when their event callback is invoked.

<a id="Discussion"></a>

## Discussion

This is really not intended for client sessions. Only subclasses would really be interested in using this. They should set these when their subclass object is created, because otherwise they will have no context in their callback.

# setEventRefCon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sets the C-API callback refCon used when the session recieves data.

## Declaration

```objectivec
- (void) setEventRefCon:(void *) inRefCon;
```

## Parameters

- `inRefCon`: User’s refCon that will get passed when their event callback is invoked.

<a id="Discussion"></a>

## Discussion

This is really not intended for client sessions. Only subclasses would really be interested in using this. They should set these when their subclass object is created, because otherwise they will have no context in their callback.
