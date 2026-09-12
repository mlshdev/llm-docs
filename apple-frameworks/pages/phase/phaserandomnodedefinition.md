> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaserandomnodedefinition](https://developer.apple.com/documentation/phase/phaserandomnodedefinition)

# PHASERandomNodeDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A sound event node that invokes one of its child nodes at random.

## Declaration

```swift
class PHASERandomNodeDefinition
```

<a id="overview"></a>

## Overview

When the framework invokes a random node, it passes the invocation on to one of its children at random. The weight you choose for a child node in the [addSubtree(\_:weight:)](phaserandomnodedefinition/addsubtree%28__weight_%29.md) argument skews the node’s selection chances.

<a id="Choose-from-Alternate-Sounds"></a>

### Choose from Alternate Sounds

This class can model real-world cases where an event varies slightly, such as when footsteps sound slightly different because of the unique ground composition at each step.

![Illustration of a flowchart that represents a sound event node tree. The chart contains three boxes, which represent nodes. At left, a box labeled Random Node extends an arrow, which points to a box in the upper right that’s labeled Sampler Node Footstep Variation One. The box labeled Random Node extends another arrow, which points to a box in the lower right that’s labeled Sampler Node Footstep Variation Two. ](https://developer.apple.com/images/com.apple.phase/media-3918860@2x.png)

The following code creates an instance of this class that selects from three different footstep sounds. The weights determine that an uncommon footstep noise plays half as frequently as the common footstep. And a third footstep noise plays 10% of the time.

**Swift**

```swift
// Create several nodes from prior-registered footstep sound assets.
let footstep1 = PHASESamplerNodeDefinition(
    soundAssetIdentifier: "footstep1",
    mixerDefinition: myMixer, identifier: "footstep1")
let footstep2 = PHASESamplerNodeDefinition(
    soundAssetIdentifier: "footstep2",
    mixerDefinition: myMixer, identifier: "footstep2")
let footstep3 = PHASESamplerNodeDefinition(
    soundAssetIdentifier: "footstep3",    
    mixerDefinition: myMixer, identifier: "footstep3")

// Create the random node.
let randomNode = PHASERandomNodeDefinition(identifier: "randomNode")

// Connect leaf nodes to the tree and set the weights. 
randomNode.addSubtree(footstep1, weight: 10)
randomNode.addSubtree(footstep2, weight: 5)
randomNode.addSubtree(footstep3, weight: 1)
```

**Objective-C**

```objc
// Create several nodes from prior-registered footstep sound assets.
PHASESamplerNodeDefinition* footstep1 = 
    [[PHASESamplerNodeDefinition alloc] 
        initWithSoundAssetUID:@"footstep1" 
        mixerDefinition:mixNode uid:@"footstep1"];
PHASESamplerNodeDefinition* footstep2 = 
    [[PHASESamplerNodeDefinition alloc] 
        initWithSoundAssetUID:@"footstep2" 
        mixerDefinition:mixNode uid:@"footstep2"];
PHASESamplerNodeDefinition* footstep3 = 
    [[PHASESamplerNodeDefinition alloc] 
        initWithSoundAssetUID:@"footstep3" 
        mixerDefinition:mixNode uid:@"footstep3"];

// Create the random node.
PHASERandomNodeDefinition* randomNode = 
    [[PHASERandomNodeDefinition alloc] initWithUID:@"randomNode"];

// Connect leaf nodes to the tree and set the weights. 
[randomNode addSubtree:footstep1 weight:@10];
[randomNode addSubtree:footstep2 weight:@5];
[randomNode addSubtree:footstep3 weight:@1];
```

## Topics

### Creating a Node

- [init()](phaserandomnodedefinition/init%28%29.md): Creates a random node.
- [init(identifier:)](phaserandomnodedefinition/init%28identifier_%29.md): Creates a random node with the name you specify.

### Adding Descendent Nodes

- [addSubtree(\_:weight:)](phaserandomnodedefinition/addsubtree%28__weight_%29.md): Adds a node tree that’s one of the random-selection options.

### Defining Selection Queue Length

- [uniqueSelectionQueueLength](phaserandomnodedefinition/uniqueselectionqueuelength.md): The length of the unique selection queue.

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
- [PHASEBlendNodeDefinition](phaseblendnodedefinition.md): A node that smoothly fades between the audio of its child nodes.
- [PHASEContainerNodeDefinition](phasecontainernodedefinition.md): A node that plays all its children at the same time.

# PHASERandomNodeDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A sound event node that invokes one of its child nodes at random.

## Declaration

```objectivec
@interface PHASERandomNodeDefinition : PHASESoundEventNodeDefinition
```

<a id="overview"></a>

## Overview

When the framework invokes a random node, it passes the invocation on to one of its children at random. The weight you choose for a child node in the [addSubtree:weight:](phaserandomnodedefinition/addsubtree%28__weight_%29.md) argument skews the node’s selection chances.

<a id="Choose-from-Alternate-Sounds"></a>

### Choose from Alternate Sounds

This class can model real-world cases where an event varies slightly, such as when footsteps sound slightly different because of the unique ground composition at each step.

![Illustration of a flowchart that represents a sound event node tree. The chart contains three boxes, which represent nodes. At left, a box labeled Random Node extends an arrow, which points to a box in the upper right that’s labeled Sampler Node Footstep Variation One. The box labeled Random Node extends another arrow, which points to a box in the lower right that’s labeled Sampler Node Footstep Variation Two. ](https://developer.apple.com/images/com.apple.phase/media-3918860@2x.png)

The following code creates an instance of this class that selects from three different footstep sounds. The weights determine that an uncommon footstep noise plays half as frequently as the common footstep. And a third footstep noise plays 10% of the time.

**Swift**

```swift
// Create several nodes from prior-registered footstep sound assets.
let footstep1 = PHASESamplerNodeDefinition(
    soundAssetIdentifier: "footstep1",
    mixerDefinition: myMixer, identifier: "footstep1")
let footstep2 = PHASESamplerNodeDefinition(
    soundAssetIdentifier: "footstep2",
    mixerDefinition: myMixer, identifier: "footstep2")
let footstep3 = PHASESamplerNodeDefinition(
    soundAssetIdentifier: "footstep3",    
    mixerDefinition: myMixer, identifier: "footstep3")

// Create the random node.
let randomNode = PHASERandomNodeDefinition(identifier: "randomNode")

// Connect leaf nodes to the tree and set the weights. 
randomNode.addSubtree(footstep1, weight: 10)
randomNode.addSubtree(footstep2, weight: 5)
randomNode.addSubtree(footstep3, weight: 1)
```

**Objective-C**

```objc
// Create several nodes from prior-registered footstep sound assets.
PHASESamplerNodeDefinition* footstep1 = 
    [[PHASESamplerNodeDefinition alloc] 
        initWithSoundAssetUID:@"footstep1" 
        mixerDefinition:mixNode uid:@"footstep1"];
PHASESamplerNodeDefinition* footstep2 = 
    [[PHASESamplerNodeDefinition alloc] 
        initWithSoundAssetUID:@"footstep2" 
        mixerDefinition:mixNode uid:@"footstep2"];
PHASESamplerNodeDefinition* footstep3 = 
    [[PHASESamplerNodeDefinition alloc] 
        initWithSoundAssetUID:@"footstep3" 
        mixerDefinition:mixNode uid:@"footstep3"];

// Create the random node.
PHASERandomNodeDefinition* randomNode = 
    [[PHASERandomNodeDefinition alloc] initWithUID:@"randomNode"];

// Connect leaf nodes to the tree and set the weights. 
[randomNode addSubtree:footstep1 weight:@10];
[randomNode addSubtree:footstep2 weight:@5];
[randomNode addSubtree:footstep3 weight:@1];
```

## Topics

### Creating a Node

- [init](phaserandomnodedefinition/init%28%29.md): Creates a random node.
- [initWithIdentifier:](phaserandomnodedefinition/init%28identifier_%29.md): Creates a random node with the name you specify.

### Adding Descendent Nodes

- [addSubtree:weight:](phaserandomnodedefinition/addsubtree%28__weight_%29.md): Adds a node tree that’s one of the random-selection options.

### Defining Selection Queue Length

- [uniqueSelectionQueueLength](phaserandomnodedefinition/uniqueselectionqueuelength.md): The length of the unique selection queue.

## Relationships

### Inherits From

- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md)

## See Also

### Control Nodes

- [PHASESwitchNodeDefinition](phaseswitchnodedefinition.md): A node that passes invocation to only one of its child nodes.
- [PHASEBlendNodeDefinition](phaseblendnodedefinition.md): A node that smoothly fades between the audio of its child nodes.
- [PHASEContainerNodeDefinition](phasecontainernodedefinition.md): A node that plays all its children at the same time.
