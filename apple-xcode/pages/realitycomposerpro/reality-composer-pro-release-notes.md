> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitycomposerpro/reality-composer-pro-release-notes

# Reality Composer Pro Release Notes

**Kind:** Article

Review known issues and changes in Reality Composer Pro 3.

<a id="Overview"></a>

## Overview

Reality Composer Pro is a standalone app, available for download from the [Apple Developer website](https://developer.apple.com/reality-composer-pro/), and is no longer part of Xcode. Reality Composer Pro requires a Mac with Apple silicon running macOS Tahoe 26.5 or later.

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

  - **Workaround:** Save the project and relaunch Reality Composer Pro 3.

<a id="RCP-Assist"></a>

### RCP Assist

<a id="Known-Issues"></a>

#### Known Issues

- RCP Assist creates a ShaderGraph (MaterialX 1.38) material instead of Physically Based when explicitly asked to create a Physically Based material type. (184871460)

<a id="Scripting-and-Shaders"></a>

### Scripting and Shaders

<a id="Known-Issues"></a>

#### Known Issues

- When using world position in scripts or shaders, Reality Composer Pro content shifts relative to the world origin in shared space apps. (178279067)

  - **Workaround:** Use relative position, or calculate the relationship of your content to the world origin and adjust your scripts or shaders accordingly.
