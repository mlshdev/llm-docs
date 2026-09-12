> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformcreatefp](https://developer.apple.com/documentation/security/sectransformcreatefp)

# SecTransformCreateFP (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A pointer to a function that creates a new instance of a custom transform.

> SecTransform is no longer supported

## Declaration

```swift
typealias SecTransformCreateFP = (CFString, SecTransform, SecTransformImplementationRef) -> () -> Unmanaged<CFError>?
```

## Parameters

- `name`: The name of the new custom transform. This name must be unique.
- `newTransform`: The newly created transform.
- `ref`: A reference that is bound to an instance of a custom transform.

<a id="return-value"></a>

## Return Value

A [SecTransformInstanceBlock](sectransforminstanceblock.md) that is used to create a new instance of a custom transform.

<a id="Discussion"></a>

## Discussion

Provide a function of this type to the [SecTransformCreate(\_:\_:)](sectransformcreate%28____%29.md) function when creating a custom transform. The function defined here returns an object of type [SecTransformInstanceBlock](sectransforminstanceblock.md) that provides the implementation of all of the overrides necessary to create the custom transform. This returned [SecTransformInstanceBlock](sectransforminstanceblock.md) is also where the “instance” variables for the custom transform may be defined.

# SecTransformCreateFP (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A pointer to a function that creates a new instance of a custom transform.

> SecTransform is no longer supported

## Declaration

```objectivec
typedef struct __CFError *(^(*)(const struct __CFString *, const void *, const struct OpaqueSecTransformImplementation *))(void) SecTransformCreateFP;
```

## Parameters

- `name`: The name of the new custom transform. This name must be unique.
- `newTransform`: The newly created transform.
- `ref`: A reference that is bound to an instance of a custom transform.

<a id="return-value"></a>

## Return Value

A [SecTransformInstanceBlock](sectransforminstanceblock.md) that is used to create a new instance of a custom transform.

<a id="Discussion"></a>

## Discussion

Provide a function of this type to the [SecTransformCreate](sectransformcreate%28____%29.md) function when creating a custom transform. The function defined here returns an object of type [SecTransformInstanceBlock](sectransforminstanceblock.md) that provides the implementation of all of the overrides necessary to create the custom transform. This returned [SecTransformInstanceBlock](sectransforminstanceblock.md) is also where the “instance” variables for the custom transform may be defined.
