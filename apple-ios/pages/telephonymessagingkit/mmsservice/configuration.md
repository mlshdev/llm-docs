> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/configuration](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/configuration)

# MMSService.Configuration

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that provides information about MMS messages sent and received using the current carrier.

## Declaration

```swift
struct Configuration
```

## Topics

### Instance Properties

- [maximumImageSize](configuration/maximumimagesize.md): The maximum size of an image, in bytes, allowed for a sent group message.
- [maximumMessageSize](configuration/maximummessagesize.md): The maximum MMS size for a sent text message.
- [maximumRecipients](configuration/maximumrecipients.md): The maximum number of recipients allowed for a sent group message.
- [maximumSubjectSize](configuration/maximumsubjectsize.md): The maximum length of the subject allowed for a sent group message.
- [smsSizeToBeSentAsMMSInstead](configuration/smssizetobesentasmmsinstead.md): The maximum size of an SMS message, beyond which the client needs to use MMS instead.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing MMS configuration

- [configuration(for:)](configuration%28for_%29.md): Retrieves the MMS configuration for the carrier.
