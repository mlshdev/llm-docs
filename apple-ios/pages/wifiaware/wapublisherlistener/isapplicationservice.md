> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wapublisherlistener/isapplicationservice

# isApplicationService

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that determines whether the devices are listening for an application service.

## Declaration

```swift
var isApplicationService: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value is `true` if a device is listening for an application service. The value is `false` otherwise.

## See Also

### Creating publisher implementation details

- [configureParameters(\_:)](configureparameters%28__%29.md): Configures the provided parameters for a Wi-Fi Aware publish operation and connection.
- [service](service.md): The service data for the Wi-Fi Aware publish operation.
