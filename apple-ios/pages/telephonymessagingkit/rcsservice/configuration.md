> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/configuration](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/configuration)

# RCSService.Configuration

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains RCS configuration parameters, such as timing and size limits.

## Declaration

```swift
struct Configuration
```

## Topics

### Inspecting message configuration

- [maximumTextMessageSize](configuration/maximumtextmessagesize.md): The maximum size of a text chat message that a person can enter in a 1-to-1 chat or group chat session.

### Inspecting file transfer configuration

- [maximumFileTransferSize](configuration/maximumfiletransfersize.md): The maximum size of a file that the RCS file transfer service can send.
- [fileTransferWarningSize](configuration/filetransferwarningsize.md): The size for issuing a warning about file transfers and Rich Card media objects.

### Inspecting chat configuration

- [chatRevokeTimeout](configuration/chatrevoketimeout.md): The maximum duration the service provider allows for delivery notification before it revokes a chat message.
- [maximumGroupSize](configuration/maximumgroupsize.md): The maximum number of participants allowed for a group chat.

### Supporting RCS encryption

- [supportsEndToEndEncryption](configuration/supportsendtoendencryption.md): A Boolean value indicating whether the RCS service supports end-to-end encryption.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing RCS configuration

- [configuration(for:)](configuration%28for_%29.md): Retrieves the RCS configuration for the specified cellular service.
