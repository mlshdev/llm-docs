> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode](https://developer.apple.com/documentation/spritekit/skvideonode)

# SKVideoNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A graphical element that plays video content.

## Declaration

```swift
class SKVideoNode
```

## Mentioned In

- [Adding a Video to a Scene](adding-a-video-to-a-scene.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)

<a id="overview"></a>

## Overview

This class renders a video at a given size and location in your scene with no exposed player controls.

## Topics

### Getting Started with Video

- [Adding a Video to a Scene](adding-a-video-to-a-scene.md): Play video in your scene by adding a video node.

### Creating a Video Node

- [init(avPlayer:)](skvideonode/init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../avfoundation/avplayer.md) object.
- [init(fileNamed:)](skvideonode/init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [init(url:)](skvideonode/init%28url_%29-2im38.md): Initializes a video node using a URL.
- [init(coder:)](skvideonode/init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [init(videoFileNamed:)](skvideonode/init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [init(videoURL:)](skvideonode/init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.

### Setting the Video Node’s Visual Properties

- [anchorPoint](skvideonode/anchorpoint.md): The point in the sprite that corresponds to the node’s position.
- [size](skvideonode/size.md): The dimensions of the video node, in points.

### Controlling Video Playback

- [play()](skvideonode/play%28%29.md): Starts video playback.
- [pause()](skvideonode/pause%28%29.md): Pauses video playback.

### Initializers

- [init(AVPlayer:)](skvideonode/init%28avplayer_%29-7s6co.md)
- [init(AVPlayer:)](skvideonode/init%28avplayer_%29-8uhsn.md)
- [init(URL:)](skvideonode/init%28url_%29-49ou9.md)
- [init(URL:)](skvideonode/init%28url_%29-8rxuu.md)

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.

# SKVideoNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A graphical element that plays video content.

## Declaration

```objectivec
@interface SKVideoNode : SKNode
```

## Mentioned In

- [Adding a Video to a Scene](adding-a-video-to-a-scene.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)

<a id="overview"></a>

## Overview

This class renders a video at a given size and location in your scene with no exposed player controls.

## Topics

### Getting Started with Video

- [Adding a Video to a Scene](adding-a-video-to-a-scene.md): Play video in your scene by adding a video node.

### Creating a Video Node

- [videoNodeWithFileNamed:](skvideonode/videonodewithfilenamed_.md): Creates and initializes a new video node using a video file stored in the app bundle.
- [videoNodeWithAVPlayer:](skvideonode/videonodewithavplayer_.md): Creates and initializes a video node using an existing video player object.
- [videoNodeWithURL:](skvideonode/videonodewithurl_.md): Creates and initializes a video node using a URL that points to a video file.
- [initWithAVPlayer:](skvideonode/init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../avfoundation/avplayer.md) object.
- [initWithFileNamed:](skvideonode/init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [initWithURL:](skvideonode/init%28url_%29-2im38.md): Initializes a video node using a URL.
- [initWithCoder:](skvideonode/init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [initWithVideoFileNamed:](skvideonode/init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [initWithVideoURL:](skvideonode/init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.

### Setting the Video Node’s Visual Properties

- [anchorPoint](skvideonode/anchorpoint.md): The point in the sprite that corresponds to the node’s position.
- [size](skvideonode/size.md): The dimensions of the video node, in points.

### Controlling Video Playback

- [play](skvideonode/play%28%29.md): Starts video playback.
- [pause](skvideonode/pause%28%29.md): Pauses video playback.

### Type Methods

- [videoNodeWithVideoFileNamed:](skvideonode/videonodewithvideofilenamed_.md): Deprecated. Creates and initializes a new video node using a video file stored in the app bundle.
- [videoNodeWithVideoURL:](skvideonode/videonodewithvideourl_.md): Deprecated. Creates and initializes a video node using a URL that points to a video file.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.
