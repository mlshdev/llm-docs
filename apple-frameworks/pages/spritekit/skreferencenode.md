> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skreferencenode](https://developer.apple.com/documentation/spritekit/skreferencenode)

# SKReferenceNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A node that’s defined in an archived `.sks` file.

## Declaration

```swift
class SKReferenceNode
```

## Mentioned In

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md)

<a id="overview"></a>

## Overview

`SKReferenceNode` is used within an archived `.sks` file to refer to node defined in another `.sks` file without duplicating its definition. This way, a change to the referenced node propagates to all the references in other files.

> **Note**

>  `SKReferenceNode` is mostly used in conjunction with Xcode’s SpriteKit Scene editor, but it’s possible to instantiate it yourself and use the [resolve()](skreferencenode/resolve%28%29.md) function as a handy way to restore a node’s appearance.

As an example, you might want to share an enemy ship across two different levels, Scene1.sks and Scene2.sks, in a level-based game. Reference nodes allow you to do that without creating copies of the shared node and its properties.

To use a reference node:

- Create the shared content in a separate archive
- Add references to the shared archive within your scene archives

When each scene is loaded, the reference nodes are resolved dynamically, and therefore you only need to configure a shared object in one place.

## Topics

### Initializers

- [init(url:)](skreferencenode/init%28url_%29-3jryz.md): Creates a reference node from a URL.
- [init(url:)](skreferencenode/init%28url_%29-429mo.md): Initializes a reference node from a URL.
- [init(fileNamed:)](skreferencenode/init%28filenamed_%29-77gs0.md): Creates a reference node from a file in the app’s main bundle.
- [init(fileNamed:)](skreferencenode/init%28filenamed_%29-2yeh2.md): Initializes a reference node from a file in the app’s main bundle.
- [init(coder:)](skreferencenode/init%28coder_%29.md): A method that initializes a reference node from an archive.
- [init(URL:)](skreferencenode/init%28url_%29-8glm0.md)
- [init(URL:)](skreferencenode/init%28url_%29-8yn6r.md)

### Regenerating

Load a reference nodes contents freshly from the archive again.

- [resolve()](skreferencenode/resolve%28%29.md): Loads the reference node’s content and adds it as a new child node.

### Loading Callback

- [didLoad(\_:)](skreferencenode/didload%28__%29.md): A method called by SpriteKit after the reference node’s contents are loaded.

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

### Base Nodes

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md): Use nonvisual nodes to define the layout of a scene.
- [SKNode](sknode.md): The base class of all SpriteKit nodes.
- [SKCameraNode](skcameranode.md): A node that determines which parts of the scene are visible within a view.

# SKReferenceNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A node that’s defined in an archived `.sks` file.

## Declaration

```objectivec
@interface SKReferenceNode : SKNode
```

## Mentioned In

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md)

<a id="overview"></a>

## Overview

`SKReferenceNode` is used within an archived `.sks` file to refer to node defined in another `.sks` file without duplicating its definition. This way, a change to the referenced node propagates to all the references in other files.

> **Note**

>  `SKReferenceNode` is mostly used in conjunction with Xcode’s SpriteKit Scene editor, but it’s possible to instantiate it yourself and use the [resolveReferenceNode](skreferencenode/resolve%28%29.md) function as a handy way to restore a node’s appearance.

As an example, you might want to share an enemy ship across two different levels, Scene1.sks and Scene2.sks, in a level-based game. Reference nodes allow you to do that without creating copies of the shared node and its properties.

To use a reference node:

- Create the shared content in a separate archive
- Add references to the shared archive within your scene archives

When each scene is loaded, the reference nodes are resolved dynamically, and therefore you only need to configure a shared object in one place.

## Topics

### Initializers

- [referenceNodeWithURL:](skreferencenode/init%28url_%29-3jryz.md): Creates a reference node from a URL.
- [initWithURL:](skreferencenode/init%28url_%29-429mo.md): Initializes a reference node from a URL.
- [referenceNodeWithFileNamed:](skreferencenode/init%28filenamed_%29-77gs0.md): Creates a reference node from a file in the app’s main bundle.
- [initWithFileNamed:](skreferencenode/init%28filenamed_%29-2yeh2.md): Initializes a reference node from a file in the app’s main bundle.
- [initWithCoder:](skreferencenode/init%28coder_%29.md): A method that initializes a reference node from an archive.

### Regenerating

Load a reference nodes contents freshly from the archive again.

- [resolveReferenceNode](skreferencenode/resolve%28%29.md): Loads the reference node’s content and adds it as a new child node.

### Loading Callback

- [didLoadReferenceNode:](skreferencenode/didload%28__%29.md): A method called by SpriteKit after the reference node’s contents are loaded.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Base Nodes

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md): Use nonvisual nodes to define the layout of a scene.
- [SKNode](sknode.md): The base class of all SpriteKit nodes.
- [SKCameraNode](skcameranode.md): A node that determines which parts of the scene are visible within a view.
