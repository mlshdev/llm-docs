> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_loadweak(_:)](https://developer.apple.com/documentation/objectivec/objc_loadweak(_:))

# objc_loadWeak(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Loads the object referenced by a weak pointer and returns it.

## Declaration

```swift
func objc_loadWeak(_ location: AutoreleasingUnsafeMutablePointer<AnyObject?>) -> Any?
```

## Parameters

- `location`: The address of the weak pointer.

<a id="return-value"></a>

## Return Value

The object pointed to by `location`, or `nil` if `location` is `nil`.

<a id="Discussion"></a>

## Discussion

This function loads the object referenced by a weak pointer and returns it after retaining and autoreleasing the object. As a result, the object stays alive long enough for the caller to use it. This function is typically used anywhere a `__weak` variable is used in an expression.

## See Also

### Using Objective-C Language Features

- [objc_enumerationMutation(\_:)](objc_enumerationmutation%28__%29.md): Inserted by the compiler when a mutation is detected during a foreach iteration.
- [objc_setEnumerationMutationHandler(\_:)](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md): Creates a pointer to a function that calls the specified block when the method is called.
- [imp_getBlock(\_:)](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md).
- [imp_removeBlock(\_:)](imp_removeblock%28__%29.md): Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.
- [objc_storeWeak(\_:\_:)](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.

# objc_loadWeak (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Loads the object referenced by a weak pointer and returns it.

## Declaration

```objectivec
extern idobjc_loadWeak(id*location);
```

## Parameters

- `location`: The address of the weak pointer.

<a id="return-value"></a>

## Return Value

The object pointed to by `location`, or `nil` if `location` is `nil`.

<a id="Discussion"></a>

## Discussion

This function loads the object referenced by a weak pointer and returns it after retaining and autoreleasing the object. As a result, the object stays alive long enough for the caller to use it. This function is typically used anywhere a `__weak` variable is used in an expression.

## See Also

### Using Objective-C Language Features

- [objc_enumerationMutation](objc_enumerationmutation%28__%29.md): Inserted by the compiler when a mutation is detected during a foreach iteration.
- [objc_setEnumerationMutationHandler](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md): Creates a pointer to a function that calls the specified block when the method is called.
- [imp_getBlock](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md).
- [imp_removeBlock](imp_removeblock%28__%29.md): Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.
- [objc_storeWeak](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.
