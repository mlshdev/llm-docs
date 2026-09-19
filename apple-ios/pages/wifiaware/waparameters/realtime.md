> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waparameters/realtime

# realtime

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The property that configures parameters that prioritize latency at the expense of throughput, power consumption, and other concurrent Wi-Fi use cases.

## Declaration

```swift
static let realtime: WAParameters
```

<a id="return-value"></a>

## Return Value

Realtime parameters.

## See Also

### Setting common configurations

- [defaults](defaults.md): The property that configures default parameters that prioritize bulk throughput, power consumption, and other concurrent Wi-Fi use cases.
