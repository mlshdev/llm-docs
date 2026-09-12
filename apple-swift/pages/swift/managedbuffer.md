> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbuffer](https://developer.apple.com/documentation/swift/managedbuffer)

# ManagedBuffer

**Framework:** Swift  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A class whose instances contain a property of type `Header` and raw storage for an array of `Element`, whose size is determined at instance creation.

## Declaration

```swift
class ManagedBuffer<Header, Element> where Element : ~Copyable
```

<a id="overview"></a>

## Overview

Note that the `Element` array is suitably-aligned **raw memory**. You are expected to construct and—if necessary—destroy objects there yourself, using the APIs on `UnsafeMutablePointer<Element>`. Typical usage stores a count and capacity in `Header` and destroys any live elements in the `deinit` of a subclass.

> **Note**

> Subclasses must not have any stored properties; any storage needed should be included in `Header`.

## Topics

### Instance Properties

- [capacity](managedbuffer/capacity.md): The actual number of elements that can be stored in this object.
- [header](managedbuffer/header.md): The stored `Header` instance.

### Instance Methods

- [withUnsafeMutablePointerToElements(\_:)](managedbuffer/withunsafemutablepointertoelements%28__%29.md): Call `body` with an `UnsafeMutablePointer` to the `Element` storage.
- [withUnsafeMutablePointerToHeader(\_:)](managedbuffer/withunsafemutablepointertoheader%28__%29.md): Call `body` with an `UnsafeMutablePointer` to the stored `Header`.
- [withUnsafeMutablePointers(\_:)](managedbuffer/withunsafemutablepointers%28__%29.md): Call `body` with `UnsafeMutablePointer`s to the stored `Header` and raw `Element` storage.

### Type Methods

- [create(minimumCapacity:makingHeaderWith:)](managedbuffer/create%28minimumcapacity_makingheaderwith_%29.md): Create a new instance of the most-derived class, calling `factory` on the partially-constructed object to generate an initial `Header`.

## See Also

### Buffer Implementation

- [ManagedBufferPointer](managedbufferpointer.md): Contains a buffer object, and provides access to an instance of `Header` and contiguous storage for an arbitrary number of `Element` instances stored in that buffer.
