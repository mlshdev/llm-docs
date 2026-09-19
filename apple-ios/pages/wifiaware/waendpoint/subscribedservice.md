> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waendpoint/subscribedservice

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
