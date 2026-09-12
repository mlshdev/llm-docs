> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/alternatingrowbackgrounds(_:)](https://developer.apple.com/documentation/swiftui/view/alternatingrowbackgrounds(_:))

# alternatingRowBackgrounds(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Overrides whether lists and tables in this view have alternating row backgrounds.

## Declaration

```swift
nonisolated func alternatingRowBackgrounds(_ behavior: AlternatingRowBackgroundBehavior = .enabled) -> some View

```

## Parameters

- `behavior`: Whether alternating row backgrounds are enabled or not.

<a id="discussion"></a>

## Discussion

This can be used in conjunction with an explicit list or table style or used by itself to customize the row backgrounds of the automatic style. The only list style this has no effect on is `.sidebar.`

```swift
List(recipe.ingredients) {
    Text($0.name)
}
.listStyle(.bordered)
.alternatingRowBackgrounds()
```

This is able to be combined with `scrollContentBackground(_:)` and applies an alternating row background on top of the overall list or table background.

This can also be combined with `listRowBackground`, which overrides the background for a specific list row, replacing the automatic alternating background for that row.

## See Also

### Configuring backgrounds

- [listRowBackground(\_:)](listrowbackground%28__%29.md): Places a custom background view behind a list row item.
- [AlternatingRowBackgroundBehavior](../alternatingrowbackgroundbehavior.md): The styling of views with respect to alternating row backgrounds.
- [backgroundProminence](../environmentvalues/backgroundprominence.md): The prominence of the background underneath views associated with this environment.
- [BackgroundProminence](../backgroundprominence.md): The prominence of backgrounds underneath other views.
