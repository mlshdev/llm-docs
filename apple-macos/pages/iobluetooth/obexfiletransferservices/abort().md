> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/abort()

# abort() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Abort the current operation

## Declaration

```swift
func abort() -> OBEXError
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess, or kOBEXGeneralError if no command is in progress. ABORT commands can only be sent on our turn, meaning we may have to timeout if the target side never responds to the command in progress. In that case this object will call back with a status of kOBEXTimeoutError and an error. Further results returned through the fileTransferServicesAbortComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Attempts send an abort request to the remote device. Returns the OBEXFileTransferServices object to an idle state though the state of the remote device is not guaranteed.

# abort (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Abort the current operation

## Declaration

```objectivec
- (OBEXError) abort;
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess, or kOBEXGeneralError if no command is in progress. ABORT commands can only be sent on our turn, meaning we may have to timeout if the target side never responds to the command in progress. In that case this object will call back with a status of kOBEXTimeoutError and an error. Further results returned through the fileTransferServicesAbortComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Attempts send an abort request to the remote device. Returns the OBEXFileTransferServices object to an idle state though the state of the remote device is not guaranteed.
