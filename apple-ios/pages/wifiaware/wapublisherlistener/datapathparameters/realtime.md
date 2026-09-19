> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wapublisherlistener/datapathparameters/realtime

# realtime

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Parameters that prioritize latency at the expense of throughput, power consumption, and other concurrent Wi-Fi use cases and devices.

## Declaration

```swift
static let realtime: WAPublisherListener.DatapathParameters
```

<a id="return-value"></a>

## Return Value

Realtime parameters.

## See Also

### Setting performance modes

- [defaults](defaults.md): The property that configures default parameters that prioritize bulk throughput, power consumption, and other concurrent Wi-Fi use cases.
