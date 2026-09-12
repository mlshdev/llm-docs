> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/datadetection(_:options:)](https://developer.apple.com/documentation/swiftui/view/datadetection(_:options:))

# dataDetection(\_:options:)

**Framework:** DataDetection  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Asynchronously detects data in the view’s content and styles them to indicate they are clickable.

## Declaration

```swift
nonisolated func dataDetection(_ types: DataDetector.MatchType = .all, options: DataDetector.Options = .init()) -> some View

```

## Parameters

- `types`: The data detector match types
- `options`: Data detector options

<a id="return-value"></a>

## Return Value

A view with modified text attributes when matches are detected
