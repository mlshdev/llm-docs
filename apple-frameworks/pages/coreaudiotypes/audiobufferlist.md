> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiobufferlist](https://developer.apple.com/documentation/coreaudiotypes/audiobufferlist)

# AudioBufferList (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that stores a variable-length array of audio buffers.

## Declaration

```swift
struct AudioBufferList
```

## Topics

### Creating a Buffer List

- [init()](audiobufferlist/init%28%29.md): Creates an empty audio buffer list.
- [init(mNumberBuffers:mBuffers:)](audiobufferlist/init%28mnumberbuffers_mbuffers_%29.md): Creates an audio buffer list with audio buffers.

### Accessing the Data

- [mNumberBuffers](audiobufferlist/mnumberbuffers.md): The number of audio buffers in the list.
- [mBuffers](audiobufferlist/mbuffers.md): A variable-length array of audio buffers.

### Type Methods

- [allocate(maximumBuffers:)](audiobufferlist/allocate%28maximumbuffers_%29.md): Allocate an `AudioBufferList` with a capacity for the specified number of `AudioBuffer`s.
- [sizeInBytes(maximumBuffers:)](audiobufferlist/sizeinbytes%28maximumbuffers_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Buffers

- [AudioBuffer](audiobuffer.md): A structure that holds a buffer of audio data.

# AudioBufferList (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that stores a variable-length array of audio buffers.

## Declaration

```objectivec
struct AudioBufferList;
```

## Topics

### Accessing the Data

- [mNumberBuffers](audiobufferlist/mnumberbuffers.md): The number of audio buffers in the list.
- [mBuffers](audiobufferlist/mbuffers.md): A variable-length array of audio buffers.

## See Also

### Buffers

- [AudioBuffer](audiobuffer.md): A structure that holds a buffer of audio data.
