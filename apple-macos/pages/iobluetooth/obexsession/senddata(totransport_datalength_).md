> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/obexsession/senddata(totransport:datalength:)

# sendData(toTransport:dataLength:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

You must override this to send data over your transport. This does nothing by default, it will return a kOBEXUnsupportedError.

## Declaration

```swift
func sendData(toTransport inDataToSend: UnsafeMutableRawPointer!, dataLength inDataLength: Int) -> OBEXError
```

## Parameters

- `inDataToSend`: Data to shove over the transport to a remote OBEX session.
- `inDataLength`: Length of data passed in.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must override this! When called you should send the data over the transport to the remote session.

# sendDataToTransport:dataLength: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

You must override this to send data over your transport. This does nothing by default, it will return a kOBEXUnsupportedError.

## Declaration

```objectivec
- (OBEXError) sendDataToTransport:(void *) inDataToSend dataLength:(size_t) inDataLength;
```

## Parameters

- `inDataToSend`: Data to shove over the transport to a remote OBEX session.
- `inDataLength`: Length of data passed in.

<a id="Discussion"></a>

## Discussion

Tranport subclasses must override this! When called you should send the data over the transport to the remote session.
