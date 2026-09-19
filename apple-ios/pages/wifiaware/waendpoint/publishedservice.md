> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waendpoint/publishedservice

# publishedService

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The publishable service that is, or can be, connected.

## Declaration

```swift
var publishedService: WAPublishableService? { get }
```

<a id="discussion"></a>

## Discussion

Use `nil` if a publishable service isn’t in use.

## See Also

### Getting the service

- [subscribedService](subscribedservice.md): The subscribable service that is, or can be, connected.
