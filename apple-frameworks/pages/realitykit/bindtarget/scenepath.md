> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindtarget/scenepath](https://developer.apple.com/documentation/realitykit/bindtarget/scenepath)

# BindTarget.ScenePath

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A bind path for a particular scene.

## Declaration

```swift
struct ScenePath
```

<a id="overview"></a>

## Overview

This structure defines an absolute bind path for a scene. You determine the scene that a particular instance references by specifying the scene’s name as the argument to [BindPath.Part.scene(\_:)](../bindpath/part/scene%28__%29.md).

## Topics

### Accessing the anchor entity

- [anchorEntity(\_:)](scenepath/anchorentity%28__%29.md): A path for the scene’s anchor entity.

### Accessing the bind target

- [self](scenepath/self.md): A bind target for the scene.

## See Also

### Targeting entities and scenes

- [scene(\_:)](scene%28__%29.md): Generates a bind path from a particular scene.
- [anchorEntity(\_:)](anchorentity%28__%29.md): Generates a complex bind path from a particular anchor entity in the scene.
- [entity(\_:)](entity%28__%29.md): Generates a complex bind path from a particular child entity of the current entity.
- [BindTarget.EntityPath](entitypath.md): A bind path context for a particular entity.
