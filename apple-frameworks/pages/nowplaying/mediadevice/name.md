> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediadevice/name](https://developer.apple.com/documentation/nowplaying/mediadevice/name)

# name

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The human-readable name of the device.

## Declaration

```swift
let name: String
```

<a id="discussion"></a>

## Discussion

The system displays this name in the Now Playing interface. Use a descriptive name that helps people identify the device.

The name must be non-empty and at most 250 characters. It must start with an alphanumeric character, end with an alphanumeric character or `.`, and otherwise contain only alphanumerics, whitespace, and the punctuation `' - , & # .`. Symbols outside this set — including emoji and SF Symbols — are not permitted.
