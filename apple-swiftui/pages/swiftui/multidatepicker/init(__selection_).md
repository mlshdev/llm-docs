> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/multidatepicker/init(_:selection:)](https://developer.apple.com/documentation/swiftui/multidatepicker/init(_:selection:))

# init(\_:selection:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates an instance that selects multiple dates with an unbounded range.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, selection: Binding<Set<DateComponents>>)
```

## Parameters

- `titleResource`: The localized title of `self`, describing its purpose.
- `selection`: The date values being displayed and selected.

## See Also

### Picking dates

- [init(selection:label:)](init%28selection_label_%29.md): Conforms when `Label` conforms to `View`. Creates an instance that selects multiple dates with an unbounded range.
