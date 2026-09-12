> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avreadonlyaudiopcmbuffer/init(format:framecapacity:initializingwith:)](https://developer.apple.com/documentation/avfaudio/avreadonlyaudiopcmbuffer/init(format:framecapacity:initializingwith:))

# init(format:frameCapacity:initializingWith:)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a read-only buffer by allocating and initializing audio data via closure.

## Declaration

```swift
init(format: AVAudioFormat, frameCapacity: Int, initializingWith: (UnsafeMutablePointer<AudioBufferList>) throws -> Void) throws
```

## Parameters

- `format`: The audio format for the buffer.
- `frameCapacity`: The capacity in audio frames.
- `initializingWith`: Closure that receives the mutable AudioBufferList to initialize.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if allocation fails or the closure throws.

## See Also

### Creating a read-only buffer

- [init(copying:)](init%28copying_%29.md): Creates a read-only buffer by copying audio data from an existing PCM buffer.
- [init(unsafeRetaining:)](init%28unsaferetaining_%29.md): Creates a read-only buffer by retaining the existing PCM buffer without copying.
