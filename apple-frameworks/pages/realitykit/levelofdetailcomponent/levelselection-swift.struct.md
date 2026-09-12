> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/levelselection-swift.struct](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/levelselection-swift.struct)

# LevelOfDetailComponent.LevelSelection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Controls whether LOD selection is automatic or manually overridden.

## Declaration

```swift
struct LevelSelection
```

## Topics

### Type Properties

- [automatic](levelselection-swift.struct/automatic.md): Use automatic LOD selection based on the configured strategy.

### Type Methods

- [fixed(\_:)](levelselection-swift.struct/fixed%28__%29.md): Override automatic selection and always display the specified level index.

## See Also

### Choosing a level

- [strategy](strategy.md)
- [LevelOfDetailComponent.SelectionStrategy](selectionstrategy.md): The strategy used to select which detail level to display.
- [levelSelection](levelselection-swift.property.md): The level selection mode. Defaults to automatic selection based on the strategy.
