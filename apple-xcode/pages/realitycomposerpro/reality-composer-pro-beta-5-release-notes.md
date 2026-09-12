> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/realitycomposerpro/reality-composer-pro-beta-5-release-notes](https://developer.apple.com/documentation/realitycomposerpro/reality-composer-pro-beta-5-release-notes)

# Reality Composer Pro Beta 5 Release Notes

**Kind:** Article

Review known issues and changes in Reality Composer Pro 3.

<a id="Overview"></a>

## Overview

Reality Composer Pro Beta 5 is a standalone app, available for download from the [Apple Developer website](https://developer.apple.com/), and is no longer part of Xcode. Reality Composer Pro requires a Mac with Apple silicon running macOS Tahoe 26.5 or later.

<a id="Resolved-Issues"></a>

### Resolved Issues

- Fixed: A material that uses subsurface scattering (SSS weight greater than 0) with specular roughness below 1 no longer renders black on surfaces facing away from a directional or spot light. (180306610)
- Fixed: `ComputeGraphComponent` instances in a Reality file now render when your app loads them. (177674901)

<a id="General"></a>

### General

<a id="Known-Issues"></a>

#### Known Issues

- Asset Generation is only supported on macOS 27. (178159978)

  - **Workaround:** Update to macOS 27.

<a id="Materials-and-Shaders"></a>

### Materials and Shaders

<a id="Known-Issues"></a>

#### Known Issues

- Imported asset’s shader graph fails on normal map. (184117276)

<a id="3D-Modeling"></a>

### 3D Modeling

<a id="Known-Issues"></a>

#### Known Issues

- Adding a Mesh Resource type to the Model Mesh field causes the entity to flicker on screen and primitive geometry shapes to no longer load. (185447536)

<a id="RCP-Assist"></a>

### RCP Assist

<a id="Known-Issues"></a>

#### Known Issues

- RCP Assist creates a ShaderGraph (MaterialX 1.38) material instead of Physically Based when explicitly asked to create a Physically Based material type. (184871460)

<a id="Script-Graph"></a>

### Script Graph

<a id="Known-Issues"></a>

#### Known Issues

- “On Initialize” node can fail to start animation or audio on build and run. (182533099)

  - **Workaround:** Use the “On Activate” node to start audio and animation events.

<a id="Scripting-and-Shaders"></a>

### Scripting and Shaders

<a id="Known-Issues"></a>

#### Known Issues

- When using world position in scripts or shaders, Reality Composer Pro content shifts relative to the world origin in shared space apps. (178279067)

  - **Workaround:** Use relative position, or calculate the relationship of your content to the world origin and adjust your scripts or shaders accordingly. Refer to the Squirrel sample for examples.

<a id="Preview-on-visionOS"></a>

### Preview on visionOS

<a id="Known-Issues"></a>

#### Known Issues

- Textures in a scene may not load, leaving objects with a flat grey appearance. (182734493)

  - **Workaround:** For textures to load correctly, enter immersive mode and then exit it.

<a id="Migration"></a>

### Migration

<a id="Known-Issues"></a>

#### Known Issues

- Migrating Reality Composer Pro 2 projects with timelines fails. (184861508)

## See Also

### Release notes

- [Reality Composer Pro Release Notes](reality-composer-pro-release-notes.md): Review known issues and changes in Reality Composer Pro 3.
- [Reality Composer Pro Beta 2 Release Notes](reality-composer-pro-beta-2-release-notes.md): Review known issues and changes in Reality Composer Pro 3.
- [Reality Composer Pro Beta 3 Release Notes](reality-composer-pro-beta-3-release-notes.md): Review known issues and changes in Reality Composer Pro 3.
- [Reality Composer Pro Beta 4 Release Notes](reality-composer-pro-beta-4-release-notes.md): Review known issues and changes in Reality Composer Pro 3.
