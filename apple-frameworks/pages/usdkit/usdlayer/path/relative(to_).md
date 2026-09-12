> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/path/relative(to:)](https://developer.apple.com/documentation/usdkit/usdlayer/path/relative(to:))

# relative(to:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns this path made relative to the given anchor.

## Declaration

```swift
func relative(to anchor: USDLayer.Path) -> USDLayer.Path
```

## Parameters

- `anchor`: The path to make this path relative to.

<a id="return-value"></a>

## Return Value

A relative version of this path.
