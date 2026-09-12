> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectionoption/init(displayname:identifier:language:mediacharacteristics:)](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectionoption/init(displayname:identifier:language:mediacharacteristics:))

# init(displayName:identifier:language:mediaCharacteristics:)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a new media selection option.

## Declaration

```swift
convenience init(displayName: String, identifier: String, language: Locale.Language? = nil, mediaCharacteristics: [AVMediaCharacteristic] = [])
```

## Parameters

- `displayName`: Human-readable name displayed in user interfaces.
- `identifier`: Unique system identifier for programmatic selection.
- `language`: The language of the media selection option, or `nil` for language-neutral content.
- `mediaCharacteristics`: The media characteristics describing accessibility features and content properties of this option.
