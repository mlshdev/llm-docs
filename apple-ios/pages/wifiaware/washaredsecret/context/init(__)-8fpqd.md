> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/washaredsecret/context/init(_:)-8fpqd](https://developer.apple.com/documentation/wifiaware/washaredsecret/context/init(_:)-8fpqd)

# init(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a new custom context that provides a unique string.

## Declaration

```swift
init?(_ string: String)
```

## Parameters

- `string`: The string to use as the underlying context, which must be equal to or greater than three characters long. The framework converts the string to UTF-8 prior to hashing it in the derivation.

<a id="return-value"></a>

## Return Value

A new `Context`, or `nil` if the provided string was too short

<a id="Discussion"></a>

## Discussion

The custom context may use any string that is representable as UTF-8, and which normalizes to the same value when represented as bytes. A best practice is to use ASCII-compatible values to avoid normalization issues. Set the same byte value on the local and remote devices in order to generate the same shared secret.
