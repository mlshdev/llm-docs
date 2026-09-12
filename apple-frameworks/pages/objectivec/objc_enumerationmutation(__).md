> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_enumerationmutation(_:)](https://developer.apple.com/documentation/objectivec/objc_enumerationmutation(_:))

# objc_enumerationMutation(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Inserted by the compiler when a mutation is detected during a foreach iteration.

## Declaration

```swift
func objc_enumerationMutation(_ obj: Any)
```

## Parameters

- `obj`: The object being mutated.

<a id="Discussion"></a>

## Discussion

The compiler inserts this function when it detects that an object is mutated during a foreach iteration. The function is called when a mutation occurs, and the enumeration mutation handler is enacted if it is set up (via the [objc_setEnumerationMutationHandler(\_:)](objc_setenumerationmutationhandler%28__%29.md) function). If the handler is not set up, a fatal error occurs.

## See Also

### Using Objective-C Language Features

- [objc_setEnumerationMutationHandler(\_:)](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md): Creates a pointer to a function that calls the specified block when the method is called.
- [imp_getBlock(\_:)](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md).
- [imp_removeBlock(\_:)](imp_removeblock%28__%29.md): Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock(\_:)](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.
- [objc_loadWeak(\_:)](objc_loadweak%28__%29.md): Loads the object referenced by a weak pointer and returns it.
- [objc_storeWeak(\_:\_:)](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.

# objc_enumerationMutation (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Inserted by the compiler when a mutation is detected during a foreach iteration.

## Declaration

```objectivec
extern void objc_enumerationMutation(id obj);
```

## Parameters

- `obj`: The object being mutated.

<a id="Discussion"></a>

## Discussion

The compiler inserts this function when it detects that an object is mutated during a foreach iteration. The function is called when a mutation occurs, and the enumeration mutation handler is enacted if it is set up (via the [objc_setEnumerationMutationHandler](objc_setenumerationmutationhandler%28__%29.md) function). If the handler is not set up, a fatal error occurs.

## See Also

### Using Objective-C Language Features

- [objc_setEnumerationMutationHandler](objc_setenumerationmutationhandler%28__%29.md): Sets the current mutation handler.
- [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md): Creates a pointer to a function that calls the specified block when the method is called.
- [imp_getBlock](imp_getblock%28__%29.md): Returns the block associated with an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md).
- [imp_removeBlock](imp_removeblock%28__%29.md): Disassociates a block from an `IMP` that was created using [imp_implementationWithBlock](imp_implementationwithblock%28__%29.md), and releases the copy of the block that was created.
- [objc_loadWeak](objc_loadweak%28__%29.md): Loads the object referenced by a weak pointer and returns it.
- [objc_storeWeak](objc_storeweak%28____%29.md): Stores a new value in a `__weak` variable.
