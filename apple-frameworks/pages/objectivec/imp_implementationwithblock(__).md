> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/imp_implementationwithblock(_:)](https://developer.apple.com/documentation/objectivec/imp_implementationwithblock(_:))

# imp_implementationWithBlock(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a pointer to a function that calls the specified block when the method is called.

## Declaration

```swift
func imp_implementationWithBlock(_ block: Any) -> IMP
```

## Parameters

- `block`: The block that implements this method. The signature of `block` should be `method_return_type ^(id self, method_args …)`. The selector of the method is not available to `block`. `block` is copied with `Block_copy()`.

<a id="return-value"></a>

## Return Value

The [IMP](imp.md) that calls `block`. You must dispose of the returned [IMP](imp.md) using the function.

## See Also

### Using Objective-C Language Features

- [objc_enumerationMutation(\_:)](objc_enumerationmutation%28__%29.md): Inserted by the compiler when a mutation is detected during a foreach iteration.
- [objc_setEnumerationMutationHandler(\_:)](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_getBlock(\_:)](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md).
- [imp_removeBlock(\_:)](imp_removeblock%28__%29.md): Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.
- [objc_loadWeak(\_:)](objc_loadweak%28__%29.md): Loads the object referenced by a weak pointer and returns it.
- [objc_storeWeak(\_:\_:)](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.

# imp_implementationWithBlock (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a pointer to a function that calls the specified block when the method is called.

## Declaration

```objectivec
extern IMPimp_implementationWithBlock(id block);
```

## Parameters

- `block`: The block that implements this method. The signature of `block` should be `method_return_type ^(id self, method_args …)`. The selector of the method is not available to `block`. `block` is copied with `Block_copy()`.

<a id="return-value"></a>

## Return Value

The [IMP](imp.md) that calls `block`. You must dispose of the returned [IMP](imp.md) using the function.

## See Also

### Using Objective-C Language Features

- [objc_enumerationMutation](objc_enumerationmutation%28__%29.md): Inserted by the compiler when a mutation is detected during a foreach iteration.
- [objc_setEnumerationMutationHandler](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_getBlock](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md).
- [imp_removeBlock](imp_removeblock%28__%29.md): Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.
- [objc_loadWeak](objc_loadweak%28__%29.md): Loads the object referenced by a weak pointer and returns it.
- [objc_storeWeak](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.
