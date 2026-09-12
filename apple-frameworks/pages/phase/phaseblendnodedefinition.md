> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseblendnodedefinition](https://developer.apple.com/documentation/phase/phaseblendnodedefinition)

# PHASEBlendNodeDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A node that smoothly fades between the audio of its child nodes.

## Declaration

```swift
class PHASEBlendNodeDefinition
```

<a id="overview"></a>

## Overview

This class defines a threshold and a numeric parameter the app increases and decreases to fade between child nodes. Each child node defines a range within the threshold in which the child node plays audio. As the app moves the blend parameter value between `0` and the threshold, the blend node plays the audio of its child nodes whose range and fade curve overlap at the current value.

![Illustration of a flowchart that represents a sound event node tree. The chart contains three boxes, which represent nodes. At left, a box labeled Blend Node extends an arrow, which points to a box in the upper right that’s labeled, Sampler Node Cobblestone Footstep. The box labeled Random Node extends another arrow, which points to a box in the lower right that’s labeled, Sampler Node Grass Footstep. A verticle bar ranges from top sampler node to the bottom sampler node to indicate the range in which both just one node actively plays audio, or both nodes actively play audio, and to what volume they play. ](https://developer.apple.com/images/com.apple.phase/media-3918862@2x.png)

<a id="Play-a-Blend-of-Simultaneous-Audio-Data"></a>

### Play a Blend of Simultaneous Audio Data

To gradually change the audio that a sound event plays, define blend thresholds and a number metaparameter that incrementally increases or decreases between the thresholds. For example, the following code sets up a sound event hierarchy containing two sampler nodes that play audio, with each one modeling a different terrain. The app sets the metaparameter value based on the value of the terrain the player stands on. When the app starts a sound event from this hierarchy, PHASE plays:

- A grass footstep for terrain values between `0` and `0.33`
- A cobblestone footstep for terrain values between `0.67` and `1.0`
- A blend of both footstep sounds for values between `0.33` and `0.67`

```swift
// Create a meta parameter definition that chooses among different terrains.
let terrainBlendParameter = PHASENumberMetaParameterDefinition(
    value: 0.5, 
    minimum: 0.0,
    maximum: 1.0,
    identifier: "terrain")

// Create a blend node and pass in the meta parameter.
let terrainBlendNode = PHASEBlendNodeDefinition(blendMetaParameterDefinition: terrainBlendParameter)

// Add two samples nodes to blend between.
terrainBlendNode.addRangeForInputValuesAbove( 
    value: 0.33,
    fullGainAtValue: 1.0,
    fadeCurveType: .linear,
    subtree:cobblestoneSamplerNode)

terrainBlendNode.addRangeForInputValuesBelow( 
    value: 0.67,
    fullGainAtValue: 0.0,
    fadeCurveType: .linear,
    subtree:grassSamplerNode)

// Create a sound event.
var footstepEvent: PHASESoundEvent?
do { footstepEvent = try PHASESoundEvent(engine: myEngine, assetIdentifier: "terrain") } 
catch { fatalError("Failed to create the sound event due to: \(error)") }        

// Set the "terrain" metaparameter value to a midpoint that 
//  plays audio from both subtrees at an equal volume.
guard let terrainParameter = footstepEvent?.metaParameters["terrain"] else { fatalError() }
terrainParameter.value = 0.5

// Play the sound and hear a mix of both terrains.
footstepEvent?.start() { reason in 
/* Perform completion tasks. */ }
```

## Topics

### Creating a Blend Node

- [init(blendMetaParameterDefinition:)](phaseblendnodedefinition/init%28blendmetaparameterdefinition_%29.md): Creates a blend node with a maxiumum blend range value.
- [init(blendMetaParameterDefinition:identifier:)](phaseblendnodedefinition/init%28blendmetaparameterdefinition_identifier_%29.md): Creates a named blend node with a maxiumum blend range value.
- [init(spatialMixerDefinition:)](phaseblendnodedefinition/init%28spatialmixerdefinition_%29.md): Creates a blend node for spatial audio output.
- [init(spatialMixerDefinition:identifier:)](phaseblendnodedefinition/init%28spatialmixerdefinition_identifier_%29.md): Creates a named blend node for spatial audio output.

### Accessing Blend Properties

- [blendParameterDefinition](phaseblendnodedefinition/blendparameterdefinition.md): The meta parameter definition that caps the blend range.
- [spatialMixerDefinitionForDistance](phaseblendnodedefinition/spatialmixerdefinitionfordistance.md): An object that combines spatial audio layers.

### Adding Child Nodes

- [addRange(envelope:subtree:)](phaseblendnodedefinition/addrange%28envelope_subtree_%29.md): Adds a child node with an envelope.
- [addRangeForInputValuesAbove(value:fullGainAtValue:fadeCurveType:subtree:)](phaseblendnodedefinition/addrangeforinputvaluesabove%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends above a given value.
- [addRangeForInputValuesBelow(value:fullGainAtValue:fadeCurveType:subtree:)](phaseblendnodedefinition/addrangeforinputvaluesbelow%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends below a given value.
- [addRangeForInputValuesBetween(lowValue:highValue:fullGainAtLowValue:fullGainAtHighValue:lowFadeCurveType:highFadeCurveType:subtree:)](phaseblendnodedefinition/addrangeforinputvaluesbetween%28lowvalue_highvalue_fullgainatlowvalue_fullgainathighvalue_lowfadecurvetype_highfadecurvetype_subtree_%29.md): Adds a child node that blends between a given high and low value.

### Initializers

- [init(distanceBlendWithSpatialMixerDefinition:)](phaseblendnodedefinition/init%28distanceblendwithspatialmixerdefinition_%29.md)
- [init(distanceBlendWithSpatialMixerDefinition:identifier:)](phaseblendnodedefinition/init%28distanceblendwithspatialmixerdefinition_identifier_%29.md)

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
- [PHASEContainerNodeDefinition](phasecontainernodedefinition.md): A node that plays all its children at the same time.

# PHASEBlendNodeDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A node that smoothly fades between the audio of its child nodes.

## Declaration

```objectivec
@interface PHASEBlendNodeDefinition : PHASESoundEventNodeDefinition
```

<a id="overview"></a>

## Overview

This class defines a threshold and a numeric parameter the app increases and decreases to fade between child nodes. Each child node defines a range within the threshold in which the child node plays audio. As the app moves the blend parameter value between `0` and the threshold, the blend node plays the audio of its child nodes whose range and fade curve overlap at the current value.

![Illustration of a flowchart that represents a sound event node tree. The chart contains three boxes, which represent nodes. At left, a box labeled Blend Node extends an arrow, which points to a box in the upper right that’s labeled, Sampler Node Cobblestone Footstep. The box labeled Random Node extends another arrow, which points to a box in the lower right that’s labeled, Sampler Node Grass Footstep. A verticle bar ranges from top sampler node to the bottom sampler node to indicate the range in which both just one node actively plays audio, or both nodes actively play audio, and to what volume they play. ](https://developer.apple.com/images/com.apple.phase/media-3918862@2x.png)

<a id="Play-a-Blend-of-Simultaneous-Audio-Data"></a>

### Play a Blend of Simultaneous Audio Data

To gradually change the audio that a sound event plays, define blend thresholds and a number metaparameter that incrementally increases or decreases between the thresholds. For example, the following code sets up a sound event hierarchy containing two sampler nodes that play audio, with each one modeling a different terrain. The app sets the metaparameter value based on the value of the terrain the player stands on. When the app starts a sound event from this hierarchy, PHASE plays:

- A grass footstep for terrain values between `0` and `0.33`
- A cobblestone footstep for terrain values between `0.67` and `1.0`
- A blend of both footstep sounds for values between `0.33` and `0.67`

```swift
// Create a meta parameter definition that chooses among different terrains.
let terrainBlendParameter = PHASENumberMetaParameterDefinition(
    value: 0.5, 
    minimum: 0.0,
    maximum: 1.0,
    identifier: "terrain")

// Create a blend node and pass in the meta parameter.
let terrainBlendNode = PHASEBlendNodeDefinition(blendMetaParameterDefinition: terrainBlendParameter)

// Add two samples nodes to blend between.
terrainBlendNode.addRangeForInputValuesAbove( 
    value: 0.33,
    fullGainAtValue: 1.0,
    fadeCurveType: .linear,
    subtree:cobblestoneSamplerNode)

terrainBlendNode.addRangeForInputValuesBelow( 
    value: 0.67,
    fullGainAtValue: 0.0,
    fadeCurveType: .linear,
    subtree:grassSamplerNode)

// Create a sound event.
var footstepEvent: PHASESoundEvent?
do { footstepEvent = try PHASESoundEvent(engine: myEngine, assetIdentifier: "terrain") } 
catch { fatalError("Failed to create the sound event due to: \(error)") }        

// Set the "terrain" metaparameter value to a midpoint that 
//  plays audio from both subtrees at an equal volume.
guard let terrainParameter = footstepEvent?.metaParameters["terrain"] else { fatalError() }
terrainParameter.value = 0.5

// Play the sound and hear a mix of both terrains.
footstepEvent?.start() { reason in 
/* Perform completion tasks. */ }
```

## Topics

### Creating a Blend Node

- [initWithBlendMetaParameterDefinition:](phaseblendnodedefinition/init%28blendmetaparameterdefinition_%29.md): Creates a blend node with a maxiumum blend range value.
- [initWithBlendMetaParameterDefinition:identifier:](phaseblendnodedefinition/init%28blendmetaparameterdefinition_identifier_%29.md): Creates a named blend node with a maxiumum blend range value.
- [initDistanceBlendWithSpatialMixerDefinition:](phaseblendnodedefinition/init%28spatialmixerdefinition_%29.md): Creates a blend node for spatial audio output.
- [initDistanceBlendWithSpatialMixerDefinition:identifier:](phaseblendnodedefinition/init%28spatialmixerdefinition_identifier_%29.md): Creates a named blend node for spatial audio output.

### Accessing Blend Properties

- [blendParameterDefinition](phaseblendnodedefinition/blendparameterdefinition.md): The meta parameter definition that caps the blend range.
- [spatialMixerDefinitionForDistance](phaseblendnodedefinition/spatialmixerdefinitionfordistance.md): An object that combines spatial audio layers.

### Adding Child Nodes

- [addRangeWithEnvelope:subtree:](phaseblendnodedefinition/addrange%28envelope_subtree_%29.md): Adds a child node with an envelope.
- [addRangeForInputValuesAbove:fullGainAtValue:fadeCurveType:subtree:](phaseblendnodedefinition/addrangeforinputvaluesabove%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends above a given value.
- [addRangeForInputValuesBelow:fullGainAtValue:fadeCurveType:subtree:](phaseblendnodedefinition/addrangeforinputvaluesbelow%28value_fullgainatvalue_fadecurvetype_subtree_%29.md): Adds a child node that blends below a given value.
- [addRangeForInputValuesBetween:highValue:fullGainAtLowValue:fullGainAtHighValue:lowFadeCurveType:highFadeCurveType:subtree:](phaseblendnodedefinition/addrangeforinputvaluesbetween%28lowvalue_highvalue_fullgainatlowvalue_fullgainathighvalue_lowfadecurvetype_highfadecurvetype_subtree_%29.md): Adds a child node that blends between a given high and low value.

## Relationships

### Inherits From

- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md)

## See Also

### Control Nodes

- [PHASESwitchNodeDefinition](phaseswitchnodedefinition.md): A node that passes invocation to only one of its child nodes.
- [PHASERandomNodeDefinition](phaserandomnodedefinition.md): A sound event node that invokes one of its child nodes at random.
- [PHASEContainerNodeDefinition](phasecontainernodedefinition.md): A node that plays all its children at the same time.
