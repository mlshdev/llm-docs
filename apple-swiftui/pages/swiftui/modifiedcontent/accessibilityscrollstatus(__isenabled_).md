> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilityscrollstatus(_:isenabled:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityscrollstatus(_:isenabled:))

# accessibilityScrollStatus(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Changes the announcement provided by accessibility technologies when a user scrolls a scroll view within this view.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityScrollStatus(_ status: LocalizedStringResource, isEnabled: Bool = true) -> ModifiedContent<Content, Modifier>
```

## Parameters

- `status`: The current status of the scroll view.
- `isEnabled`: If true the accessibility scroll status is applied; otherwise the accessibility scroll status is unchanged.

<a id="discussion"></a>

## Discussion

Use this modifier to provide a description of the content at the current position in the scroll view. For example, you could use this modifier to announce the current month being scrolled to in a view that contains a calendar.

```swift
@State private var position = ScrollPosition(idType: Month.ID.self)

ScrollView {
    LazyVStack {
        ForEach(months) { months in
            MonthView(month: months)
        }
    }
    .scrollTargetLayout()
}
.scrollPosition($position)
.accessibilityScrollStatus("\(months.name(position.viewID)) \(year)")
```

By default, VoiceOver announces “Page X of Y” while scrolling.
