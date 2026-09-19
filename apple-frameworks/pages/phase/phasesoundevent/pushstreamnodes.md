> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasesoundevent/pushstreamnodes

# pushStreamNodes (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of audio streams for playback.

## Declaration

```swift
var pushStreamNodes: [String : PHASEPushStreamNode] { get }
```

<a id="Discussion"></a>

## Discussion

This dictionary populates a push-stream node for sound events that PHASE generates for [PHASEPushStreamNodeDefinition](../phasepushstreamnodedefinition.md) in your event node tree. The dictionary key is the stream-node definition’s [identifier](../phasedefinition/identifier.md).

# pushStreamNodes (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of audio streams for playback.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,PHASEPushStreamNode *> * pushStreamNodes;
```

<a id="Discussion"></a>

## Discussion

This dictionary populates a push-stream node for sound events that PHASE generates for [PHASEPushStreamNodeDefinition](../phasepushstreamnodedefinition.md) in your event node tree. The dictionary key is the stream-node definition’s [identifier](../phasedefinition/identifier.md).
