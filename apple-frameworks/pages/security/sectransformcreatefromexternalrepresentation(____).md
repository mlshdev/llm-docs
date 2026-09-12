> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformcreatefromexternalrepresentation(_:_:)](https://developer.apple.com/documentation/security/sectransformcreatefromexternalrepresentation(_:_:))

# SecTransformCreateFromExternalRepresentation(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Creates a transform instance from a dictionary of parameters.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformCreateFromExternalRepresentation(_ dictionary: CFDictionary, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecTransform?
```

## Parameters

- `dictionary`: The dictionary of parameters.
- `error`: An optional pointer to a CFErrorRef. This value is set if an error occurred. If not NULL the caller is responsible for releasing the CFErrorRef.

<a id="return-value"></a>

## Return Value

A pointer to a SecTransformRef object. You must release the object with CFRelease when you are done with it. A NULL will be returned if an error occurred during initialization, and if the error parameter is non-null, it contains the specific error data.

# SecTransformCreateFromExternalRepresentation (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Creates a transform instance from a dictionary of parameters.

> SecTransform is no longer supported

## Declaration

```objectivec
extern SecTransformRefSecTransformCreateFromExternalRepresentation(CFDictionaryRef dictionary, CFErrorRef*error);
```

## Parameters

- `dictionary`: The dictionary of parameters.
- `error`: An optional pointer to a CFErrorRef. This value is set if an error occurred. If not NULL the caller is responsible for releasing the CFErrorRef.

<a id="return-value"></a>

## Return Value

A pointer to a SecTransformRef object. You must release the object with CFRelease when you are done with it. A NULL will be returned if an error occurred during initialization, and if the error parameter is non-null, it contains the specific error data.
