> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformcreate(_:_:)](https://developer.apple.com/documentation/security/sectransformcreate(_:_:))

# SecTransformCreate(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a transform computation object.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformCreate(_ name: CFString, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecTransform?
```

## Parameters

- `name`: The type of transform to create. Use one of the pre-defined transform types or a custom type that you previously registered using [SecTransformRegister(\_:\_:\_:)](sectransformregister%28______%29.md).
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

# SecTransformCreate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a transform computation object.

> SecTransform is no longer supported

## Declaration

```objectivec
extern SecTransformRefSecTransformCreate(CFStringRef name, CFErrorRef*error);
```

## Parameters

- `name`: The type of transform to create. Use one of the pre-defined transform types or a custom type that you previously registered using [SecTransformRegister](sectransformregister%28______%29.md).
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.
