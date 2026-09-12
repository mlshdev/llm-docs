> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent)

# LevelOfDetailComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that enables Level of Detail (LOD) optimization for entities with multiple detail levels.

## Declaration

```swift
struct LevelOfDetailComponent
```

<a id="overview"></a>

## Overview

The component allows entities to automatically show/hide child entities based on viewing conditions, reducing rendering complexity for distant or small objects.

## Topics

### Creating a component

- [init(levels:switchingAt:)](levelofdetailcomponent/init%28levels_switchingat_%29.md): Creates a new Level of Detail component.
- [addByCameraDistance(to:levels:)](levelofdetailcomponent/addbycameradistance%28to_levels_%29.md): Adds Level of Detail configuration using distance-based switching to an entity .
- [addByScreenArea(to:levels:)](levelofdetailcomponent/addbyscreenarea%28to_levels_%29.md): Adds Level of Detail configuration using screen area-based switching to an entity.
- [addByResolutionMetric(to:levels:boundingBox:)](levelofdetailcomponent/addbyresolutionmetric%28to_levels_boundingbox_%29.md): Adds Level of Detail configuration using resolution metric-based switching to an entity.

### Configuring detail levels

- [levels](levelofdetailcomponent/levels.md)
- [LevelOfDetailComponent.DetailLevel](levelofdetailcomponent/detaillevel.md): An array of entities representing a single detail level. Entities within a level are shown or hidden together based on LOD selection.

### Choosing a level

- [strategy](levelofdetailcomponent/strategy.md)
- [LevelOfDetailComponent.SelectionStrategy](levelofdetailcomponent/selectionstrategy.md): The strategy used to select which detail level to display.
- [levelSelection](levelofdetailcomponent/levelselection-swift.property.md): The level selection mode. Defaults to automatic selection based on the strategy.
- [LevelOfDetailComponent.LevelSelection](levelofdetailcomponent/levelselection-swift.struct.md): Controls whether LOD selection is automatic or manually overridden.

## Relationships

### Conforms To

- [Component](component.md)
