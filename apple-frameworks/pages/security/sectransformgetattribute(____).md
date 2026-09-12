> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformgetattribute(_:_:)](https://developer.apple.com/documentation/security/sectransformgetattribute(_:_:))

# SecTransformGetAttribute(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Gets the current value of a transform attribute.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformGetAttribute(_ transformRef: SecTransform, _ key: CFString) -> CFTypeRef?
```

## Parameters

- `transformRef`: The transform whose attribute value will be retrieved.
- `key`: The name of the attribute to retrieve. See [Transform Attributes](transform-attributes.md)  for a list of valid keys.

<a id="return-value"></a>

## Return Value

The value of an attribute. If this attribute is being set as the output of another transform and [SecTransformExecute(\_:\_:)](sectransformexecute%28____%29.md) has not been called on the transform or if the attribute does not exists then `NULL` will be returned.

<a id="Discussion"></a>

## Discussion

This may be called after [SecTransformExecute(\_:\_:)](sectransformexecute%28____%29.md).

# SecTransformGetAttribute (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Gets the current value of a transform attribute.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFTypeRefSecTransformGetAttribute(SecTransformRef transformRef, CFStringRef key);
```

## Parameters

- `transformRef`: The transform whose attribute value will be retrieved.
- `key`: The name of the attribute to retrieve. See [Transform Attributes](transform-attributes.md)  for a list of valid keys.

<a id="return-value"></a>

## Return Value

The value of an attribute. If this attribute is being set as the output of another transform and [SecTransformExecute](sectransformexecute%28____%29.md) has not been called on the transform or if the attribute does not exists then `NULL` will be returned.

<a id="Discussion"></a>

## Discussion

This may be called after [SecTransformExecute](sectransformexecute%28____%29.md).
