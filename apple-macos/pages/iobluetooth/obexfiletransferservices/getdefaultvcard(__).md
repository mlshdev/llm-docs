> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/getdefaultvcard(_:)](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/getdefaultvcard(_:))

# getDefaultVCard(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the remote default VCard, if it is supported

## Declaration

```swift
func getDefaultVCard(_ inLocalPathAndName: String!) -> OBEXError
```

## Parameters

- `inLocalPathAndName`: The path and name of where the received file will go

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesGetComplete: and fileTransferServicesGetProgress: delegate methods if initially successful.

<a id="Discussion"></a>

## Discussion

Some devices such as cellphones and computers support default VCards

# getDefaultVCard: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the remote default VCard, if it is supported

## Declaration

```objectivec
- (OBEXError) getDefaultVCard:(NSString *) inLocalPathAndName;
```

## Parameters

- `inLocalPathAndName`: The path and name of where the received file will go

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesGetComplete: and fileTransferServicesGetProgress: delegate methods if initially successful.

<a id="Discussion"></a>

## Discussion

Some devices such as cellphones and computers support default VCards
