> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/listposition](https://developer.apple.com/documentation/usdkit/usdprim/listposition)

# USDPrim.ListPosition

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Where a new composition arc should be inserted relative to existing arcs.

## Declaration

```swift
enum ListPosition
```

## Topics

### Enumeration Cases

- [USDPrim.ListPosition.backOfAppendList](listposition/backofappendlist.md): Insert at the back of the append list, making this the weakest arc.
- [USDPrim.ListPosition.backOfPrependList](listposition/backofprependlist.md): Insert at the back of the prepend list.
- [USDPrim.ListPosition.frontOfAppendList](listposition/frontofappendlist.md): Insert at the front of the append list.
- [USDPrim.ListPosition.frontOfPrependList](listposition/frontofprependlist.md): Insert at the front of the prepend list, making this the strongest arc.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Composing references and payloads

- [references](references.md): The reference composition arcs on this prim.
- [USDPrim.Reference](reference.md): A reference to an external layer or asset.
- [USDPrim.ReferenceCollection](referencecollection.md): Manages reference composition arcs on a prim.
- [USDPrim.Payload](payload.md): A payload to an external asset.
