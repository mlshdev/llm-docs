> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasecontainernodedefinition](https://developer.apple.com/documentation/phase/phasecontainernodedefinition)

# PHASEContainerNodeDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A node that plays all its children at the same time.

## Declaration

```swift
class PHASEContainerNodeDefinition
```

<a id="overview"></a>

## Overview

This node adds structure to the sound event tree while performing no conditional logic or audio playback of its own. By passing invocation to all its children at once, this class invokes the child nodes’ actions simultaneously.

## Topics

### Creating a Node

- [init()](phasecontainernodedefinition/init%28%29.md): Creates a container node.
- [init(identifier:)](phasecontainernodedefinition/init%28identifier_%29.md): Creates a container node with the given name.
- [new()](phasecontainernodedefinition/new%28%29.md): Creates a container node.

### Adding Descendent Nodes

- [addSubtree(\_:)](phasecontainernodedefinition/addsubtree%28__%29.md): Adds a sound event node as a child.

## Relationships

### Inherits From

- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Control Nodes

- [PHASESwitchNodeDefinition](phaseswitchnodedefinition.md): A node that passes invocation to only one of its child nodes.
- [PHASERandomNodeDefinition](phaserandomnodedefinition.md): A sound event node that invokes one of its child nodes at random.
- [PHASEBlendNodeDefinition](phaseblendnodedefinition.md): A node that smoothly fades between the audio of its child nodes.

# PHASEContainerNodeDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A node that plays all its children at the same time.

## Declaration

```objectivec
@interface PHASEContainerNodeDefinition : PHASESoundEventNodeDefinition
```

<a id="overview"></a>

## Overview

This node adds structure to the sound event tree while performing no conditional logic or audio playback of its own. By passing invocation to all its children at once, this class invokes the child nodes’ actions simultaneously.

## Topics

### Creating a Node

- [init](phasecontainernodedefinition/init%28%29.md): Creates a container node.
- [initWithIdentifier:](phasecontainernodedefinition/init%28identifier_%29.md): Creates a container node with the given name.
- [new](phasecontainernodedefinition/new%28%29.md): Creates a container node.

### Adding Descendent Nodes

- [addSubtree:](phasecontainernodedefinition/addsubtree%28__%29.md): Adds a sound event node as a child.

## Relationships

### Inherits From

- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md)

## See Also

### Control Nodes

- [PHASESwitchNodeDefinition](phaseswitchnodedefinition.md): A node that passes invocation to only one of its child nodes.
- [PHASERandomNodeDefinition](phaserandomnodedefinition.md): A sound event node that invokes one of its child nodes at random.
- [PHASEBlendNodeDefinition](phaseblendnodedefinition.md): A node that smoothly fades between the audio of its child nodes.
