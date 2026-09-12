> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/managedaudiochannellayout/init(maximumdescriptions:)](https://developer.apple.com/documentation/coreaudio/managedaudiochannellayout/init(maximumdescriptions:))

# init(maximumDescriptions:)

**Framework:** Core Audio  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a new `ManagedAudioChannelLayout` that can hold up to `maximumDescriptions`.

## Declaration

```swift
init(maximumDescriptions: Int)
```

## Parameters

- `maximumDescriptions`: The maximum number of `AudioChannelDescription` this `ManagedAudioChannelLayout` can hold. This must be greater than `0`.

<a id="discussion"></a>

## Discussion

Use `ManagedAudioChannelLayout(tag:)` if no `AudioChannelDescription` are needed.
