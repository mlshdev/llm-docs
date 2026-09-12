> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformactionexternalizeextradata](https://developer.apple.com/documentation/security/ksectransformactionexternalizeextradata)

# kSecTransformActionExternalizeExtraData (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers after data is stored.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformActionExternalizeExtraData: CFString
```

<a id="Discussion"></a>

## Discussion

Allows for adding to the data that is stored using an override to the kSecTransformActionExternalizeExtraData block. The output of this override is a dictionary that contains the custom externalized data. A common use of this override is to write out a version number of a custom transform.

# kSecTransformActionExternalizeExtraData (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers after data is stored.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformActionExternalizeExtraData;
```

<a id="Discussion"></a>

## Discussion

Allows for adding to the data that is stored using an override to the kSecTransformActionExternalizeExtraData block. The output of this override is a dictionary that contains the custom externalized data. A common use of this override is to write out a version number of a custom transform.
