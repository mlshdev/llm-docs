> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/managedaudiochannellayout/init(channeldescriptions:)

# init(channelDescriptions:)

**Framework:** Core Audio  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a new `ManagedAudioChannelLayout` from an array of `AudioChannelDescription`.

## Declaration

```swift
init(channelDescriptions: [AudioChannelDescription])
```

## Parameters

- `channelDescriptions`: An array of `AudioChannelDescription` that are set on this `ManagedAudioChannelLayout`.
