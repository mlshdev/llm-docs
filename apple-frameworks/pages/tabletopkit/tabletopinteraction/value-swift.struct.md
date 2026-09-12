> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/value-swift.struct](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/value-swift.struct)

# TabletopInteraction.Value

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A structure that provides the details about an interaction, such as the phase of the gesture and position of the equipment.

## Declaration

```swift
struct Value
```

## Topics

### Getting information about the equipment and game

- [startingEquipmentID](value-swift.struct/startingequipmentid.md): The equipment the interaction was started with
- [controlledEquipmentID](value-swift.struct/controlledequipmentid.md): The equipment the interaction is currently controlling
- [allowedDestinations](value-swift.struct/alloweddestinations.md): Deprecated. The allowed destinations that this interaction can target

### Getting the phases

- [gesturePhase](value-swift.struct/gesturephase.md): Deprecated. the current phase of the gesture
- [phase](value-swift.struct/phase-swift.property.md): the current phase of the overall interaction
- [TabletopInteraction.Value.Phase](value-swift.struct/phase-swift.enum.md): The stages of players interacting with equipment on the table.

### Getting the gestures

- [gesture](value-swift.struct/gesture-swift.property.md): If this is interaction is currently gesture driven, contains gesture specific additional information
- [TabletopInteraction.Value.Gesture](value-swift.struct/gesture-swift.struct.md): A structure that provides details specific to a gesture driven interaction.

### Getting the proposed locations

- [proposedDestination](value-swift.struct/proposeddestination.md): The proposed destination of the main interaction object, computed from the current pose of the object. During a toss simulation, the proposed destination is only updated if there is only one tossed equipment and it is the currently controlled equipment.
- [proposedFlip](value-swift.struct/proposedflip.md): Was the object flipped from the start of this interaction

### Getting the position and location

- [pose](value-swift.struct/pose.md): The current pose of the main interaction object
- [locationOnTable](value-swift.struct/locationontable.md): The 2D location of the main interaction object
- [endLocation](value-swift.struct/endlocation.md): The expected end location
- [endLocationOnTable](value-swift.struct/endlocationontable.md): The expected end 2D location of the main interaction object

### Getting identifiers

- [id](value-swift.struct/id.md): Identifier to recognize different interactions from one another
- [playerID](value-swift.struct/playerid.md): The player who is performing the interaction

### Getting the interaction properties

- [configuration](value-swift.struct/configuration.md): The current configuration of this interaction
- [constants](value-swift.struct/constants.md): The constants of this interaction
- [initialPose](value-swift.struct/initialpose.md): The pose of the equipment that the interaction was started with

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the value of the interaction

- [value](value-swift.property.md): The current value belonging to this interaction.
