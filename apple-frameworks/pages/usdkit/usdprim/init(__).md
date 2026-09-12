> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/init(_:)](https://developer.apple.com/documentation/usdkit/usdprim/init(_:))

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Casts an object handle to a prim handle.

## Declaration

```swift
init?(_ object: USDStage.Object)
```

<a id="discussion"></a>

## Discussion

Returns `nil` if the object is not a prim.

## See Also

### Creating a prim

- [init()](init%28%29.md): An invalid prim handle.
