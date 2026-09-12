> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/recordingeditor(_:)](https://developer.apple.com/documentation/swiftui/view/recordingeditor(_:))

# recordingEditor(\_:)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Presents the recording editor for the given recording URL.

## Declaration

```swift
@MainActor @preconcurrency func recordingEditor(_ item: Binding<URL?>) -> some View

```

## Parameters

- `item`: A binding to an optional URL. Non-nil presents the editor; nil dismisses it.

<a id="discussion"></a>

## Discussion

When `item` is non-nil, the editor is presented for that URL. When the user dismisses, the framework sets `item` back to `nil`.

```swift
.recordingEditor($recordingURL)
```

## See Also

### Screen capture

- [recordingEditor(\_:mode:)](recordingeditor%28__mode_%29.md): Presents the recording editor for the given recording URL with a specific mode.
