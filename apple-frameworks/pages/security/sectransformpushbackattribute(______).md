> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformpushbackattribute(_:_:_:)](https://developer.apple.com/documentation/security/sectransformpushbackattribute(_:_:_:))

# SecTransformPushbackAttribute(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Pushes a single value back for a specific attribute.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformPushbackAttribute(_ ref: SecTransformImplementationRef, _ attribute: SecTransformStringOrAttribute, _ value: CFTypeRef) -> CFTypeRef?
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `attribute`: The name or the attribute handle of the attribute whose value is to be pushed back. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.
- `value`: The value being pushed back.

<a id="return-value"></a>

## Return Value

An error on failure, or `NULL` on success. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the error’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

Calling this function stops the flow of data into the specified attribute until any attribute is changed for the transform instance bound to the `ref` parameter.

# SecTransformPushbackAttribute (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Pushes a single value back for a specific attribute.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFTypeRefSecTransformPushbackAttribute(SecTransformImplementationRef ref, SecTransformStringOrAttributeRef attribute, CFTypeRef value);
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `attribute`: The name or the attribute handle of the attribute whose value is to be pushed back. When using a name, see [Transform Attributes](transform-attributes.md) for a list of valid key names.
- `value`: The value being pushed back.

<a id="return-value"></a>

## Return Value

An error on failure, or `NULL` on success. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the error’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

Calling this function stops the flow of data into the specified attribute until any attribute is changed for the transform instance bound to the `ref` parameter.
