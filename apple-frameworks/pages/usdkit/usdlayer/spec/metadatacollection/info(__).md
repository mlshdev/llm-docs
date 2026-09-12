> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/spec/metadatacollection/info(_:)](https://developer.apple.com/documentation/usdkit/usdlayer/spec/metadatacollection/info(_:))

# info(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the value of `key`, or `nil` if the key is unauthored.

## Declaration

```swift
func info(_ key: USDToken) -> USDValue?
```

## Parameters

- `key`: The info key to look up.

<a id="return-value"></a>

## Return Value

The authored value, or `nil` if unauthored.
