> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/configuration/filetransferwarningsize](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/configuration/filetransferwarningsize)

# fileTransferWarningSize

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The size for issuing a warning about file transfers and Rich Card media objects.

## Declaration

```swift
let fileTransferWarningSize: Measurement<UnitInformationStorage>?
```

<a id="discussion"></a>

## Discussion

This value is equivalent to `FT WARN SIZE` in the RCS specification. Consult the specification for handling pre-recorded video that uses a resolution greater than 480p encoded at 1200 kbps. The specification’s guidance differs based on whether the file size is less than or greater than the warning size value. Your app may need to warn the person sending the video or force recompression to reduce its size.

This value is represented as a Foundation [Measurement](https://developer.apple.com/documentation/foundation/measurement) that uses the [UnitInformationStorage](https://developer.apple.com/documentation/foundation/unitinformationstorage) unit type. If the warning size isn’t applicable, the value is `nil`.

## See Also

### Inspecting file transfer configuration

- [maximumFileTransferSize](maximumfiletransfersize.md): The maximum size of a file that the RCS file transfer service can send.
