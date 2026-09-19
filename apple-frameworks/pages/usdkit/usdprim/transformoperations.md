> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/transformoperations

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
