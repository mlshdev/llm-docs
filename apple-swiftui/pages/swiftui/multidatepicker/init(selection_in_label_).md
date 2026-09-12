> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/multidatepicker/init(selection:in:label:)](https://developer.apple.com/documentation/swiftui/multidatepicker/init(selection:in:label:))

# init(selection:in:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates an instance that selects multiple dates on or after some start date.

## Declaration

```swift
nonisolated init(selection: Binding<Set<DateComponents>>, in bounds: PartialRangeFrom<Date>, @ContentBuilder label: () -> Label)
```

## Parameters

- `selection`: The date values being displayed and selected.
- `bounds`: The open range from some selectable start date.
- `label`: A view that describes the use of the dates.

## See Also

### Picking dates in a range

- [init(\_:selection:in:)](init%28__selection_in_%29.md): Conforms when `Label` is `Text`. Creates an instance that selects multiple dates on or after some start date.
