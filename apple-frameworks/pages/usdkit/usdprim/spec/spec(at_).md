> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/spec/spec(at:)](https://developer.apple.com/documentation/usdkit/usdprim/spec/spec(at:))

# spec(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the spec at the given path within this prim.

## Declaration

```swift
func spec(at path: USDLayer.Path) -> USDLayer.Spec?
```

## Parameters

- `path`: The path to look up.

<a id="return-value"></a>

## Return Value

The spec, or `nil` if no spec is authored at `path`.
