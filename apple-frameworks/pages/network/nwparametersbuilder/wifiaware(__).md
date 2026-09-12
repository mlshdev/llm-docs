> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersbuilder/wifiaware(_:)](https://developer.apple.com/documentation/network/nwparametersbuilder/wifiaware(_:))

# wifiAware(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Configure Wi-Fi Aware properties on an `NetworkConnection`

## Declaration

```swift
func wifiAware(_ configurator: (inout WAParameters) -> Void) -> NWParametersBuilder<Top, repeat each P>
```

## Parameters

- `configurator`: The function that will apply the desired `WAParameters` to the network parameters.

<a id="return-value"></a>

## Return Value

The updated parameters, with the configured Wi-Fi Aware parameters applied.

<a id="discussion"></a>

## Discussion

If not previously set, parameters will have `WAParameters/defaults` applied initially.

Example:

```swift
let connection = NetworkConnection(to: endpoint, using: .parameters {
	UDP()
}.wifiAware {
	$0 = .defaults
}
```
