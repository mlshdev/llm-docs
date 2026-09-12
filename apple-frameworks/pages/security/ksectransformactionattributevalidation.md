> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformactionattributevalidation](https://developer.apple.com/documentation/security/ksectransformactionattributevalidation)

# kSecTransformActionAttributeValidation (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers to perform validation of an attribute.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformActionAttributeValidation: CFString
```

<a id="Discussion"></a>

## Discussion

Allows a block to be called to validate the new value for an attribute. The default is no validation and any CFTypeRef can be used as the new value. The block should return NULL if the value is ok to set on the attribute or a CFErrorRef otherwise.

# kSecTransformActionAttributeValidation (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers to perform validation of an attribute.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformActionAttributeValidation;
```

<a id="Discussion"></a>

## Discussion

Allows a block to be called to validate the new value for an attribute. The default is no validation and any CFTypeRef can be used as the new value. The block should return NULL if the value is ok to set on the attribute or a CFErrorRef otherwise.
