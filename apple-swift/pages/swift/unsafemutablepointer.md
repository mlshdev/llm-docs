> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer](https://developer.apple.com/documentation/swift/unsafemutablepointer)

# UnsafeMutablePointer

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pointer for accessing and manipulating data of a specific type.

## Declaration

```swift
@frozen struct UnsafeMutablePointer<Pointee> where Pointee : ~Copyable
```

## Mentioned In

- [Using Imported C Functions in Swift](using-imported-c-functions-in-swift.md)

<a id="overview"></a>

## Overview

You use instances of the `UnsafeMutablePointer` type to access data of a specific type in memory. The type of data that a pointer can access is the pointer’s `Pointee` type. `UnsafeMutablePointer` provides no automated memory management or alignment guarantees. You are responsible for handling the life cycle of any memory you work with through unsafe pointers to avoid leaks or undefined behavior.

Memory that you manually manage can be either *untyped* or *bound* to a specific type. You use the `UnsafeMutablePointer` type to access and manage memory that has been bound to a specific type.

<a id="Understanding-a-Pointers-Memory-State"></a>

## Understanding a Pointer’s Memory State

The memory referenced by an `UnsafeMutablePointer` instance can be in one of several states. Many pointer operations must only be applied to pointers with memory in a specific state—you must keep track of the state of the memory you are working with and understand the changes to that state that different operations perform. Memory can be untyped and uninitialized, bound to a type and uninitialized, or bound to a type and initialized to a value. Finally, memory that was allocated previously may have been deallocated, leaving existing pointers referencing unallocated memory.

<a id="Uninitialized-Memory"></a>

## Uninitialized Memory

Memory that has just been allocated through a typed pointer or has been deinitialized is in an *uninitialized* state. Uninitialized memory must be initialized before it can be accessed for reading.

You can use methods like `initialize(repeating:count:)`, `initialize(from:count:)`, and `moveInitialize(from:count:)` to initialize the memory referenced by a pointer with a value or series of values.

<a id="Initialized-Memory"></a>

## Initialized Memory

*Initialized* memory has a value that can be read using a pointer’s `pointee` property or through subscript notation. In the following example, `ptr` is a pointer to memory initialized with a value of `23`:

```swift
let ptr: UnsafeMutablePointer<Int> = ...
// ptr.pointee == 23
// ptr[0] == 23
```

<a id="Accessing-a-Pointers-Memory-as-a-Different-Type"></a>

## Accessing a Pointer’s Memory as a Different Type

When you access memory through an `UnsafeMutablePointer` instance, the `Pointee` type must be consistent with the bound type of the memory. If you do need to access memory that is bound to one type as a different type, Swift’s pointer types provide type-safe ways to temporarily or permanently change the bound type of the memory, or to load typed instances directly from raw memory.

An `UnsafeMutablePointer<UInt8>` instance allocated with eight bytes of memory, `uint8Pointer`, will be used for the examples below.

```swift
var bytes: [UInt8] = [39, 77, 111, 111, 102, 33, 39, 0]
let uint8Pointer = UnsafeMutablePointer<UInt8>.allocate(capacity: 8)
uint8Pointer.initialize(from: &bytes, count: 8)
```

When you only need to temporarily access a pointer’s memory as a different type, use the `withMemoryRebound(to:capacity:)` method. For example, you can use this method to call an API that expects a pointer to a different type that is layout compatible with your pointer’s `Pointee`. The following code temporarily rebinds the memory that `uint8Pointer` references from `UInt8` to `Int8` to call the imported C `strlen` function.

```swift
// Imported from C
func strlen(_ __s: UnsafePointer<Int8>!) -> UInt

let length = uint8Pointer.withMemoryRebound(to: Int8.self, capacity: 8) {
    return strlen($0)
}
// length == 7
```

When you need to permanently rebind memory to a different type, first obtain a raw pointer to the memory and then call the `bindMemory(to:capacity:)` method on the raw pointer. The following example binds the memory referenced by `uint8Pointer` to one instance of the `UInt64` type:

```swift
let uint64Pointer = UnsafeMutableRawPointer(uint8Pointer)
                          .bindMemory(to: UInt64.self, capacity: 1)
```

After rebinding the memory referenced by `uint8Pointer` to `UInt64`, accessing that pointer’s referenced memory as a `UInt8` instance is undefined.

```swift
var fullInteger = uint64Pointer.pointee          // OK
var firstByte = uint8Pointer.pointee             // undefined
```

Alternatively, you can access the same memory as a different type without rebinding through untyped memory access, so long as the bound type and the destination type are trivial types. Convert your pointer to an `UnsafeMutableRawPointer` instance and then use the raw pointer’s `load(fromByteOffset:as:)` and `storeBytes(of:toByteOffset:as:)` methods to read and write values.

```swift
let rawPointer = UnsafeMutableRawPointer(uint64Pointer)
let fullInteger = rawPointer.load(as: UInt64.self)   // OK
let firstByte = rawPointer.load(as: UInt8.self)      // OK
```

<a id="Performing-Typed-Pointer-Arithmetic"></a>

## Performing Typed Pointer Arithmetic

Pointer arithmetic with a typed pointer is counted in strides of the pointer’s `Pointee` type. When you add to or subtract from an `UnsafeMutablePointer` instance, the result is a new pointer of the same type, offset by that number of instances of the `Pointee` type.

```swift
// 'intPointer' points to memory initialized with [10, 20, 30, 40]
let intPointer: UnsafeMutablePointer<Int> = ...

// Load the first value in memory
let x = intPointer.pointee
// x == 10

// Load the third value in memory
let offsetPointer = intPointer + 2
let y = offsetPointer.pointee
// y == 30
```

You can also use subscript notation to access the value in memory at a specific offset.

```swift
let z = intPointer[2]
// z == 30
```

<a id="Implicit-Casting-and-Bridging"></a>

## Implicit Casting and Bridging

When calling a function or method with an `UnsafeMutablePointer` parameter, you can pass an instance of that specific pointer type or use Swift’s implicit bridging to pass a compatible pointer.

For example, the `printInt(atAddress:)` function in the following code sample expects an `UnsafeMutablePointer<Int>` instance as its first parameter:

```swift
func printInt(atAddress p: UnsafeMutablePointer<Int>) {
    print(p.pointee)
}
```

As is typical in Swift, you can call the `printInt(atAddress:)` function with an `UnsafeMutablePointer` instance. This example passes `intPointer`, a mutable pointer to an `Int` value, to `print(address:)`.

```swift
printInt(atAddress: intPointer)
// Prints "42"
```

Alternatively, you can use Swift’s *implicit bridging* to pass a pointer to an instance or to the elements of an array. The following example passes a pointer to the `value` variable by using inout syntax:

```swift
var value: Int = 23
printInt(atAddress: &value)
// Prints "23"
```

A mutable pointer to the elements of an array is implicitly created when you pass the array using inout syntax. This example uses implicit bridging to pass a pointer to the elements of `numbers` when calling `printInt(atAddress:)`.

```swift
var numbers = [5, 10, 15, 20]
printInt(atAddress: &numbers)
// Prints "5"
```

No matter which way you call `printInt(atAddress:)`, Swift’s type safety guarantees that you can only pass a pointer to the type required by the function—in this case, a pointer to an `Int`.

> **Important**

> The pointer created through implicit bridging of an instance or of an array’s elements is only valid during the execution of the called function. Escaping the pointer to use after the execution of the function is undefined behavior. In particular, do not use implicit bridging when calling an `UnsafeMutablePointer` initializer.
>
> ```swift
> var number = 5
> let numberPointer = UnsafeMutablePointer<Int>(&number)
> // Accessing 'numberPointer' is undefined behavior.
> ```

## Topics

### Initializers

- [init(\_:)](unsafemutablepointer/init%28__%29-38kdq.md): Creates a mutable typed pointer referencing the same memory as the given mutable pointer.
- [init(\_:)](unsafemutablepointer/init%28__%29-7msdk.md): Creates a mutable typed pointer referencing the same memory as the given mutable pointer.
- [init(mutating:)](unsafemutablepointer/init%28mutating_%29-23779.md): Creates a mutable typed pointer referencing the same memory as the given immutable pointer.
- [init(mutating:)](unsafemutablepointer/init%28mutating_%29-9gvv3.md): Creates a mutable typed pointer referencing the same memory as the given immutable pointer.

### Instance Properties

- [customPlaygroundQuickLook](unsafemutablepointer/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for this instance.
- [pointee](unsafemutablepointer/pointee.md): Reads or updates the instance referenced by this pointer.

### Instance Methods

- [assign(from:count:)](unsafemutablepointer/assign%28from_count_%29.md): Deprecated.
- [assign(repeating:count:)](unsafemutablepointer/assign%28repeating_count_%29.md): Deprecated.
- [deallocate()](unsafemutablepointer/deallocate%28%29.md): Deallocates the memory block previously allocated at this pointer.
- [deallocate(capacity:)](unsafemutablepointer/deallocate%28capacity_%29.md)
- [deinitialize()](unsafemutablepointer/deinitialize%28%29.md)
- [deinitialize(count:)](unsafemutablepointer/deinitialize%28count_%29.md): Deinitializes the specified number of values starting at this pointer.
- [initialize(from:)](unsafemutablepointer/initialize%28from_%29.md): Initializes memory starting at this pointer’s address with the elements of the given collection.
- [initialize(from:count:)](unsafemutablepointer/initialize%28from_count_%29.md): Initializes the memory referenced by this pointer with the values starting at the given pointer.
- [initialize(repeating:count:)](unsafemutablepointer/initialize%28repeating_count_%29.md): Initializes this pointer’s memory with the specified number of consecutive copies of the given value.
- [initialize(to:)](unsafemutablepointer/initialize%28to_%29.md): Initializes this pointer’s memory with a single instance of the given value.
- [initialize(to:count:)](unsafemutablepointer/initialize%28to_count_%29.md)
- [move()](unsafemutablepointer/move%28%29.md): Retrieves and returns the referenced instance, returning the pointer’s memory to an uninitialized state.
- [moveAssign(from:count:)](unsafemutablepointer/moveassign%28from_count_%29.md): Deprecated.
- [moveInitialize(from:count:)](unsafemutablepointer/moveinitialize%28from_count_%29.md): Moves instances from initialized source memory into the uninitialized memory referenced by this pointer, leaving the source memory uninitialized and the memory referenced by this pointer initialized.
- [moveUpdate(from:count:)](unsafemutablepointer/moveupdate%28from_count_%29.md): Update this pointer’s initialized memory by moving the specified number of instances the source pointer’s memory, leaving the source memory uninitialized.
- [pointer(to:)](unsafemutablepointer/pointer%28to_%29-8cyek.md): Obtain a pointer to the stored property referred to by a key path.
- [pointer(to:)](unsafemutablepointer/pointer%28to_%29-8veyb.md): Obtain a mutable pointer to the stored property referred to by a key path.
- [update(from:count:)](unsafemutablepointer/update%28from_count_%29.md): Update this pointer’s initialized memory with the specified number of instances, copied from the given pointer’s memory.
- [update(repeating:count:)](unsafemutablepointer/update%28repeating_count_%29.md): Update this pointer’s initialized memory with the specified number of consecutive copies of the given value.
- [withMemoryRebound(to:capacity:\_:)](unsafemutablepointer/withmemoryrebound%28to_capacity___%29.md): Executes the given closure while temporarily binding memory to the specified number of instances of the given type.

### Subscripts

- [subscript(\_:)](unsafemutablepointer/subscript%28__%29.md): Reads or updates the pointee at the specified offset from this pointer.

### Type Aliases

- [UnsafeMutablePointer.Distance](unsafemutablepointer/distance.md): A type that represents the distance between two pointers.

### Type Methods

- [allocate(capacity:)](unsafemutablepointer/allocate%28capacity_%29.md): Allocates uninitialized memory for the specified number of instances of type `Pointee`.

### Default Implementations

- [AtomicOptionalRepresentable Implementations](unsafemutablepointer/atomicoptionalrepresentable-implementations.md)
- [AtomicRepresentable Implementations](unsafemutablepointer/atomicrepresentable-implementations.md)
- [Comparable Implementations](unsafemutablepointer/comparable-implementations.md)
- [CustomReflectable Implementations](unsafemutablepointer/customreflectable-implementations.md)
- [Equatable Implementations](unsafemutablepointer/equatable-implementations.md)
- [Hashable Implementations](unsafemutablepointer/hashable-implementations.md)
- [Strideable Implementations](unsafemutablepointer/strideable-implementations.md)

## Relationships

### Conforms To

- [AtomicOptionalRepresentable](../synchronization/atomicoptionalrepresentable.md)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [CVarArg](cvararg.md)
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

### Typed Pointers

- [UnsafePointer](unsafepointer.md): A pointer for accessing data of a specific type.
- [UnsafeBufferPointer](unsafebufferpointer.md): A nonowning collection interface to a buffer of elements stored contiguously in memory.
- [UnsafeMutableBufferPointer](unsafemutablebufferpointer.md): A nonowning collection interface to a buffer of mutable elements stored contiguously in memory.
