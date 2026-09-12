> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/transformoperations](https://developer.apple.com/documentation/usdkit/usdprim/transformoperations)

# transformOperations

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The transform operations on this prim, in evaluation order.

## Declaration

```swift
var transformOperations: [USDTransformOperation] { get }
```

<a id="discussion"></a>

## Discussion

Returns an empty array if no transform operations are authored on the prim or if the prim does not conform to the Xformable schema.
