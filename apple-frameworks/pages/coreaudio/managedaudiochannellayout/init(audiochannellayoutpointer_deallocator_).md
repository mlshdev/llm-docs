> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/managedaudiochannellayout/init(audiochannellayoutpointer:deallocator:)](https://developer.apple.com/documentation/coreaudio/managedaudiochannellayout/init(audiochannellayoutpointer:deallocator:))

# init(audioChannelLayoutPointer:deallocator:)

**Framework:** Core Audio  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a new `ManagedAudioChannelLayout` from an existing pointer to an `AudioChannelLayout`.

## Declaration

```swift
init(audioChannelLayoutPointer: AudioChannelLayout.UnsafePointer, deallocator: @escaping (AudioChannelLayout.UnsafePointer) -> Void)
```

## Parameters

- `audioChannelLayoutPointer`: A pointer to an existing `AudioChanneLayout`.
- `deallocator`: A closure that will be called when `audioChannelLayoutPointer` is no longer used.

<a id="discussion"></a>

## Discussion

Any mutation on the new `ManagedAudioChannelLayout` will perform a copy of the `audioChannelLayoutPointer` values.
