> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformactionblock](https://developer.apple.com/documentation/security/sectransformactionblock)

# SecTransformActionBlock (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A block that overrides the default behavior of a custom transform.

> SecTransform is no longer supported

## Declaration

```swift
typealias SecTransformActionBlock = () -> Unmanaged<CFTypeRef>?
```

<a id="return-value"></a>

## Return Value

A dictionary of the custom items to be exported if this block is used to override the [kSecTransformActionExternalizeExtraData](ksectransformactionexternalizeextradata.md) action or  `NULL` for any other action. Alternatively, the block returns a [CFError](../corefoundation/cferror.md) object if an error occurs.

<a id="Discussion"></a>

## Discussion

A  block of this type is used to override the default behavior of a custom transform. This block is associated with the SecTransformOverrideTransformAction block.

The behaviors that can be overridden are:

- [kSecTransformActionCanExecute](ksectransformactioncanexecute.md) \- Determine if the transform has all of the data needed to run.
- [kSecTransformActionStartingExecution](ksectransformactionstartingexecution.md) \- Called just before running ProcessData.
- [kSecTransformActionFinalize](ksectransformactionfinalize.md) \- Called just before deleting the custom transform.
- [kSecTransformActionExternalizeExtraData](ksectransformactionexternalizeextradata.md) \- Called to allow for writing out custom data to be exported.

For example:

```objc
SecTransformImplementationRef ref;
CFErrorRef error = NULL;
 
error = SecTransformSetTransformAction(ref, kSecTransformActionStartingExecution, ^{
    // Initialize any data needed before running
    CFErrorRef result = DoMyInitialization();
    return result;});
 
SecTransformTransformActionBlock actionBlock =
^{
    // Clean up any existing data before running
    CFErrorRef result = DoMyFinalization();
    return result;};
 
error = SecTransformSetTransformAction(ref, kSecTransformActionFinalize,actionBlock);
```

# SecTransformActionBlock (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.7+ (deprecated in 13.0)

A block that overrides the default behavior of a custom transform.

> SecTransform is no longer supported

## Declaration

```objectivec
typedef const void *(^)(void) SecTransformActionBlock;
```

<a id="return-value"></a>

## Return Value

A dictionary of the custom items to be exported if this block is used to override the [kSecTransformActionExternalizeExtraData](ksectransformactionexternalizeextradata.md) action or  `NULL` for any other action. Alternatively, the block returns a [CFErrorRef](../corefoundation/cferror.md) object if an error occurs.

<a id="Discussion"></a>

## Discussion

A  block of this type is used to override the default behavior of a custom transform. This block is associated with the SecTransformOverrideTransformAction block.

The behaviors that can be overridden are:

- [kSecTransformActionCanExecute](ksectransformactioncanexecute.md) \- Determine if the transform has all of the data needed to run.
- [kSecTransformActionStartingExecution](ksectransformactionstartingexecution.md) \- Called just before running ProcessData.
- [kSecTransformActionFinalize](ksectransformactionfinalize.md) \- Called just before deleting the custom transform.
- [kSecTransformActionExternalizeExtraData](ksectransformactionexternalizeextradata.md) \- Called to allow for writing out custom data to be exported.

For example:

```objc
SecTransformImplementationRef ref;
CFErrorRef error = NULL;
 
error = SecTransformSetTransformAction(ref, kSecTransformActionStartingExecution, ^{
    // Initialize any data needed before running
    CFErrorRef result = DoMyInitialization();
    return result;});
 
SecTransformTransformActionBlock actionBlock =
^{
    // Clean up any existing data before running
    CFErrorRef result = DoMyFinalization();
    return result;};
 
error = SecTransformSetTransformAction(ref, kSecTransformActionFinalize,actionBlock);
```
