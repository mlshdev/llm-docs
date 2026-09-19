> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/removeitem(_:)

# removeItem(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Remove a remote item.

## Declaration

```swift
func removeItem(_ inItemName: String!) -> OBEXError
```

## Parameters

- `inItemName`: The name of the remote item to be removed

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesRemoveItemComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Not supported for use on Apple computer targets

# removeItem: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Remove a remote item.

## Declaration

```objectivec
- (OBEXError) removeItem:(NSString *) inItemName;
```

## Parameters

- `inItemName`: The name of the remote item to be removed

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXBadArgumentError initially. Further results returned through the fileTransferServicesRemoveItemComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

Not supported for use on Apple computer targets
