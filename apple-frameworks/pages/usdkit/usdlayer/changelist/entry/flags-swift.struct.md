> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/changelist/entry/flags-swift.struct](https://developer.apple.com/documentation/usdkit/usdlayer/changelist/entry/flags-swift.struct)

# USDLayer.ChangeList.Entry.Flags

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Boolean flags describing structural changes to a spec.

## Declaration

```swift
struct Flags
```

## Topics

### Instance Properties

- [didAddInertPrim](flags-swift.struct/didaddinertprim.md): Whether an inert prim spec was added.
- [didAddNonInertPrim](flags-swift.struct/didaddnoninertprim.md): Whether a non-inert prim spec was added.
- [didAddProperty](flags-swift.struct/didaddproperty.md): Whether a property was added.
- [didAddPropertyWithOnlyRequiredFields](flags-swift.struct/didaddpropertywithonlyrequiredfields.md): Whether a property with only required fields was added.
- [didAddTarget](flags-swift.struct/didaddtarget.md): Whether a target was added to a relationship.
- [didChangeAttributeConnection](flags-swift.struct/didchangeattributeconnection.md): Whether an attribute’s connection targets changed.
- [didChangeAttributeTimeSamples](flags-swift.struct/didchangeattributetimesamples.md): Whether an attribute’s time samples changed.
- [didChangeIdentifier](flags-swift.struct/didchangeidentifier.md): Whether the layer’s identifier changed.
- [didChangePrimInheritPaths](flags-swift.struct/didchangepriminheritpaths.md): Whether a prim’s inherit paths list changed.
- [didChangePrimReferences](flags-swift.struct/didchangeprimreferences.md): Whether a prim’s references list changed.
- [didChangePrimSpecializes](flags-swift.struct/didchangeprimspecializes.md): Whether a prim’s specializes list changed.
- [didChangePrimVariantSets](flags-swift.struct/didchangeprimvariantsets.md): Whether a prim’s variant sets list changed.
- [didChangeRelationshipTargets](flags-swift.struct/didchangerelationshiptargets.md): Whether a relationship’s target list changed.
- [didChangeResolvedPath](flags-swift.struct/didchangeresolvedpath.md): Whether the layer’s resolved path changed.
- [didReloadContent](flags-swift.struct/didreloadcontent.md): Whether the layer was reloaded from its source.
- [didRemoveInertPrim](flags-swift.struct/didremoveinertprim.md): Whether an inert prim spec was removed.
- [didRemoveNonInertPrim](flags-swift.struct/didremovenoninertprim.md): Whether a non-inert prim spec was removed.
- [didRemoveProperty](flags-swift.struct/didremoveproperty.md): Whether a property was removed.
- [didRemovePropertyWithOnlyRequiredFields](flags-swift.struct/didremovepropertywithonlyrequiredfields.md): Whether a property with only required fields was removed.
- [didRemoveTarget](flags-swift.struct/didremovetarget.md): Whether a target was removed from a relationship.
- [didRename](flags-swift.struct/didrename.md): Whether a spec was renamed.
- [didReorderChildren](flags-swift.struct/didreorderchildren.md): Whether the children list of a prim was reordered.
- [didReorderProperties](flags-swift.struct/didreorderproperties.md): Whether the properties list of a prim was reordered.
- [didReplaceContent](flags-swift.struct/didreplacecontent.md): Whether the layer’s content was replaced.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
