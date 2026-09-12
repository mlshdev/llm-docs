> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/imp_removeblock(_:)](https://developer.apple.com/documentation/objectivec/imp_removeblock(_:))

# imp_removeBlock(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.

## Declaration

```swift
func imp_removeBlock(_ anImp: IMP) -> Bool
```

## Parameters

- `anImp`: An [IMP](imp.md) that was created using the [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md) function.

<a id="return-value"></a>

## Return Value

[YES](yes.md) if the block was released successfully; otherwise, [NO](no.md) (for example, the function returns [NO](no.md) if the block was not used to create `anImp` previously).

## See Also

### Using Objective-C Language Features

- [objc_enumerationMutation(\_:)](objc_enumerationmutation%28__%29.md): Inserted by the compiler when a mutation is detected during a foreach iteration.
- [objc_setEnumerationMutationHandler(\_:)](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md): Creates a pointer to a function that calls the specified block when the method is called.
- [imp_getBlock(\_:)](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md).
- [objc_loadWeak(\_:)](objc_loadweak%28__%29.md): Loads the object referenced by a weak pointer and returns it.
- [objc_storeWeak(\_:\_:)](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.

# imp_removeBlock (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.

## Declaration

```objectivec
extern BOOL imp_removeBlock(IMP anImp);
```

## Parameters

- `anImp`: An [IMP](imp.md) that was created using the [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md) function.

<a id="return-value"></a>

## Return Value

[YES](yes.md) if the block was released successfully; otherwise, [NO](no.md) (for example, the function returns [NO](no.md) if the block was not used to create `anImp` previously).

## See Also

### Using Objective-C Language Features

- [objc_enumerationMutation](objc_enumerationmutation%28__%29.md): Inserted by the compiler when a mutation is detected during a foreach iteration.
- [objc_setEnumerationMutationHandler](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md): Creates a pointer to a function that calls the specified block when the method is called.
- [imp_getBlock](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md).
- [objc_loadWeak](objc_loadweak%28__%29.md): Loads the object referenced by a weak pointer and returns it.
- [objc_storeWeak](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.
