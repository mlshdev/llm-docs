> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstage/object/prim

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
