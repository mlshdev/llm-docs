> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/multidatepicker/init(_:selection:in:)](https://developer.apple.com/documentation/swiftui/multidatepicker/init(_:selection:in:))

# init(\_:selection:in:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates an instance that selects multiple dates on or after some start date.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, selection: Binding<Set<DateComponents>>, in bounds: PartialRangeFrom<Date>)
```

## Parameters

- `titleResource`: The localized title of `self`, describing its purpose.
- `selection`: The date values being displayed and selected.
- `bounds`: The open range from some selectable start date.

## See Also

### Picking dates in a range

- [init(selection:in:label:)](init%28selection_in_label_%29.md): Conforms when `Label` conforms to `View`. Creates an instance that selects multiple dates on or after some start date.
