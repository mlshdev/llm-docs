> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformmetaattributetype/cancycle](https://developer.apple.com/documentation/security/sectransformmetaattributetype/cancycle)

# SecTransformMetaAttributeType.canCycle (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The transform allows cyclic behavior.

> SecTransform is no longer supported

## Declaration

```swift
case canCycle
```

<a id="Discussion"></a>

## Discussion

A transform group is a directed graph which is typically acyclic. Some transforms need to work with cycles. For example, a transform that emits a header and trailer around the data of another transform must create a cycle. If this metadata set to [true](https://developer.apple.com/documentation/swift/true), no error is returned if a cycle is detected for this attribute.

# kSecTransformMetaAttributeCanCycle (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The transform allows cyclic behavior.

> SecTransform is no longer supported

## Declaration

```objectivec
kSecTransformMetaAttributeCanCycle
```

<a id="Discussion"></a>

## Discussion

A transform group is a directed graph which is typically acyclic. Some transforms need to work with cycles. For example, a transform that emits a header and trailer around the data of another transform must create a cycle. If this metadata set to [true](https://developer.apple.com/documentation/swift/true), no error is returned if a cycle is detected for this attribute.
