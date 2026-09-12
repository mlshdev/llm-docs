> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/path/hasprefix(_:)](https://developer.apple.com/documentation/usdkit/usdlayer/path/hasprefix(_:))

# hasPrefix(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Boolean value that indicates whether this path begins with `prefix`.

## Declaration

```swift
func hasPrefix(_ prefix: USDLayer.Path) -> Bool
```

## Parameters

- `prefix`: The candidate prefix path.

<a id="return-value"></a>

## Return Value

`true` if this path is rooted at `prefix`; otherwise, `false`.
