> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avreadonlyaudiopcmbuffer/init(copying:)](https://developer.apple.com/documentation/avfaudio/avreadonlyaudiopcmbuffer/init(copying:))

# init(copying:)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a read-only buffer by copying audio data from an existing PCM buffer.

## Declaration

```swift
init(copying buffer: AVAudioPCMBuffer)
```

## Parameters

- `buffer`: The source PCM buffer to copy from.

<a id="discussion"></a>

## Discussion

This initializer creates a new `AVAudioPCMBuffer` and copies all audio data, ensuring the original buffer can continue to be used safely.

## See Also

### Creating a read-only buffer

- [init(format:frameCapacity:initializingWith:)](init%28format_framecapacity_initializingwith_%29.md): Creates a read-only buffer by allocating and initializing audio data via closure.
- [init(unsafeRetaining:)](init%28unsaferetaining_%29.md): Creates a read-only buffer by retaining the existing PCM buffer without copying.
