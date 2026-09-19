> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scstreamframeinfo/init(rawvalue:)

# init(rawValue:)

**Framework:** ScreenCaptureKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Creates a new instance with a raw value.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The raw value to use for the new instance.

<a id="discussion"></a>

## Discussion

> **Important**

>  Use the static properties of [SCStreamFrameInfo](../scstreamframeinfo.md) such as [status](status.md) or [contentRect](contentrect.md) instead of creating an instance with this initializer.
