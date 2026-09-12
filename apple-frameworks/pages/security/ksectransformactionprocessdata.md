> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformactionprocessdata](https://developer.apple.com/documentation/security/ksectransformactionprocessdata)

# kSecTransformActionProcessData (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers to process the data of an attribute.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformActionProcessData: CFString
```

<a id="Discussion"></a>

## Discussion

Overrides the standard data processing for an attribute. This is almost exclusively used for processing the input attribute as the return value of their block sets the output attribute. This is used with the SecTransformOverrideAttributeAction block.

# kSecTransformActionProcessData (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers to process the data of an attribute.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformActionProcessData;
```

<a id="Discussion"></a>

## Discussion

Overrides the standard data processing for an attribute. This is almost exclusively used for processing the input attribute as the return value of their block sets the output attribute. This is used with the SecTransformOverrideAttributeAction block.
