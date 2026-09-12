> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformcustomsetattribute(_:_:_:_:)](https://developer.apple.com/documentation/security/sectransformcustomsetattribute(_:_:_:_:))

# SecTransformCustomSetAttribute(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Sets an attribute value on a custom transform.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformCustomSetAttribute(_ ref: SecTransformImplementationRef, _ attribute: SecTransformStringOrAttribute, _ type: SecTransformMetaAttributeType, _ value: CFTypeRef?) -> CFTypeRef?
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `attribute`: The name or the attribute handle of the attribute whose value is to be set. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.
- `type`: The type of data to be retrieved for the attribute. See the discussion on [SecTransformMetaAttributeType](sectransformmetaattributetype.md) for details.
- `value`: The new value for the attribute

<a id="return-value"></a>

## Return Value

An error on failure, or `NULL` on success. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the error’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

Unlike the [SecTransformSetAttribute(\_:\_:\_:\_:)](sectransformsetattribute%28________%29.md) function this function can set attribute values while a transform is executing. These values are limited to the custom transform instance that is bound to the `ref` parameter.

# SecTransformCustomSetAttribute (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Sets an attribute value on a custom transform.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFTypeRefSecTransformCustomSetAttribute(SecTransformImplementationRef ref, SecTransformStringOrAttributeRef attribute, SecTransformMetaAttributeType type, CFTypeRef value);
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `attribute`: The name or the attribute handle of the attribute whose value is to be set. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.
- `type`: The type of data to be retrieved for the attribute. See the discussion on [SecTransformMetaAttributeType](sectransformmetaattributetype.md) for details.
- `value`: The new value for the attribute

<a id="return-value"></a>

## Return Value

An error on failure, or `NULL` on success. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the error’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

Unlike the [SecTransformSetAttribute](sectransformsetattribute%28________%29.md) function this function can set attribute values while a transform is executing. These values are limited to the custom transform instance that is bound to the `ref` parameter.
