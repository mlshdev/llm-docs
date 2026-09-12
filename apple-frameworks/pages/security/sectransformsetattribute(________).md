> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformsetattribute(_:_:_:_:)](https://developer.apple.com/documentation/security/sectransformsetattribute(_:_:_:_:))

# SecTransformSetAttribute(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Sets a static value for an attribute in a transform.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformSetAttribute(_ transformRef: SecTransform, _ key: CFString, _ value: CFTypeRef, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Bool
```

## Parameters

- `transformRef`: The transform whose attribute is to be set.
- `key`: The name of the attribute to be set. See [Transform Attributes](transform-attributes.md) for a list of valid keys and possible values.
- `value`: The static value to set for the named attribute.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A Boolean set to [true](https://developer.apple.com/documentation/swift/true) if the call succeeds. Otherwise, the `error` parameter contains information about the failure.

<a id="Discussion"></a>

## Discussion

This function is useful for things like iteration counts and other non-changing values. It returns an error and the named attribute is not changed if [SecTransformExecute(\_:\_:)](sectransformexecute%28____%29.md) has already been called on the transform.

Compare this function with the [SecTransformConnectTransforms(\_:\_:\_:\_:\_:\_:)](sectransformconnecttransforms%28____________%29.md) function which sets derived data.

# SecTransformSetAttribute (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Sets a static value for an attribute in a transform.

> SecTransform is no longer supported

## Declaration

```objectivec
extern Boolean SecTransformSetAttribute(SecTransformRef transformRef, CFStringRef key, CFTypeRef value, CFErrorRef*error);
```

## Parameters

- `transformRef`: The transform whose attribute is to be set.
- `key`: The name of the attribute to be set. See [Transform Attributes](transform-attributes.md) for a list of valid keys and possible values.
- `value`: The static value to set for the named attribute.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A Boolean set to [true](https://developer.apple.com/documentation/swift/true) if the call succeeds. Otherwise, the `error` parameter contains information about the failure.

<a id="Discussion"></a>

## Discussion

This function is useful for things like iteration counts and other non-changing values. It returns an error and the named attribute is not changed if [SecTransformExecute](sectransformexecute%28____%29.md) has already been called on the transform.

Compare this function with the [SecTransformConnectTransforms](sectransformconnecttransforms%28____________%29.md) function which sets derived data.
