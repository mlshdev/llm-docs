> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawpointer](https://developer.apple.com/documentation/swift/unsafemutablerawpointer)

# UnsafeMutableRawPointer

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A raw pointer for accessing and manipulating untyped data.

## Declaration

```swift
@frozen struct UnsafeMutableRawPointer
```

## Mentioned In

- [Using Imported C Functions in Swift](using-imported-c-functions-in-swift.md)

<a id="overview"></a>

## Overview

The `UnsafeMutableRawPointer` type provides no automated memory management, no type safety, and no alignment guarantees. You are responsible for handling the life cycle of any memory you work with through unsafe pointers, to avoid leaks or undefined behavior.

Memory that you manually manage can be either *untyped* or *bound* to a specific type. You use the `UnsafeMutableRawPointer` type to access and manage raw bytes in memory, whether or not that memory has been bound to a specific type.

<a id="Understanding-a-Pointers-Memory-State"></a>

## Understanding a Pointer’s Memory State

The memory referenced by an `UnsafeMutableRawPointer` instance can be in one of several states. Many pointer operations must only be applied to pointers with memory in a specific state—you must keep track of the state of the memory you are working with and understand the changes to that state that different operations perform. Memory can be untyped and uninitialized, bound to a type and uninitialized, or bound to a type and initialized to a value. Finally, memory that was allocated previously may have been deallocated, leaving existing pointers referencing unallocated memory.

<a id="Raw-Uninitialized-Memory"></a>

## Raw, Uninitialized Memory

Raw memory that has just been allocated is in an *uninitialized, untyped* state. Uninitialized memory must be initialized with values of a type before it can be used with any typed operations.

You can use methods like `initializeMemory(as:from:)` and `moveInitializeMemory(as:from:count:)` to bind raw memory to a type and initialize it with a value or series of values. To bind uninitialized memory to a type without initializing it, use the `bindMemory(to:count:)` method. These methods all return typed pointers for further typed access to the memory.

<a id="Typed-Memory"></a>

## Typed Memory

Memory that has been bound to a type, whether it is initialized or uninitialized, is typically accessed using typed pointers—instances of `UnsafePointer` and `UnsafeMutablePointer`. Initialization, assignment, and deinitialization can be performed using `UnsafeMutablePointer` methods.

Memory that has been bound to a type can be rebound to a different type only after it has been deinitialized or if the bound type is a *trivial type*. Deinitializing typed memory does not unbind that memory’s type. The deinitialized memory can be reinitialized with values of the same type, bound to a new type, or deallocated.

> **Note**

> A trivial type can be copied bit for bit with no indirection or reference-counting operations. Generally, native Swift types that do not contain strong or weak references or other forms of indirection are trivial, as are imported C structs and enumerations.

When reading from or writing to  memory as raw bytes when that memory is bound to a type, you must ensure that you satisfy any alignment requirements. Writing to typed memory as raw bytes must only be performed when the bound type is a trivial type.

<a id="Raw-Pointer-Arithmetic"></a>

## Raw Pointer Arithmetic

Pointer arithmetic with raw pointers is performed at the byte level. When you add to or subtract from a raw pointer, the result is a new raw pointer offset by that number of bytes. The following example allocates four bytes of memory and stores `0xFF` in all four bytes:

```swift
let bytesPointer = UnsafeMutableRawPointer.allocate(byteCount: 4, alignment: 1)
bytesPointer.storeBytes(of: 0xFFFF_FFFF, as: UInt32.self)

// Load a value from the memory referenced by 'bytesPointer'
let x = bytesPointer.load(as: UInt8.self)       // 255

// Load a value from the last two allocated bytes
let offsetPointer = bytesPointer + 2
let y = offsetPointer.load(as: UInt16.self)     // 65535
```

The code above stores the value `0xFFFF_FFFF` into the four newly allocated bytes, and then loads the first byte as a `UInt8` instance and the third and fourth bytes as a `UInt16` instance.

Always remember to deallocate any memory that you allocate yourself.

```swift
bytesPointer.deallocate()
```

<a id="Implicit-Casting-and-Bridging"></a>

## Implicit Casting and Bridging

When calling a function or method with an `UnsafeMutableRawPointer` parameter, you can pass an instance of that specific pointer type, pass an instance of a compatible pointer type, or use Swift’s implicit bridging to pass a compatible pointer.

For example, the `print(address:as:)` function in the following code sample takes an `UnsafeMutableRawPointer` instance as its first parameter:

```swift
func print<T>(address p: UnsafeMutableRawPointer, as type: T.Type) {
    let value = p.load(as: type)
    print(value)
}
```

As is typical in Swift, you can call the `print(address:as:)` function with an `UnsafeMutableRawPointer` instance. This example passes `rawPointer` as the initial parameter.

```swift
// 'rawPointer' points to memory initialized with `Int` values.
let rawPointer: UnsafeMutableRawPointer = ...
print(address: rawPointer, as: Int.self)
// Prints "42"
```

Because typed pointers can be implicitly cast to raw pointers when passed as a parameter, you can also call `print(address:as:)` with any mutable typed pointer instance.

```swift
let intPointer: UnsafeMutablePointer<Int> = ...
print(address: intPointer, as: Int.self)
// Prints "42"
```

Alternatively, you can use Swift’s *implicit bridging* to pass a pointer to an instance or to the elements of an array. Use inout syntax to implicitly create a pointer to an instance of any type. The following example uses implicit bridging to pass a pointer to `value` when calling `print(address:as:)`:

```swift
var value: Int = 23
print(address: &value, as: Int.self)
// Prints "23"
```

A mutable pointer to the elements of an array is implicitly created when you pass the array using inout syntax. This example uses implicit bridging to pass a pointer to the elements of `numbers` when calling `print(address:as:)`.

```swift
var numbers = [5, 10, 15, 20]
print(address: &numbers, as: Int.self)
// Prints "5"
```

> **Important**

> The pointer created through implicit bridging of an instance or of an array’s elements is only valid during the execution of the called function. Escaping the pointer to use after the execution of the function is undefined behavior. In particular, do not use implicit bridging when calling an `UnsafeMutableRawPointer` initializer.
>
> ```swift
> var number = 5
> let numberPointer = UnsafeMutableRawPointer(&number)
> // Accessing 'numberPointer' is undefined behavior.
> ```

## Topics

### Initializers

- [init(\_:)](unsafemutablerawpointer/init%28__%29-4sdp3.md): Creates a new raw pointer from an `AutoreleasingUnsafeMutablePointer` instance.
- [init(\_:)](unsafemutablerawpointer/init%28__%29-5r9za.md): Creates a new raw pointer from the given typed pointer.
- [init(\_:)](unsafemutablerawpointer/init%28__%29-7oubm.md): Creates a new raw pointer from the given typed pointer.
- [init(\_:)](unsafemutablerawpointer/init%28__%29-7xubw.md): Creates a new raw pointer from an `AutoreleasingUnsafeMutablePointer` instance.
- [init(mutating:)](unsafemutablerawpointer/init%28mutating_%29-3ws4f.md): Creates a new mutable raw pointer from the given immutable raw pointer.
- [init(mutating:)](unsafemutablerawpointer/init%28mutating_%29-7kfot.md): Creates a new mutable raw pointer from the given immutable raw pointer.

### Instance Properties

- [customPlaygroundQuickLook](unsafemutablerawpointer/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for this instance.
- [hashValue](unsafemutablerawpointer/hashvalue.md): The hash value.

### Instance Methods

- [alignedDown(for:)](unsafemutablerawpointer/aligneddown%28for_%29.md): Obtain the preceding pointer properly aligned to store a value of type `T`.
- [alignedDown(toMultipleOf:)](unsafemutablerawpointer/aligneddown%28tomultipleof_%29.md): Obtain the preceding pointer whose bit pattern is a multiple of `alignment`.
- [alignedUp(for:)](unsafemutablerawpointer/alignedup%28for_%29.md): Obtain the next pointer properly aligned to store a value of type `T`.
- [alignedUp(toMultipleOf:)](unsafemutablerawpointer/alignedup%28tomultipleof_%29.md): Obtain the next pointer whose bit pattern is a multiple of `alignment`.
- [assumingMemoryBound(to:)](unsafemutablerawpointer/assumingmemorybound%28to_%29.md): Returns a typed pointer to the memory referenced by this pointer, assuming that the memory is already bound to the specified type.
- [bindMemory(to:capacity:)](unsafemutablerawpointer/bindmemory%28to_capacity_%29.md): Binds the memory to the specified type and returns a typed pointer to the bound memory.
- [copyBytes(from:count:)](unsafemutablerawpointer/copybytes%28from_count_%29.md)
- [copyMemory(from:byteCount:)](unsafemutablerawpointer/copymemory%28from_bytecount_%29.md): Copies the specified number of bytes from the given raw pointer’s memory into this pointer’s memory.
- [deallocate()](unsafemutablerawpointer/deallocate%28%29.md): Deallocates the previously allocated memory block referenced by this pointer.
- [deallocate(bytes:alignedTo:)](unsafemutablerawpointer/deallocate%28bytes_alignedto_%29.md)
- [initializeMemory(as:at:count:to:)](unsafemutablerawpointer/initializememory%28as_at_count_to_%29.md)
- [initializeMemory(as:from:)](unsafemutablerawpointer/initializememory%28as_from_%29.md)
- [initializeMemory(as:from:count:)](unsafemutablerawpointer/initializememory%28as_from_count_%29.md): Initializes the memory referenced by this pointer with the values starting at the given pointer, binds the memory to the values’ type, and returns a typed pointer to the initialized memory.
- [initializeMemory(as:repeating:count:)](unsafemutablerawpointer/initializememory%28as_repeating_count_%29.md): Initializes the memory referenced by this pointer with the given value, binds the memory to the value’s type, and returns a typed pointer to the initialized memory.
- [initializeMemory(as:to:)](unsafemutablerawpointer/initializememory%28as_to_%29.md): Initializes the memory referenced by this pointer with the given value, binds the memory to the value’s type, and returns a typed pointer to the initialized memory.
- [load(fromByteOffset:as:)](unsafemutablerawpointer/load%28frombyteoffset_as_%29.md): Returns a new instance of the given type, constructed from the raw memory at the specified offset.
- [loadUnaligned(fromByteOffset:as:)](unsafemutablerawpointer/loadunaligned%28frombyteoffset_as_%29-3v1mk.md): Returns a new instance of the given type, constructed from the raw memory at the specified offset.
- [loadUnaligned(fromByteOffset:as:)](unsafemutablerawpointer/loadunaligned%28frombyteoffset_as_%29-4br03.md): Returns a new instance of the given type, constructed from the raw memory at the specified offset.
- [moveInitializeMemory(as:from:count:)](unsafemutablerawpointer/moveinitializememory%28as_from_count_%29.md): Initializes the memory referenced by this pointer with the values starting at the given pointer, binds the memory to the values’ type, deinitializes the source memory, and returns a typed pointer to the newly initialized memory.
- [storeBytes(of:toByteOffset:as:)](unsafemutablerawpointer/storebytes%28of_tobyteoffset_as_%29-9j7bo.md): Stores the given value’s bytes into raw memory at the specified offset.
- [storeBytes(of:toByteOffset:as:)](unsafemutablerawpointer/storebytes%28of_tobyteoffset_as_%29-9mpot.md): Stores the given value’s bytes into raw memory at the specified offset.
- [withMemoryRebound(to:capacity:\_:)](unsafemutablerawpointer/withmemoryrebound%28to_capacity___%29.md): Executes the given closure while temporarily binding memory to the specified number of instances of type `T`.

### Type Aliases

- [UnsafeMutableRawPointer.Pointee](unsafemutablerawpointer/pointee.md)

### Type Methods

- [allocate(byteCount:alignment:)](unsafemutablerawpointer/allocate%28bytecount_alignment_%29.md): Allocates uninitialized memory with the specified size and alignment.
- [allocate(bytes:alignedTo:)](unsafemutablerawpointer/allocate%28bytes_alignedto_%29.md)

### Default Implementations

- [AtomicOptionalRepresentable Implementations](unsafemutablerawpointer/atomicoptionalrepresentable-implementations.md)
- [AtomicRepresentable Implementations](unsafemutablerawpointer/atomicrepresentable-implementations.md)
- [Comparable Implementations](unsafemutablerawpointer/comparable-implementations.md)
- [CustomReflectable Implementations](unsafemutablerawpointer/customreflectable-implementations.md)
- [Equatable Implementations](unsafemutablerawpointer/equatable-implementations.md)
- [Hashable Implementations](unsafemutablerawpointer/hashable-implementations.md)
- [Strideable Implementations](unsafemutablerawpointer/strideable-implementations.md)

## Relationships

### Conforms To

- [AtomicOptionalRepresentable](../synchronization/atomicoptionalrepresentable.md)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [Comparable](comparable.md)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomReflectable](customreflectable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [Strideable](strideable.md)

## See Also

### Raw Pointers

- [UnsafeRawPointer](unsaferawpointer.md): A raw pointer for accessing untyped data.
- [UnsafeRawBufferPointer](unsaferawbufferpointer.md): A nonowning collection interface to the bytes in a region of memory.
- [UnsafeMutableRawBufferPointer](unsafemutablerawbufferpointer.md): A mutable nonowning collection interface to the bytes in a region of memory.
