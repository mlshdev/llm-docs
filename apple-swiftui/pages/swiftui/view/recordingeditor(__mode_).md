> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/recordingeditor(_:mode:)](https://developer.apple.com/documentation/swiftui/view/recordingeditor(_:mode:))

# recordingEditor(\_:mode:)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** tvOS 27.0+

Presents the recording editor for the given recording URL with a specific mode.

## Declaration

```swift
@MainActor @preconcurrency func recordingEditor(_ item: Binding<URL?>, mode: SCRecordingEditor.Mode) -> some View

```

## Parameters

- `item`: A binding to an optional URL. Non-nil presents the editor; nil dismisses it.
- `mode`: The editor mode (`.preview` or `.share`).

## See Also

### Screen capture

- [recordingEditor(\_:)](recordingeditor%28__%29.md): Presents the recording editor for the given recording URL.
