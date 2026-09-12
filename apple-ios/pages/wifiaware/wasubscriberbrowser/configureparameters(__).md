> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser/configureparameters(_:)](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/configureparameters(_:))

# configureParameters(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns the parameters to use to configure the Wi-Fi Aware subscriber and the subsequent connection.

## Declaration

```swift
func configureParameters(_ parameters: NWParameters?) -> NWParameters
```

## Parameters

- `parameters`: The parameters to use to configure the subscriber.

<a id="return-value"></a>

## Return Value

A new `NWParameters`, updated to include the Wi-Fi Aware parameters.

## See Also

### Creating browser implementation details

- [makeDescriptor()](makedescriptor%28%29.md): Makes a descriptor that can create a network browser for a Wi-Fi Aware subscribe operation.
- [makeEndpoint(from:)](makeendpoint%28from_%29.md): Creates a connectable Wi-Fi Aware endpoint from a browse result.
