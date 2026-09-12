> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectranformcustomgetattribute](https://developer.apple.com/documentation/security/sectranformcustomgetattribute)

# SecTranformCustomGetAttribute

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.8)

Gets an attribute value from a custom transform.

> Use [SecTransformCustomGetAttribute](sectransformcustomgetattribute%28______%29.md) instead.

## Declaration

```objectivec
extern CFTypeRefSecTranformCustomGetAttribute(SecTransformImplementationRef ref, SecTransformStringOrAttributeRef attribute, SecTransformMetaAttributeType type);
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `attribute`: The name or the attribute handle of the attribute whose value is to be retrieved. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.
- `type`: The type of data to be retrieved for the attribute. See the discussion on [SecTransformMetaAttributeType](sectransformmetaattributetype.md) for details.

<a id="return-value"></a>

## Return Value

The value of the attribute.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use [SecTransformCustomGetAttribute](sectransformcustomgetattribute%28______%29.md) instead.
