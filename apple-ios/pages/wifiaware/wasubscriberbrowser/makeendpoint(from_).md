> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser/makeendpoint(from:)](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/makeendpoint(from:))

# makeEndpoint(from:)

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a connectable Wi-Fi Aware endpoint from a browse result.

## Declaration

```swift
func makeEndpoint(from browseResult: NWBrowser.Result) throws -> WASubscriberBrowser.Endpoint?
```

## Parameters

- `browseResult`: The result of the `NWBrowser` operation.

<a id="return-value"></a>

## Return Value

A `WAEndpoint` that you can connect to, or `nil` if it can’t be created.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the result isn’t valid.

## See Also

### Creating browser implementation details

- [makeDescriptor()](makedescriptor%28%29.md): Makes a descriptor that can create a network browser for a Wi-Fi Aware subscribe operation.
- [configureParameters(\_:)](configureparameters%28__%29.md): Returns the parameters to use to configure the Wi-Fi Aware subscriber and the subsequent connection.
