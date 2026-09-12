> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/path/appending(child:)](https://developer.apple.com/documentation/usdkit/usdlayer/path/appending(child:))

# appending(child:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a new path with the named child prim appended.

## Declaration

```swift
func appending(child name: USDToken) -> USDLayer.Path
```

## Parameters

- `name`: The child prim’s name.

<a id="return-value"></a>

## Return Value

A new path identifying the child prim.
