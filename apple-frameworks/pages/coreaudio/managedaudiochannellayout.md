> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/managedaudiochannellayout](https://developer.apple.com/documentation/coreaudio/managedaudiochannellayout)

# ManagedAudioChannelLayout

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

This structure is used to specify channel layouts in files and hardware.

## Declaration

```swift
struct ManagedAudioChannelLayout
```

## Topics

### Structures

- [ManagedAudioChannelLayout.ChannelDescriptions](managedaudiochannellayout/channeldescriptions-swift.struct.md): A collection of `AudioChannelDescription`s.

### Initializers

- [init(audioChannelLayoutPointer:deallocator:)](managedaudiochannellayout/init%28audiochannellayoutpointer_deallocator_%29.md): Creates a new `ManagedAudioChannelLayout` from an existing pointer to an `AudioChannelLayout`.
- [init(channelDescriptions:)](managedaudiochannellayout/init%28channeldescriptions_%29.md): Creates a new `ManagedAudioChannelLayout` from an array of `AudioChannelDescription`.
- [init(maximumDescriptions:)](managedaudiochannellayout/init%28maximumdescriptions_%29.md): Creates a new `ManagedAudioChannelLayout` that can hold up to `maximumDescriptions`.
- [init(tag:)](managedaudiochannellayout/init%28tag_%29.md): Creates a new `ManagedAudioChannelLayout` with a given tag.

### Instance Properties

- [bitmap](managedaudiochannellayout/bitmap.md): If `tag` is set to `kAudioChannelLayoutTag_UseChannelBitmap`, this is the channel usage bitmap.
- [channelDescriptions](managedaudiochannellayout/channeldescriptions-swift.property.md): The `AudioChannelDescription`s that describe the layout.
- [numberOfChannels](managedaudiochannellayout/numberofchannels.md): The number of channels described by this `ManagedAudioChannelLayout`.
- [sizeInBytes](managedaudiochannellayout/sizeinbytes.md): The size, in bytes, of the backing `AudioChannelLayout`.
- [tag](managedaudiochannellayout/tag.md): The `AudioChannelLayoutTag` that indicates the layout.

### Instance Methods

- [setAllToUnknown()](managedaudiochannellayout/setalltounknown%28%29.md): Sets all `AudioChannelDescriptions` to `kAudioChannelLabel_Unknown`.
- [withUnsafeMutablePointer(\_:)](managedaudiochannellayout/withunsafemutablepointer%28__%29.md): Calls a closure with a mutable pointer to the backing `AudioChannelLayout`.
- [withUnsafePointer(\_:)](managedaudiochannellayout/withunsafepointer%28__%29.md): Calls a closure with a pointer to the backing `AudioChannelLayout`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
