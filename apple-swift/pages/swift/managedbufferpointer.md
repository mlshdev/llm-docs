> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbufferpointer](https://developer.apple.com/documentation/swift/managedbufferpointer)

# ManagedBufferPointer

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Contains a buffer object, and provides access to an instance of `Header` and contiguous storage for an arbitrary number of `Element` instances stored in that buffer.

## Declaration

```swift
@frozen struct ManagedBufferPointer<Header, Element> where Element : ~Copyable
```

<a id="overview"></a>

## Overview

For most purposes, the `ManagedBuffer` class can be used on its own. However, in cases where objects of various different classes must serve as storage, you need to also use `ManagedBufferPointer`.

A valid buffer class is non-`@objc`, with no declared stored properties.  Its `deinit` must destroy its stored `Header` and any constructed `Element`s.

<a id="Example-Buffer-Class"></a>

## Example Buffer Class

```swift
 class MyBuffer<Element> { // non-@objc
   typealias Manager = ManagedBufferPointer<(Int, String), Element>
   deinit {
     Manager(unsafeBufferObject: self).withUnsafeMutablePointers {
       (pointerToHeader, pointerToElements) -> Void in
       pointerToElements.deinitialize(count: self.count)
       pointerToHeader.deinitialize(count: 1)
     }
   }

   // All properties are *computed* based on members of the Header
   var count: Int {
     return Manager(unsafeBufferObject: self).header.0
   }
   var name: String {
     return Manager(unsafeBufferObject: self).header.1
   }
 }
```

## Topics

### Creating a Buffer

- [init(bufferClass:minimumCapacity:makingHeaderWith:)](managedbufferpointer/init%28bufferclass_minimumcapacity_makingheaderwith_%29.md): Create with new storage containing an initial `Header` and space for at least `minimumCapacity` `element`s.
- [init(unsafeBufferObject:)](managedbufferpointer/init%28unsafebufferobject_%29.md): Manage the given `buffer`.

### Inspecting a Buffer

- [capacity](managedbufferpointer/capacity.md): The actual number of elements that can be stored in this object.
- [header](managedbufferpointer/header.md): The stored `Header` instance.
- [buffer](managedbufferpointer/buffer.md): Returns the object instance being used for storage.
- [isUniqueReference()](managedbufferpointer/isuniquereference%28%29.md): Returns `true` if `self` holds the only strong reference to its buffer; otherwise, returns `false`.

### Accessing Buffer Contents

- [withUnsafeMutablePointerToElements(\_:)](managedbufferpointer/withunsafemutablepointertoelements%28__%29.md): Call `body` with an `UnsafeMutablePointer` to the `Element` storage.
- [withUnsafeMutablePointerToHeader(\_:)](managedbufferpointer/withunsafemutablepointertoheader%28__%29.md): Call `body` with an `UnsafeMutablePointer` to the stored `Header`.
- [withUnsafeMutablePointers(\_:)](managedbufferpointer/withunsafemutablepointers%28__%29.md): Call `body` with `UnsafeMutablePointer`s to the stored `Header` and raw `Element` storage.

### Comparing Buffers

- [!=(\_:\_:)](managedbufferpointer/!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.

### Default Implementations

- [Equatable Implementations](managedbufferpointer/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](equatable.md)

## See Also

### Buffer Implementation

- [ManagedBuffer](managedbuffer.md): A class whose instances contain a property of type `Header` and raw storage for an array of `Element`, whose size is determined at instance creation.
