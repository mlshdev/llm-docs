> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene](https://developer.apple.com/documentation/scenekit/scnscene)

# SCNScene (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A container for the node hierarchy and global properties that together form a displayable 3D scene.

## Declaration

```swift
class SCNScene
```

<a id="overview"></a>

## Overview

To display 3D content with SceneKit, you create a scene containing a hierarchy of the nodes and attributes that together represent your visual elements. Typically, you build your assets in a 3D visual editor, then assemble them into a scene using Xcode’s SceneKit Scene Editor, ready for SceneKit to render.

![At the left, a diagram showing a simple scene composed of the node hierarchy and presentation attributes. At the right, the resulting rendered scene.](https://developer.apple.com/images/com.apple.scenekit/media-2994226@2x.png)

To display your scene, you need to load it at runtime, then set it as the scene property of an [SCNView](scnview.md):

```swift
guard let myScene = SCNScene(named: "MyScene") 
    else { fatalError("Unable to load scene file.") }
scnView.scene = myScene // Your app's SCNView
```

<a id="Creating-a-Scene"></a>

### Creating a Scene

The simplest way to create a scene is through Xcode’s SceneKit Scene Editor. Start by importing one or more assets from a 3D editor, such as Blender. Then you adjust the positions and attributes of the assets, and set global scene properties, such as lighting environment, to compose your scene. The scene editor creates a `.scn` file, which you save to a `.scnassets` folder in the app bundle. When you build your project, Xcode optimizes the scene file for your target platform.

## Topics

### Creating a Scene from a File

- [init(named:)](scnscene/init%28named_%29.md): Loads a scene from a file with the specified name in the app’s main bundle.
- [init(named:inDirectory:options:)](scnscene/init%28named_indirectory_options_%29.md): Loads a scene from a file with the specified name in a specific subdirectory of the app’s main bundle.
- [init(url:options:)](scnscene/init%28url_options_%29-7ugvv.md): Loads a scene from the specified URL.

### Managing Animated Effects in a Scene

- [isPaused](scnscene/ispaused.md): A Boolean value that determines whether to run actions, animations, particle systems, and physics simulations in the scene graph.

### Accessing Scene Contents

- [rootNode](scnscene/rootnode.md): The root node of the scene graph.
- [background](scnscene/background.md): A background to be rendered before the rest of the scene.
- [lightingEnvironment](scnscene/lightingenvironment.md): A cube map texture that depicts the environment surrounding the scene’s contents, used for advanced lighting effects.

### Managing Scene Attributes

- [attribute(forKey:)](scnscene/attribute%28forkey_%29.md): Returns the scene attribute for the specified key.
- [setAttribute(\_:forKey:)](scnscene/setattribute%28__forkey_%29.md): Sets a scene attribute for the specified key.
- [SCNScene.Attribute](scnscene/attribute.md)

### Exporting a Scene File

- [write(to:options:delegate:progressHandler:)](scnscene/write%28to_options_delegate_progresshandler_%29.md): Exports the scene and its contents to a file at the specified URL.
- [SCNSceneExportDelegate](scnsceneexportdelegate.md): Methods you can implement to participate in the process of exporting a scene to a file.

### Adding Fog to a Scene

- [fogStartDistance](scnscene/fogstartdistance.md): The distance from a point of view at which the scene’s contents begin to be obscured by fog. Animatable.
- [fogEndDistance](scnscene/fogenddistance.md): The distance from a point of view at which the scene’s contents are completely obscured by fog. Animatable.
- [fogDensityExponent](scnscene/fogdensityexponent.md): The transition curve for the fog’s intensity between its start and end distances. Animatable.
- [fogColor](scnscene/fogcolor.md): The color of the fog effect to be rendered with the scene. Animatable.

### Working With Physics in the Scene

- [physicsWorld](scnscene/physicsworld.md): The physics simulation associated with the scene.

### Working with Particle Systems in the Scene

- [addParticleSystem(\_:transform:)](scnscene/addparticlesystem%28__transform_%29.md): Attaches a particle system to the scene, using the specified transform.
- [particleSystems](scnscene/particlesystems.md): The particle systems attached to the scene.
- [removeParticleSystem(\_:)](scnscene/removeparticlesystem%28__%29.md): Removes a particle system attached to the scene.
- [removeAllParticleSystems()](scnscene/removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the scene.

### Constants

- [Scene Attributes](scene-attributes.md): Attribute keys available in the options dictionary for the methods [attribute(forKey:)](scnscene/attribute%28forkey_%29.md) and [setAttribute(\_:forKey:)](scnscene/setattribute%28__forkey_%29.md)
- [Scene Export Options](scene-export-options.md): Options for the [write(to:options:delegate:progressHandler:)](scnscene/write%28to_options_delegate_progresshandler_%29.md) method.
- [SCNSceneExportProgressHandler](scnsceneexportprogresshandler.md): The signature for the block that SceneKit calls during scene export.

### Initializers

- [init(URL:options:)](scnscene/init%28url_options_%29-2hc8n.md)
- [init(coder:)](scnscene/init%28coder_%29.md)

### Instance Properties

- [screenSpaceReflectionMaximumDistance](scnscene/screenspacereflectionmaximumdistance.md)
- [screenSpaceReflectionSampleCount](scnscene/screenspacereflectionsamplecount.md)
- [screenSpaceReflectionStride](scnscene/screenspacereflectionstride.md)
- [wantsScreenSpaceReflection](scnscene/wantsscreenspacereflection.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [GKSceneRootNodeType](../gameplaykit/gkscenerootnodetype.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Essentials

- [SCNView](scnview.md): A view for displaying 3D SceneKit content.
- [SceneView](sceneview.md): Deprecated. A SwiftUI view for displaying 3D SceneKit content.

# SCNScene (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A container for the node hierarchy and global properties that together form a displayable 3D scene.

## Declaration

```objectivec
@interface SCNScene : NSObject
```

<a id="overview"></a>

## Overview

To display 3D content with SceneKit, you create a scene containing a hierarchy of the nodes and attributes that together represent your visual elements. Typically, you build your assets in a 3D visual editor, then assemble them into a scene using Xcode’s SceneKit Scene Editor, ready for SceneKit to render.

![At the left, a diagram showing a simple scene composed of the node hierarchy and presentation attributes. At the right, the resulting rendered scene.](https://developer.apple.com/images/com.apple.scenekit/media-2994226@2x.png)

To display your scene, you need to load it at runtime, then set it as the scene property of an [SCNView](scnview.md):

```swift
guard let myScene = SCNScene(named: "MyScene") 
    else { fatalError("Unable to load scene file.") }
scnView.scene = myScene // Your app's SCNView
```

<a id="Creating-a-Scene"></a>

### Creating a Scene

The simplest way to create a scene is through Xcode’s SceneKit Scene Editor. Start by importing one or more assets from a 3D editor, such as Blender. Then you adjust the positions and attributes of the assets, and set global scene properties, such as lighting environment, to compose your scene. The scene editor creates a `.scn` file, which you save to a `.scnassets` folder in the app bundle. When you build your project, Xcode optimizes the scene file for your target platform.

## Topics

### Creating a Scene from a File

- [scene](scnscene/scene.md): Deprecated. Creates and returns an empty scene.
- [sceneNamed:](scnscene/init%28named_%29.md): Loads a scene from a file with the specified name in the app’s main bundle.
- [sceneNamed:inDirectory:options:](scnscene/init%28named_indirectory_options_%29.md): Loads a scene from a file with the specified name in a specific subdirectory of the app’s main bundle.
- [sceneWithURL:options:error:](scnscene/init%28url_options_%29-7ugvv.md): Loads a scene from the specified URL.

### Creating a Scene from a Model I/O Asset

- [sceneWithMDLAsset:](scnscene/scenewithmdlasset_.md): Deprecated. Creates a scene from the specified Model I/O asset.

### Managing Animated Effects in a Scene

- [paused](scnscene/ispaused.md): A Boolean value that determines whether to run actions, animations, particle systems, and physics simulations in the scene graph.

### Accessing Scene Contents

- [rootNode](scnscene/rootnode.md): The root node of the scene graph.
- [background](scnscene/background.md): A background to be rendered before the rest of the scene.
- [lightingEnvironment](scnscene/lightingenvironment.md): A cube map texture that depicts the environment surrounding the scene’s contents, used for advanced lighting effects.

### Managing Scene Attributes

- [attributeForKey:](scnscene/attribute%28forkey_%29.md): Returns the scene attribute for the specified key.
- [setAttribute:forKey:](scnscene/setattribute%28__forkey_%29.md): Sets a scene attribute for the specified key.
- [SCNSceneAttribute](scnscene/attribute.md)

### Exporting a Scene File

- [writeToURL:options:delegate:progressHandler:](scnscene/write%28to_options_delegate_progresshandler_%29.md): Exports the scene and its contents to a file at the specified URL.
- [SCNSceneExportDelegate](scnsceneexportdelegate.md): Methods you can implement to participate in the process of exporting a scene to a file.

### Adding Fog to a Scene

- [fogStartDistance](scnscene/fogstartdistance.md): The distance from a point of view at which the scene’s contents begin to be obscured by fog. Animatable.
- [fogEndDistance](scnscene/fogenddistance.md): The distance from a point of view at which the scene’s contents are completely obscured by fog. Animatable.
- [fogDensityExponent](scnscene/fogdensityexponent.md): The transition curve for the fog’s intensity between its start and end distances. Animatable.
- [fogColor](scnscene/fogcolor.md): The color of the fog effect to be rendered with the scene. Animatable.

### Working With Physics in the Scene

- [physicsWorld](scnscene/physicsworld.md): The physics simulation associated with the scene.

### Working with Particle Systems in the Scene

- [addParticleSystem:withTransform:](scnscene/addparticlesystem%28__transform_%29.md): Attaches a particle system to the scene, using the specified transform.
- [particleSystems](scnscene/particlesystems.md): The particle systems attached to the scene.
- [removeParticleSystem:](scnscene/removeparticlesystem%28__%29.md): Removes a particle system attached to the scene.
- [removeAllParticleSystems](scnscene/removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the scene.

### Constants

- [Scene Attributes](scene-attributes.md): Attribute keys available in the options dictionary for the methods [attributeForKey:](scnscene/attribute%28forkey_%29.md) and [setAttribute:forKey:](scnscene/setattribute%28__forkey_%29.md)
- [Scene Export Options](scene-export-options.md): Options for the [writeToURL:options:delegate:progressHandler:](scnscene/write%28to_options_delegate_progresshandler_%29.md) method.
- [SCNSceneExportProgressHandler](scnsceneexportprogresshandler.md): The signature for the block that SceneKit calls during scene export.

### Instance Properties

- [screenSpaceReflectionMaximumDistance](scnscene/screenspacereflectionmaximumdistance.md)
- [screenSpaceReflectionSampleCount](scnscene/screenspacereflectionsamplecount.md)
- [screenSpaceReflectionStride](scnscene/screenspacereflectionstride.md)
- [wantsScreenSpaceReflection](scnscene/wantsscreenspacereflection.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [GKSceneRootNodeType](../gameplaykit/gkscenerootnodetype.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Essentials

- [SCNView](scnview.md): A view for displaying 3D SceneKit content.
