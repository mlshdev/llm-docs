> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobilephotoidrawdatarequest/response

# MobilePhotoIDRawDataRequest.Response

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A type that contains the response information from a successful photo ID raw data request.

## Declaration

```swift
struct Response
```

## Topics

### Instance Properties

- [ephemeralReaderKey](response/ephemeralreaderkey.md): The session’s ephemeral reader key.
- [responseData](response/responsedata.md): The data the photo ID holder returns.
- [sessionTranscript](response/sessiontranscript.md): The session transcript of the document request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
