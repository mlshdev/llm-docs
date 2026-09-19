> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wapublisherlistener/configureparameters(_:)

# configureParameters(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Configures the provided parameters for a Wi-Fi Aware publish operation and connection.

## Declaration

```swift
func configureParameters(_ parameters: NWParameters)
```

## Parameters

- `parameters`: The `NWParameters` to configure.

## See Also

### Creating publisher implementation details

- [service](service.md): The service data for the Wi-Fi Aware publish operation.
- [isApplicationService](isapplicationservice.md): A Boolean value that determines whether the devices are listening for an application service.
