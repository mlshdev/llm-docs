> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformcopyexternalrepresentation(_:)](https://developer.apple.com/documentation/security/sectransformcopyexternalrepresentation(_:))

# SecTransformCopyExternalRepresentation(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Creates a dictionary that contains enough information to be able to recreate a transform.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformCopyExternalRepresentation(_ transformRef: SecTransform) -> CFDictionary
```

## Parameters

- `transformRef`: The transformRef to be externalized.

<a id="Discussion"></a>

## Discussion

This function returns a CFDictionaryRef that contains sufficient information to be able to recreate this transform. You can pass this CFDictionaryRef to SecTransformCreateFromExternalRepresentation to be able to recreate the transform. The dictionary can also be written out to disk using the techniques described here.

http://developer.apple.com/mac/library/documentation/CoreFoundation/Conceptual/CFPropertyLists/Articles/Saving.html

# SecTransformCopyExternalRepresentation (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Creates a dictionary that contains enough information to be able to recreate a transform.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFDictionaryRefSecTransformCopyExternalRepresentation(SecTransformRef transformRef);
```

## Parameters

- `transformRef`: The transformRef to be externalized.

<a id="Discussion"></a>

## Discussion

This function returns a CFDictionaryRef that contains sufficient information to be able to recreate this transform. You can pass this CFDictionaryRef to SecTransformCreateFromExternalRepresentation to be able to recreate the transform. The dictionary can also be written out to disk using the techniques described here.

http://developer.apple.com/mac/library/documentation/CoreFoundation/Conceptual/CFPropertyLists/Articles/Saving.html
