> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransforminstanceblock](https://developer.apple.com/documentation/security/sectransforminstanceblock)

# SecTransformInstanceBlock (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A block that you return from a transform creation function.

## Declaration

```swift
typealias SecTransformInstanceBlock = () -> Unmanaged<CFError>?
```

<a id="return-value"></a>

## Return Value

A an error object if an error occurred.

<a id="Discussion"></a>

## Discussion

You return a block of this type from the custom transform creation function of type [SecTransformCreateFP](sectransformcreatefp.md) that you register with the [SecTransformRegister(\_:\_:\_:)](sectransformregister%28______%29.md) function.

# SecTransformInstanceBlock (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A block that you return from a transform creation function.

## Declaration

```objectivec
typedef struct __CFError *(^)(void) SecTransformInstanceBlock;
```

<a id="return-value"></a>

## Return Value

A an error object if an error occurred.

<a id="Discussion"></a>

## Discussion

You return a block of this type from the custom transform creation function of type [SecTransformCreateFP](sectransformcreatefp.md) that you register with the [SecTransformRegister](sectransformregister%28______%29.md) function.
