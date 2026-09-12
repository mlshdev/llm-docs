> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/realitycomposerpro/reality-composer-pro-beta-4-release-notes](https://developer.apple.com/documentation/realitycomposerpro/reality-composer-pro-beta-4-release-notes)

# Reality Composer Pro Beta 4 Release Notes

**Kind:** Article

Review known issues and changes in Reality Composer Pro 3.

<a id="Overview"></a>

## Overview

Reality Composer Pro Beta 4 is a standalone app, available for download from the [Apple Developer website](https://developer.apple.com/), and is no longer part of Xcode. Reality Composer Pro requires a Mac with Apple silicon running macOS Tahoe 26.5 or later.

<a id="Resolved-Issues"></a>

### Resolved Issues

- Fixed: When you enable `clearcoat`, specular occlusion is now visible. (175159311)
- Fixed: Light maps on cube and box primitives now render properly. (176278045)
- Fixed: The Particle Emitter inspector now includes the preset menu. Presets such as Fireworks, Impact, Magic, Rain, Snow, and Sparks can be applied from the editor. (165089607)

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

- A material that uses subsurface scattering (SSS weight greater than 0) with specular roughness below 1 renders black on surfaces facing away from a directional or spot light. This affects both the RealityKit PBR and OpenPBR surface nodes when the material’s lighting descriptors in the Material Inspector are left Unspecified. (180306610)

  - **Workaround:** In the ShaderGraph Material Descriptor Inspector, set lighting model to Lit, and Specular Model to GGX or GGX Anisotropy.

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

<a id="RealityKit"></a>

### RealityKit

<a id="Known-Issues"></a>

#### Known Issues

- `ComputeGraphComponent` instances in a Reality file do not render when your app loads them. (177674901)

<a id="Preview-on-visionOS"></a>

### Preview on visionOS

<a id="Known-Issues"></a>

#### Known Issues

- Textures in a scene may not load, leaving objects with a flat grey appearance. (182734493)

  - **Workaround:** For textures to load correctly, enter immersive mode and then exit it.

## See Also

### Release notes

- [Reality Composer Pro Release Notes](reality-composer-pro-release-notes.md): Review known issues and changes in Reality Composer Pro 3.
- [Reality Composer Pro Beta 2 Release Notes](reality-composer-pro-beta-2-release-notes.md): Review known issues and changes in Reality Composer Pro 3.
- [Reality Composer Pro Beta 3 Release Notes](reality-composer-pro-beta-3-release-notes.md): Review known issues and changes in Reality Composer Pro 3.
- [Reality Composer Pro Beta 5 Release Notes](reality-composer-pro-beta-5-release-notes.md): Review known issues and changes in Reality Composer Pro 3.
