> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/multidatepicker/init(selection:label:)

# init(selection:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates an instance that selects multiple dates with an unbounded range.

## Declaration

```swift
nonisolated init(selection: Binding<Set<DateComponents>>, @ContentBuilder label: () -> Label)
```

## Parameters

- `selection`: The date values being displayed and selected.
- `label`: A view that describes the use of the dates.

## See Also

### Picking dates

- [init(\_:selection:)](init%28__selection_%29.md): Conforms when `Label` is `Text`. Creates an instance that selects multiple dates with an unbounded range.
