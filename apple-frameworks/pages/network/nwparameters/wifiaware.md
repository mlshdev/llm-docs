> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/wifiaware](https://developer.apple.com/documentation/network/nwparameters/wifiaware)

# wifiAware

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Get and set Wi-Fi Aware specific connection parameters.

## Declaration

```swift
final var wifiAware: WAParameters { get set }
```

<a id="discussion"></a>

## Discussion

If no Wi-Fi Aware specific properties were previously set, the `WAParameters/defaults` are assumed.

The following code is an example of creating the `NWParameters`, setting, and getting the WiFi Aware parameters.

```swift
// Create NWParameters
var networkParameters = NWParameters()

// Set Wi-Fi Aware Parameters
networkParameters.wifiAware = .defaults

// Get Wi-Fi Aware Parameters
let wifiAwareParameters = networkParameters.wifiAware
```
