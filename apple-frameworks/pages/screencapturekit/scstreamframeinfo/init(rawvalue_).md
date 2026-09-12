> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamframeinfo/init(rawvalue:)](https://developer.apple.com/documentation/screencapturekit/scstreamframeinfo/init(rawvalue:))

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
