> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/retrievefolderlisting()

# retrieveFolderListing() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get a remote directory listing

## Declaration

```swift
func retrieveFolderListing() -> OBEXError
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess or kOBEXSessionBusyError initially. Further results returned through the fileTransferServicesRetrieveFolderListingComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘ls’.

# retrieveFolderListing (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get a remote directory listing

## Declaration

```objectivec
- (OBEXError) retrieveFolderListing;
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess or kOBEXSessionBusyError initially. Further results returned through the fileTransferServicesRetrieveFolderListingComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Equivalent to ‘ls’.
