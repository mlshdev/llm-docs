> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waerror/servicealreadysubscribing(_:)](https://developer.apple.com/documentation/wifiaware/waerror/servicealreadysubscribing(_:))

# WAError.serviceAlreadySubscribing(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs if a new subscriber or `Network/NetworkBrowser` can’t be created.

## Declaration

```swift
case serviceAlreadySubscribing(WAError.ServiceAlreadySubscribingDetails)
```

<a id="discussion"></a>

## Discussion

This error occurs if a subscriber is already active on the service.

## See Also

### Checking for service already in use

- [WAError.ServiceAlreadySubscribingDetails](servicealreadysubscribingdetails.md): The optional details describing the service that’s subscribing.
- [WAError.serviceAlreadyPublishing(\_:)](servicealreadypublishing%28__%29.md): An error that occurs if a new publisher or `Network/NetworkListener` can’t be created.
- [WAError.ServiceAlreadyPublishingDetails](servicealreadypublishingdetails.md): The optional details describing the service that’s publishing.
