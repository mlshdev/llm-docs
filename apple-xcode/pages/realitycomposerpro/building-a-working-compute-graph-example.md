> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/realitycomposerpro/building-a-working-compute-graph-example](https://developer.apple.com/documentation/realitycomposerpro/building-a-working-compute-graph-example)

# Building a working Compute Graph example

**Kind:** Article

Combine emission, initialization, simulation, and output nodes into a falling-snow effect colored from a gradient texture.

<a id="Overview"></a>

## Overview

The example on this page illustrates how to combine emission, initialization, simulation, and output nodes into a complete effect: falling snow. The initialization stage samples each particle’s color from a gradient texture based on its horizontal position.

![A screenshot of a globe using a gradient texture for its particles.](https://developer.apple.com/images/RealityComposerPro/ComputeGraphColorRampGlobe@2x.png)

**To try it yourself:** build a new Compute Graph asset in Reality Composer Pro and wire each stage as shown below. See [Introducing Compute Graph](introducing-compute-graph.md) for how to create and attach a Compute Graph. Swap `gradient-sixcolors.png` (in the Sample Texture 2D node of the Initialize stage) for any horizontal gradient texture to restyle the effect without touching a single node.

<a id="Emit-particles-continuously"></a>

## Emit particles continuously

Continuous emission keeps a steady snowfall going, while the burst provides an initial gust of particles so the effect doesn’t start sparse.

![A screenshot of the example Compute Graph's Emission stage node and settings.](https://developer.apple.com/images/RealityComposerPro/ComputeGraphColor1@2x.png)

<a id="Initialize-particle-color-from-position"></a>

## Initialize particle color from position

**Decompose float3** extracts each particle’s x position at spawn. A `*` and `+` node rescale that value into the gradient texture’s 0–1 sample coordinate space, and the graph uses the result to sample a six-color rainbow gradient texture. The result is snow that’s naturally colorized left-to-right across the emission volume, entirely from one texture lookup rather than hand-authored per-particle color logic.

![A screenshot of the example Compute Graph's Initialization stage node and settings.](https://developer.apple.com/images/RealityComposerPro/ComputeGraphColor2@2x.png)

<a id="Simulate-particle-motion"></a>

## Simulate particle motion

Standard physics integration moves each particle as it falls, updating position and velocity every simulation tick using the gravity and drag values shown below.

![A screenshot of the example Compute Graph's Simulation stage node and settings.](https://developer.apple.com/images/RealityComposerPro/ComputeGraphColor3@2x.png)

<a id="Fade-particles-in-and-out"></a>

## Fade particles in and out

Particles fade in as they spawn and fade out near the end of their life, rendered as billboard quads. The color sampled during initialization persists through this fade, so each particle keeps its gradient-based color for its entire lifetime.

![A screenshot of the example Compute Graph's Output stage node and settings.](https://developer.apple.com/images/RealityComposerPro/ComputeGraphColor4@2x.png)

## See Also

### Compute Graph

- [Introducing Compute Graph](introducing-compute-graph.md): Use Reality Composer Pro Compute Graph to build custom particle simulations with a node-based graph.
