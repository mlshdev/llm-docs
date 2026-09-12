> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession/init(audioprovider:)](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/init(audioprovider:))

# init(audioProvider:)

**Framework:** Music Understanding  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a music understanding session that accepts streaming audio buffers.

## Declaration

```swift
convenience init<Provider>(audioProvider: Provider) where Provider : AsyncSequence, Provider.Element == AVReadOnlyAudioPCMBuffer, Provider.Failure == Never
```

## Parameters

- `audioProvider`: A non-throwing async sequence of audio buffers. The sequence must have `Failure == Never`, meaning callers are responsible for handling any errors in their audio pipeline before passing buffers to the session.

## See Also

### Creating a session

- [init(asset:)](init%28asset_%29.md): Creates a music understanding session from an audio asset.
