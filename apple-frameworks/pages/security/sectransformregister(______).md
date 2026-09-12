> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformregister(_:_:_:)](https://developer.apple.com/documentation/security/sectransformregister(_:_:_:))

# SecTransformRegister(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Registers a custom transform.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformRegister(_ uniqueName: CFString, _ createTransformFunction: SecTransformCreateFP, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Bool
```

## Parameters

- `uniqueName`: A unique name for this custom transform. It is recommended that a reverse DNS name be used for the name of your custom transform
- `createTransformFunction`: A [SecTransformCreateFP](sectransformcreatefp.md) function pointer. The function must return a [SecTransformInstanceBlock](sectransforminstanceblock.md) block. Call block_copy on this block before returning it. Failure to do so results in undefined behavior.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A Boolean that is set to [true](https://developer.apple.com/documentation/swift/true) if the custom transform was registered and [false](https://developer.apple.com/documentation/swift/false) otherwise

# SecTransformRegister (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Registers a custom transform.

> SecTransform is no longer supported

## Declaration

```objectivec
extern Boolean SecTransformRegister(CFStringRef uniqueName, SecTransformCreateFP createTransformFunction, CFErrorRef*error);
```

## Parameters

- `uniqueName`: A unique name for this custom transform. It is recommended that a reverse DNS name be used for the name of your custom transform
- `createTransformFunction`: A [SecTransformCreateFP](sectransformcreatefp.md) function pointer. The function must return a [SecTransformInstanceBlock](sectransforminstanceblock.md) block. Call block_copy on this block before returning it. Failure to do so results in undefined behavior.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A Boolean that is set to [true](https://developer.apple.com/documentation/swift/true) if the custom transform was registered and [false](https://developer.apple.com/documentation/swift/false) otherwise
