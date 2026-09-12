> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformcustomgetattribute(_:_:_:)](https://developer.apple.com/documentation/security/sectransformcustomgetattribute(_:_:_:))

# SecTransformCustomGetAttribute(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Gets an attribute value from a custom transform.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformCustomGetAttribute(_ ref: SecTransformImplementationRef, _ attribute: SecTransformStringOrAttribute, _ type: SecTransformMetaAttributeType) -> CFTypeRef?
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `attribute`: The name or the attribute handle of the attribute whose value is to be retrieved. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.
- `type`: The type of data to be retrieved for the attribute. See the discussion on [SecTransformMetaAttributeType](sectransformmetaattributetype.md) for details.

<a id="return-value"></a>

## Return Value

The value of the attribute.

# SecTransformCustomGetAttribute (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Gets an attribute value from a custom transform.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFTypeRefSecTransformCustomGetAttribute(SecTransformImplementationRef ref, SecTransformStringOrAttributeRef attribute, SecTransformMetaAttributeType type);
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `attribute`: The name or the attribute handle of the attribute whose value is to be retrieved. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.
- `type`: The type of data to be retrieved for the attribute. See the discussion on [SecTransformMetaAttributeType](sectransformmetaattributetype.md) for details.

<a id="return-value"></a>

## Return Value

The value of the attribute.
