> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/object/primpath](https://developer.apple.com/documentation/usdkit/usdstage/object/primpath)

# primPath

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The complete path to this prim, or to the nearest prim that contains this object.

## Declaration

```swift
var primPath: USDLayer.Path { get }
```

<a id="discussion"></a>

## Discussion

If this object is a [USDPrim](../../usdprim.md), `primPath` is the same as [path](path.md). If this object is a [USDPrim.Attribute](../../usdprim/attribute.md) or a [USDPrim.Relationship](../../usdprim/relationship.md), `primPath` is the complete scene path of the object’s [prim](prim.md).
