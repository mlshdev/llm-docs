> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/path/absolute(at:)](https://developer.apple.com/documentation/usdkit/usdlayer/path/absolute(at:))

# absolute(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns this path made absolute, anchored at the given path.

## Declaration

```swift
func absolute(at anchor: USDLayer.Path) -> USDLayer.Path
```

## Parameters

- `anchor`: The absolute path to use as the anchor.

<a id="return-value"></a>

## Return Value

An absolute version of this path.
