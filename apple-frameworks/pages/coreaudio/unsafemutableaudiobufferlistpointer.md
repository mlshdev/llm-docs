> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/unsafemutableaudiobufferlistpointer](https://developer.apple.com/documentation/coreaudio/unsafemutableaudiobufferlistpointer)

# UnsafeMutableAudioBufferListPointer

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A wrapper for a pointer to an `AudioBufferList`.

## Declaration

```swift
struct UnsafeMutableAudioBufferListPointer
```

<a id="overview"></a>

## Overview

Like `UnsafeMutablePointer`, this type provides no automated memory management and the user must therefore take care to allocate and free memory appropriately.

## Topics

### Initializers

- [init(\_:)](unsafemutableaudiobufferlistpointer/init%28__%29-4a7c5.md): Construct from an `AudioBufferList` pointer.
- [init(\_:)](unsafemutableaudiobufferlistpointer/init%28__%29-6qwfh.md): Construct from an `AudioBufferList` pointer.

### Instance Properties

- [count](unsafemutableaudiobufferlistpointer/count.md): The number of `AudioBuffer`s in the `AudioBufferList` (`mNumberBuffers`).
- [unsafeMutablePointer](unsafemutableaudiobufferlistpointer/unsafemutablepointer.md): The pointer to the wrapped `AudioBufferList`.
- [unsafePointer](unsafemutableaudiobufferlistpointer/unsafepointer.md): The pointer to the wrapped `AudioBufferList`.

### Default Implementations

- [MutableCollection Implementations](unsafemutableaudiobufferlistpointer/mutablecollection-implementations.md)
- [RandomAccessCollection Implementations](unsafemutableaudiobufferlistpointer/randomaccesscollection-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Structures

- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
