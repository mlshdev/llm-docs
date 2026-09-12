> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/dockingregioncomponent](https://developer.apple.com/documentation/realitykit/dockingregioncomponent)

# DockingRegionComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A component that docks a scene within a region of an immersive space.

## Declaration

```swift
struct DockingRegionComponent
```

<a id="Overview"></a>

## Overview

A docking-region component establishes a fixed area within an immersive environment that an [AVPlayerViewController](../avkit/avplayerviewcontroller.md) window scene anchors to, which prevents a person from moving the window with a pinch-and-drag gesture.

To anchor dockable scenes, attach a `DockingRegionComponent` to an entity. The entity’s position represents the docking position. Specify the width to set the docking boundary; the docking region maintains a cinematic `2.4:1` width/height ratio, ideal for wide display formats.

The following code is an example of a basic setup for a `DockingRegionComponent`:

```swift
// Create an entity.
let entity = Entity()

// Create a docking-region component.
var dockingRegionComponent = DockingRegionComponent()

// Set entity's position as the docking position, in meters.
entity.position = [0, 10, -65]

// Set the width of the docking boundary to 75 meters.
dockingRegionComponent.width = 75

// Attach the docking-region component to the entity.
entity.components.set(dockingRegionComponent)
```

In the example below, the video player docks in a built-in sky dome scene from Reality Composer Pro:

Video: dockingregioncomponent-docking

## Topics

### Creating a docking region component

- [init()](dockingregioncomponent/init%28%29.md): Creates a docking-region component.

### Sizing a docking region

- [width](dockingregioncomponent/width.md): The width of the docking region, in meters.

## Relationships

### Conforms To

- [Component](component.md)
