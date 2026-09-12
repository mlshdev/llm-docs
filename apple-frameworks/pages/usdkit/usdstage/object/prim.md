> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/object/prim](https://developer.apple.com/documentation/usdkit/usdstage/object/prim)

# prim

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The nearest prim that contains this object.

## Declaration

```swift
var prim: USDPrim { get }
```

<a id="discussion"></a>

## Discussion

If this object is a [USDPrim](../../usdprim.md), the value of this property is that same prim. If this object is a [USDPrim.Attribute](../../usdprim/attribute.md) or a [USDPrim.Relationship](../../usdprim/relationship.md), the value of this property is the nearest prim that contains this object.
