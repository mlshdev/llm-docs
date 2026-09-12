> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/headerprominence(_:)](https://developer.apple.com/documentation/swiftui/view/headerprominence(_:))

# headerProminence(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the header prominence for this view.

## Declaration

```swift
nonisolated func headerProminence(_ prominence: Prominence) -> some View

```

## Parameters

- `prominence`: The prominence to apply.

<a id="discussion"></a>

## Discussion

In the following example, the section header appears with increased prominence:

```swift
List {
    Section(header: Text("Header")) {
        Text("Row")
    }
    .headerProminence(.increased)
}
.listStyle(.insetGrouped)
```

## See Also

### Configuring headers

- [headerProminence](../environmentvalues/headerprominence.md): The prominence to apply to section headers within a view.
- [Prominence](../prominence.md): A type indicating the prominence of a view hierarchy.
