> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wapublisherlistener/datapathparameters/defaults

# defaults

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The property that configures default parameters that prioritize bulk throughput, power consumption, and other concurrent Wi-Fi use cases.

## Declaration

```swift
static let defaults: WAPublisherListener.DatapathParameters
```

<a id="return-value"></a>

## Return Value

Default parameters.

## See Also

### Setting performance modes

- [realtime](realtime.md): Parameters that prioritize latency at the expense of throughput, power consumption, and other concurrent Wi-Fi use cases and devices.
