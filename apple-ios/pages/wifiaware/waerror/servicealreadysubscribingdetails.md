> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waerror/servicealreadysubscribingdetails](https://developer.apple.com/documentation/wifiaware/waerror/servicealreadysubscribingdetails)

# WAError.ServiceAlreadySubscribingDetails

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The optional details describing the service that’s subscribing.

## Declaration

```swift
struct ServiceAlreadySubscribingDetails
```

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for service already in use

- [WAError.serviceAlreadySubscribing(\_:)](servicealreadysubscribing%28__%29.md): An error that occurs if a new subscriber or `Network/NetworkBrowser` can’t be created.
- [WAError.serviceAlreadyPublishing(\_:)](servicealreadypublishing%28__%29.md): An error that occurs if a new publisher or `Network/NetworkListener` can’t be created.
- [WAError.ServiceAlreadyPublishingDetails](servicealreadypublishingdetails.md): The optional details describing the service that’s publishing.
