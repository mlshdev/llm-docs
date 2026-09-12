> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformactioninternalizeextradata](https://developer.apple.com/documentation/security/ksectransformactioninternalizeextradata)

# kSecTransformActionInternalizeExtraData (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers after attributes are read into a transform.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformActionInternalizeExtraData: CFString
```

<a id="Discussion"></a>

## Discussion

Overrides the standard processing that occurs when externalized data is used to create a transform. This is closely tied to the kSecTransformActionExternalizeExtraData override. The ‘normal’ attributes are read into the new transform and then this is called to read in the items that were written out using kSecTransformActionExternalizeExtraData override. A common use of this override would be to read in the version number of the externalized custom transform.

# kSecTransformActionInternalizeExtraData (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers after attributes are read into a transform.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformActionInternalizeExtraData;
```

<a id="Discussion"></a>

## Discussion

Overrides the standard processing that occurs when externalized data is used to create a transform. This is closely tied to the kSecTransformActionExternalizeExtraData override. The ‘normal’ attributes are read into the new transform and then this is called to read in the items that were written out using kSecTransformActionExternalizeExtraData override. A common use of this override would be to read in the version number of the externalized custom transform.
