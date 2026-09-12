> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/configuration/maximumfiletransfersize](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/configuration/maximumfiletransfersize)

# maximumFileTransferSize

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The maximum size of a file that the RCS file transfer service can send.

## Declaration

```swift
var maximumFileTransferSize: Measurement<UnitInformationStorage>? { get }
```

<a id="discussion"></a>

## Discussion

This value is represented as a Foundation [Measurement](https://developer.apple.com/documentation/foundation/measurement) that uses the [UnitInformationStorage](https://developer.apple.com/documentation/foundation/unitinformationstorage) unit type. If the messaging service doesn’t limit the file size, the value is `nil`.

## See Also

### Inspecting file transfer configuration

- [fileTransferWarningSize](filetransferwarningsize.md): The size for issuing a warning about file transfers and Rich Card media objects.
