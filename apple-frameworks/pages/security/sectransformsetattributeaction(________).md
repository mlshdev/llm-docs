> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformsetattributeaction(_:_:_:_:)](https://developer.apple.com/documentation/security/sectransformsetattributeaction(_:_:_:_:))

# SecTransformSetAttributeAction(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Requests a callback when an attribute is set.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformSetAttributeAction(_ ref: SecTransformImplementationRef, _ action: CFString, _ attribute: SecTransformStringOrAttribute?, _ newAction: @escaping SecTransformAttributeActionBlock) -> CFError?
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `action`: The behavior to be set.

  Use [kSecTransformActionAttributeNotification](ksectransformactionattributenotification.md) to add a block that is called when an attribute is set. If the name is `NULL`, then the supplied block is called for all set attributes except for ones that have a specific block as a handler.

  Use [kSecTransformActionAttributeValidation](ksectransformactionattributevalidation.md) to add a block that is called to validate the input to an attribute.
- `attribute`: The name of the attribute that will be handled. An attribute reference may also be given here. A `NULL` value indicates that the supplied action is for all attributes.
- `newAction`: A [SecTransformAttributeActionBlock](sectransformattributeactionblock.md) which implements the behavior.

<a id="return-value"></a>

## Return Value

An error on failure, or `NULL` on success. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the error’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

The [kSecTransformActionProcessData](ksectransformactionprocessdata.md) action used with the [SecTransformSetDataAction(\_:\_:\_:)](sectransformsetdataaction%28______%29.md) function is a special case of a [SecTransformSetAttributeAction(\_:\_:\_:\_:)](sectransformsetattributeaction%28________%29.md) action. If this is called on the input attribute then it will overwrite any [kSecTransformActionProcessData](ksectransformactionprocessdata.md) action.

You may call this function multiple times for either a named attribute or for all attributes when the attribute parameter is `NULL`. The last call takes precedence.

# SecTransformSetAttributeAction (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Requests a callback when an attribute is set.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFErrorRefSecTransformSetAttributeAction(SecTransformImplementationRef ref, CFStringRef action, SecTransformStringOrAttributeRef attribute, SecTransformAttributeActionBlock newAction);
```

## Parameters

- `ref`: A [SecTransformImplementationRef](sectransformimplementationref.md) that is bound to an instance of a custom transform.
- `action`: The behavior to be set.

  Use [kSecTransformActionAttributeNotification](ksectransformactionattributenotification.md) to add a block that is called when an attribute is set. If the name is `NULL`, then the supplied block is called for all set attributes except for ones that have a specific block as a handler.

  Use [kSecTransformActionAttributeValidation](ksectransformactionattributevalidation.md) to add a block that is called to validate the input to an attribute.
- `attribute`: The name of the attribute that will be handled. An attribute reference may also be given here. A `NULL` value indicates that the supplied action is for all attributes.
- `newAction`: A [SecTransformAttributeActionBlock](sectransformattributeactionblock.md) which implements the behavior.

<a id="return-value"></a>

## Return Value

An error on failure, or `NULL` on success. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the error’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

The [kSecTransformActionProcessData](ksectransformactionprocessdata.md) action used with the [SecTransformSetDataAction](sectransformsetdataaction%28______%29.md) function is a special case of a [SecTransformSetAttributeAction](sectransformsetattributeaction%28________%29.md) action. If this is called on the input attribute then it will overwrite any [kSecTransformActionProcessData](ksectransformactionprocessdata.md) action.

You may call this function multiple times for either a named attribute or for all attributes when the attribute parameter is `NULL`. The last call takes precedence.
