> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waendpoint/subscribedservice](https://developer.apple.com/documentation/wifiaware/waendpoint/subscribedservice)

# subscribedService

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The subscribable service that is, or can be, connected.

## Declaration

```swift
var subscribedService: WASubscribableService? { get }
```

<a id="discussion"></a>

## Discussion

Use `nil` if a subscribable service isn’t in use.

## See Also

### Getting the service

- [publishedService](publishedservice.md): The publishable service that is, or can be, connected.
