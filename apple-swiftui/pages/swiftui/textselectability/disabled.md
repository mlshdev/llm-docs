> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textselectability/disabled](https://developer.apple.com/documentation/swiftui/textselectability/disabled)

# disabled

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A selectability value that disables text selection by the person using your app.

## Declaration

```swift
@export(implementation) static var disabled: DisabledTextSelectability { get }
```

<a id="discussion"></a>

## Discussion

Use this property to disable text selection of views that you don’t want people to select and copy, even if contained within an overall context that allows text selection.

```swift
content // Content that might contain Text views.
   .textSelection(.disabled)
   .padding()
   .contentShape(Rectangle())
   .gesture(someGesture)
```

## See Also

### Getting selectability options

- [enabled](enabled.md): Conforms when `Self` is `EnabledTextSelectability`. A selectability value that enables text selection by a person using your app.
