> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformactionattributenotification](https://developer.apple.com/documentation/security/ksectransformactionattributenotification)

# kSecTransformActionAttributeNotification (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers when an attribute is set.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformActionAttributeNotification: CFString
```

<a id="Discussion"></a>

## Discussion

Allows a block to be called when an attribute is set. This allows for caching the value as a block variable in the instance block or transmogrifying the data to be set. This action is where a custom transform would be able to do processing outside of processing input to output as process data does. One the data has been processed the action block can call SecTransformCustomSetAttribute to update and other attribute.

# kSecTransformActionAttributeNotification (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers when an attribute is set.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformActionAttributeNotification;
```

<a id="Discussion"></a>

## Discussion

Allows a block to be called when an attribute is set. This allows for caching the value as a block variable in the instance block or transmogrifying the data to be set. This action is where a custom transform would be able to do processing outside of processing input to output as process data does. One the data has been processed the action block can call SecTransformCustomSetAttribute to update and other attribute.
