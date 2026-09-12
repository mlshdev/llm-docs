> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/washaredsecret/context/init(_:)-74fai](https://developer.apple.com/documentation/wifiaware/washaredsecret/context/init(_:)-74fai)

# init(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a new custom context that provides unique data.

## Declaration

```swift
init?(_ data: Data)
```

## Parameters

- `data`: The data to use as the underlying context, which must be greater than or equal to `3` bytes long.

<a id="return-value"></a>

## Return Value

A new `Context`, or `nil` if the provided string was too short.

<a id="Discussion"></a>

## Discussion

Custom contexts may use any data. Set the same byte value on the local and remote devices in order to generate the same shared secret.
