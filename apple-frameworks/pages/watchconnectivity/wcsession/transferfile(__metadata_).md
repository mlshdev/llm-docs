> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/transferfile(_:metadata:)](https://developer.apple.com/documentation/watchconnectivity/wcsession/transferfile(_:metadata:))

# transferFile(\_:metadata:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sends the specified file and optional dictionary to the counterpart.

## Declaration

```swift
func transferFile(_ file: URL, metadata: [String : Any]?) -> WCSessionFileTransfer
```

## Parameters

- `file`: A file-based URL that identifies the file to send. The specified file must be readable by the current app. This parameter must not be `nil`.
- `metadata`: An optional dictionary containing additional data to send. The values of the dictionary must all be property list object types. You may specify `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A file transfer object containing the file and dictionary being sent. You can use this object to cancel the file transfer at a later time.

<a id="Discussion"></a>

## Discussion

Use this method to send a file that’s local to the current device. Files are transferred to the counterpart asynchronously on a background thread. The system attempts to send files as quickly as possible but may throttle delivery speeds to accommodate performance and power concerns. Use the [outstandingFileTransfers](outstandingfiletransfers.md) method to get a list of files that are queued for delivery but have not yet been delivered to the counterpart.

If the file and its accompanying dictionary can’t be sent, the session object calls the session:fileTransfer:didFinishWithError: method of its delegate and reports an error. Errors may occur if the dictionary contains non-property list object types or if the specified URL doesn’t contain a valid file.

This method can only be called while the session is active (the [activationState](activationstate.md) property is set to [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md)). Calling this method for an inactive or deactivated session is a programmer error.

> **Warning**

>  Always test Watch Connectivity file transfers on paired devices. The Simulator app doesn’t support the [transferFile(\_:metadata:)](transferfile%28__metadata_%29.md) method.

## See Also

### Transferring Files in the Background

- [outstandingFileTransfers](outstandingfiletransfers.md): An array of in-progress file transfers.
- [hasContentPending](hascontentpending.md): A Boolean value that indicates whether the session has more content to deliver.

# transferFile:metadata: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Sends the specified file and optional dictionary to the counterpart.

## Declaration

```objectivec
- (WCSessionFileTransfer *) transferFile:(NSURL *) file metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `file`: A file-based URL that identifies the file to send. The specified file must be readable by the current app. This parameter must not be `nil`.
- `metadata`: An optional dictionary containing additional data to send. The values of the dictionary must all be property list object types. You may specify `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A file transfer object containing the file and dictionary being sent. You can use this object to cancel the file transfer at a later time.

<a id="Discussion"></a>

## Discussion

Use this method to send a file that’s local to the current device. Files are transferred to the counterpart asynchronously on a background thread. The system attempts to send files as quickly as possible but may throttle delivery speeds to accommodate performance and power concerns. Use the [outstandingFileTransfers](outstandingfiletransfers.md) method to get a list of files that are queued for delivery but have not yet been delivered to the counterpart.

If the file and its accompanying dictionary can’t be sent, the session object calls the session:fileTransfer:didFinishWithError: method of its delegate and reports an error. Errors may occur if the dictionary contains non-property list object types or if the specified URL doesn’t contain a valid file.

This method can only be called while the session is active (the [activationState](activationstate.md) property is set to [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md)). Calling this method for an inactive or deactivated session is a programmer error.

> **Warning**

>  Always test Watch Connectivity file transfers on paired devices. The Simulator app doesn’t support the [transferFile:metadata:](transferfile%28__metadata_%29.md) method.

## See Also

### Transferring Files in the Background

- [outstandingFileTransfers](outstandingfiletransfers.md): An array of in-progress file transfers.
- [hasContentPending](hascontentpending.md): A Boolean value that indicates whether the session has more content to deliver.
