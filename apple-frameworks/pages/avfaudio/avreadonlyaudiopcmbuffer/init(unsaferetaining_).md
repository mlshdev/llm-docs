> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avreadonlyaudiopcmbuffer/init(unsaferetaining:)](https://developer.apple.com/documentation/avfaudio/avreadonlyaudiopcmbuffer/init(unsaferetaining:))

# init(unsafeRetaining:)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a read-only buffer by retaining the existing PCM buffer without copying.

## Declaration

```swift
init(unsafeRetaining buffer: sending AVAudioPCMBuffer)
```

## Parameters

- `buffer`: The PCM buffer to retain (not copied).

<a id="discussion"></a>

## Discussion

> **Warning**

> The caller must ensure the original buffer is not modified while this read-only buffer is in use. Violating this contract results in undefined behavior.

## See Also

### Creating a read-only buffer

- [init(copying:)](init%28copying_%29.md): Creates a read-only buffer by copying audio data from an existing PCM buffer.
- [init(format:frameCapacity:initializingWith:)](init%28format_framecapacity_initializingwith_%29.md): Creates a read-only buffer by allocating and initializing audio data via closure.
