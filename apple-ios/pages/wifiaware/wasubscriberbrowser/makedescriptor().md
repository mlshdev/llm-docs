> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/makedescriptor()

# makeDescriptor()

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Makes a descriptor that can create a network browser for a Wi-Fi Aware subscribe operation.

## Declaration

```swift
func makeDescriptor() -> NWBrowser.Descriptor
```

<a id="return-value"></a>

## Return Value

A new `Descriptor`  that configures the `NetworkBrowser` for Wi-Fi Aware.

## See Also

### Creating browser implementation details

- [configureParameters(\_:)](configureparameters%28__%29.md): Returns the parameters to use to configure the Wi-Fi Aware subscriber and the subsequent connection.
- [makeEndpoint(from:)](makeendpoint%28from_%29.md): Creates a connectable Wi-Fi Aware endpoint from a browse result.
