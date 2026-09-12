> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaudionode](https://developer.apple.com/documentation/spritekit/skaudionode)

# SKAudioNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A node that plays audio.

## Declaration

```swift
class SKAudioNode
```

## Mentioned In

- [Using Audio Nodes with the Scene’s Listener](using-audio-nodes-with-the-scene-s-listener.md)

<a id="overview"></a>

## Overview

A [SKAudioNode](skaudionode.md) object is used to add an audio to a scene. The sounds are played automatically using AVFoundation, and the node can optionally add 3D spatial audio effects to the audio when it is played.

The currently presented [SKScene](skscene.md) object mixes the audio from nodes in the scene based on parameters defined in the [AVAudio3DMixing](../avfaudio/avaudio3dmixing.md) protocol. A scene’s [audioEngine](skscene/audioengine.md) property allows overall control of volume and playback.

By default, [SKAudioNode](skaudionode.md) objects are positional, i.e. their [isPositional](skaudionode/ispositional.md) property is set to [true](https://developer.apple.com/documentation/swift/true). If you add an audio node to a scene with a [listener](skscene/listener.md) set, SpriteKit will set the stereo balance and the volume based on the relative positions of the two nodes.

You can explicitly set the volume or stereo balance to an audio node by running actions on it.

SpriteKit includes actions that reduce an audio node’s volume by changing either its occlusion or obstruction. The difference between these actions is that occlusion affects both the direct and reverb paths of the sound while obstruction only affects the direct path. The *change volume* action offers absolute control over an audio node’s volume.

You can manually set the stereo balance of an audio node with a *stereo pan* action.

Special effects, such as speeding up or slowing down audio by changing the playback rate and adding reverb are also available as audio actions.

To learn more about audio actions, see Controlling the Audio of a Node in [Action Initializers](action-initializers.md).

## Topics

### First Steps

- [Using Audio Nodes with the Scene’s Listener](using-audio-nodes-with-the-scene-s-listener.md): Add audio to your scene, and optionally give it 2D-positional mixing characteristics.

### Initializing Audio Nodes

- [init(avAudioNode:)](skaudionode/init%28avaudionode_%29-969st.md): Initializes an audio node from an AVFoundation audio node.
- [init(fileNamed:)](skaudionode/init%28filenamed_%29.md): Initializes an audio node from an audio asset with the specified filename.
- [init(url:)](skaudionode/init%28url_%29-8v3q0.md): Initializes an audio node from an audio asset with the specified URL.
- [init(coder:)](skaudionode/init%28coder_%29.md): Tells you when to initialize an audio node that has been unarchived.

### Configuring Audio Nodes

- [avAudioNode](skaudionode/avaudionode.md): The audio node’s current audio asset.
- [isPositional](skaudionode/ispositional.md): A Boolean property that indicates whether the node’s audio is altered based on the position of the node.
- [autoplayLooped](skaudionode/autoplaylooped.md): A Boolean value that indicates whether the audio should play in a loop when the node is added to the scene.

### Initializers

- [init(AVAudioNode:)](skaudionode/init%28avaudionode_%29-7qmyl.md)
- [init(URL:)](skaudionode/init%28url_%29-5bmrl.md)

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

### Nodes for Environmental Effects

- [SKLightNode](sklightnode.md): A node that lights surrounding nodes.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.

# SKAudioNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A node that plays audio.

## Declaration

```objectivec
@interface SKAudioNode : SKNode
```

## Mentioned In

- [Using Audio Nodes with the Scene’s Listener](using-audio-nodes-with-the-scene-s-listener.md)

<a id="overview"></a>

## Overview

A [SKAudioNode](skaudionode.md) object is used to add an audio to a scene. The sounds are played automatically using AVFoundation, and the node can optionally add 3D spatial audio effects to the audio when it is played.

The currently presented [SKScene](skscene.md) object mixes the audio from nodes in the scene based on parameters defined in the [AVAudio3DMixing](../avfaudio/avaudio3dmixing.md) protocol. A scene’s [audioEngine](skscene/audioengine.md) property allows overall control of volume and playback.

By default, [SKAudioNode](skaudionode.md) objects are positional, i.e. their [positional](skaudionode/ispositional.md) property is set to [true](https://developer.apple.com/documentation/swift/true). If you add an audio node to a scene with a [listener](skscene/listener.md) set, SpriteKit will set the stereo balance and the volume based on the relative positions of the two nodes.

You can explicitly set the volume or stereo balance to an audio node by running actions on it.

SpriteKit includes actions that reduce an audio node’s volume by changing either its occlusion or obstruction. The difference between these actions is that occlusion affects both the direct and reverb paths of the sound while obstruction only affects the direct path. The *change volume* action offers absolute control over an audio node’s volume.

You can manually set the stereo balance of an audio node with a *stereo pan* action.

Special effects, such as speeding up or slowing down audio by changing the playback rate and adding reverb are also available as audio actions.

To learn more about audio actions, see Controlling the Audio of a Node in [Action Initializers](action-initializers.md).

## Topics

### First Steps

- [Using Audio Nodes with the Scene’s Listener](using-audio-nodes-with-the-scene-s-listener.md): Add audio to your scene, and optionally give it 2D-positional mixing characteristics.

### Initializing Audio Nodes

- [initWithAVAudioNode:](skaudionode/init%28avaudionode_%29-969st.md): Initializes an audio node from an AVFoundation audio node.
- [initWithFileNamed:](skaudionode/init%28filenamed_%29.md): Initializes an audio node from an audio asset with the specified filename.
- [initWithURL:](skaudionode/init%28url_%29-8v3q0.md): Initializes an audio node from an audio asset with the specified URL.
- [initWithCoder:](skaudionode/init%28coder_%29.md): Tells you when to initialize an audio node that has been unarchived.

### Configuring Audio Nodes

- [avAudioNode](skaudionode/avaudionode.md): The audio node’s current audio asset.
- [positional](skaudionode/ispositional.md): A Boolean property that indicates whether the node’s audio is altered based on the position of the node.
- [autoplayLooped](skaudionode/autoplaylooped.md): A Boolean value that indicates whether the audio should play in a loop when the node is added to the scene.

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Nodes for Environmental Effects

- [SKLightNode](sklightnode.md): A node that lights surrounding nodes.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.
