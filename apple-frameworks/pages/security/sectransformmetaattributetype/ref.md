> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformmetaattributetype/ref](https://developer.apple.com/documentation/security/sectransformmetaattributetype/ref)

# SecTransformMetaAttributeType.ref (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A direct reference to an attribute’s value.

> SecTransform is no longer supported

## Declaration

```swift
case ref
```

<a id="Discussion"></a>

## Discussion

This reference allows for direct access to an attribute without having to look up the attribute by name. If a transform commonly uses an attribute, using a reference speeds up the use of that attribute. Attribute references are not visible or valid from outside of the particular transform instance.

# kSecTransformMetaAttributeRef (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A direct reference to an attribute’s value.

> SecTransform is no longer supported

## Declaration

```objectivec
kSecTransformMetaAttributeRef
```

<a id="Discussion"></a>

## Discussion

This reference allows for direct access to an attribute without having to look up the attribute by name. If a transform commonly uses an attribute, using a reference speeds up the use of that attribute. Attribute references are not visible or valid from outside of the particular transform instance.
