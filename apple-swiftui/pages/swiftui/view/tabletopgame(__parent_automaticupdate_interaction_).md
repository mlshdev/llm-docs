> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tabletopgame(_:parent:automaticupdate:interaction:)](https://developer.apple.com/documentation/swiftui/view/tabletopgame(_:parent:automaticupdate:interaction:))

# tabletopGame(\_:parent:automaticUpdate:interaction:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Supplies a closure which returns a new interaction whenever needed.

## Declaration

```swift
@MainActor @preconcurrency func tabletopGame(_ game: TabletopGame, parent: Entity, automaticUpdate: Bool = true, interaction make: @escaping (TabletopInteraction.Value) -> any TabletopInteraction.Delegate) -> some View

```

## See Also

### Creating a tabletop game

- [tabletopGame(\_:parent:automaticUpdate:)](tabletopgame%28__parent_automaticupdate_%29.md): Adds a tabletop game to a view.
