> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidicontrolchangeevent/messagetype-swift.enum](https://developer.apple.com/documentation/avfaudio/avmidicontrolchangeevent/messagetype-swift.enum)

# AVMIDIControlChangeEvent.MessageType (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that represents control change event types.

## Declaration

```swift
enum MessageType
```

## Topics

### Event Types

- [AVMIDIControlChangeEvent.MessageType.bankSelect](messagetype-swift.enum/bankselect.md): An event type for switching bank selection.
- [AVMIDIControlChangeEvent.MessageType.modWheel](messagetype-swift.enum/modwheel.md): An event type for modulating a vibrato effect.
- [AVMIDIControlChangeEvent.MessageType.breath](messagetype-swift.enum/breath.md): An event type for a breath controller.
- [AVMIDIControlChangeEvent.MessageType.foot](messagetype-swift.enum/foot.md): An event type for sending continuous stream of values when using a foot controller.
- [AVMIDIControlChangeEvent.MessageType.portamentoTime](messagetype-swift.enum/portamentotime.md): An event type for controlling the portamento rate.
- [AVMIDIControlChangeEvent.MessageType.dataEntry](messagetype-swift.enum/dataentry.md): An event type for controlling the data entry parameters.
- [AVMIDIControlChangeEvent.MessageType.volume](messagetype-swift.enum/volume.md): An event type for controlling the channel volume.
- [AVMIDIControlChangeEvent.MessageType.balance](messagetype-swift.enum/balance.md): An event type for controlling the left and right channel balance.
- [AVMIDIControlChangeEvent.MessageType.pan](messagetype-swift.enum/pan.md): An event type for controlling the left and right channel pan.
- [AVMIDIControlChangeEvent.MessageType.expression](messagetype-swift.enum/expression.md): An event type that represents an expression controller.
- [AVMIDIControlChangeEvent.MessageType.sustain](messagetype-swift.enum/sustain.md): An event type for switching a damper pedal on or off.
- [AVMIDIControlChangeEvent.MessageType.portamento](messagetype-swift.enum/portamento.md): An event type for switching portamento on or off.
- [AVMIDIControlChangeEvent.MessageType.sostenuto](messagetype-swift.enum/sostenuto.md): An event type for switching sostenuto on or off.
- [AVMIDIControlChangeEvent.MessageType.soft](messagetype-swift.enum/soft.md): An event type for lowering the volume of the notes.
- [AVMIDIControlChangeEvent.MessageType.legatoPedal](messagetype-swift.enum/legatopedal.md): An event type for switching the legato pedal on or off.
- [AVMIDIControlChangeEvent.MessageType.hold2Pedal](messagetype-swift.enum/hold2pedal.md): An event type for holding notes.
- [AVMIDIControlChangeEvent.MessageType.filterResonance](messagetype-swift.enum/filterresonance.md): An event type for a filter resonance.
- [AVMIDIControlChangeEvent.MessageType.releaseTime](messagetype-swift.enum/releasetime.md): An event type for controlling the release time.
- [AVMIDIControlChangeEvent.MessageType.attackTime](messagetype-swift.enum/attacktime.md): An event type for controlling the attack time.
- [AVMIDIControlChangeEvent.MessageType.brightness](messagetype-swift.enum/brightness.md): An event type for controlling the brightness.
- [AVMIDIControlChangeEvent.MessageType.decayTime](messagetype-swift.enum/decaytime.md): An event type for controlling the decay time.
- [AVMIDIControlChangeEvent.MessageType.vibratoRate](messagetype-swift.enum/vibratorate.md): An event type for controlling the vibrato rate.
- [AVMIDIControlChangeEvent.MessageType.vibratoDepth](messagetype-swift.enum/vibratodepth.md): An event type for controlling the vibrato depth.
- [AVMIDIControlChangeEvent.MessageType.vibratoDelay](messagetype-swift.enum/vibratodelay.md): An event type for controlling the vibrato delay.
- [AVMIDIControlChangeEvent.MessageType.reverbLevel](messagetype-swift.enum/reverblevel.md): An event type for controlling the reverb level.
- [AVMIDIControlChangeEvent.MessageType.chorusLevel](messagetype-swift.enum/choruslevel.md): An event type for controlling the chorus level.
- [AVMIDIControlChangeEvent.MessageType.RPN_LSB](messagetype-swift.enum/rpn_lsb.md): An event type that represents the registered parameter number LSB.
- [AVMIDIControlChangeEvent.MessageType.RPN_MSB](messagetype-swift.enum/rpn_msb.md): An event type that represents the registered parameter number MSB.
- [AVMIDIControlChangeEvent.MessageType.allSoundOff](messagetype-swift.enum/allsoundoff.md): An event type for muting all sounding notes.
- [AVMIDIControlChangeEvent.MessageType.resetAllControllers](messagetype-swift.enum/resetallcontrollers.md): An event type for resetting all controllers to their default state.
- [AVMIDIControlChangeEvent.MessageType.allNotesOff](messagetype-swift.enum/allnotesoff.md): An event type for muting all sounding notes while maintaining the release time.
- [AVMIDIControlChangeEvent.MessageType.omniModeOff](messagetype-swift.enum/omnimodeoff.md): An event type for setting omni off mode.
- [AVMIDIControlChangeEvent.MessageType.omniModeOn](messagetype-swift.enum/omnimodeon.md): An event type for setting omni on mode.
- [AVMIDIControlChangeEvent.MessageType.monoModeOn](messagetype-swift.enum/monomodeon.md): An event type for setting the device mode to monophonic.
- [AVMIDIControlChangeEvent.MessageType.monoModeOff](messagetype-swift.enum/monomodeoff.md): An event type for setting the device mode to polyphonic.

### Initializers

- [init(rawValue:)](messagetype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a Control Change Event

- [value](value.md): The value of the control change event.
- [messageType](messagetype-swift.property.md): The type of control change message.

# AVMIDIControlChangeMessageType (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that represents control change event types.

## Declaration

```objectivec
enum AVMIDIControlChangeMessageType : NSInteger;
```

## Topics

### Event Types

- [AVMIDIControlChangeMessageTypeBankSelect](messagetype-swift.enum/bankselect.md): An event type for switching bank selection.
- [AVMIDIControlChangeMessageTypeModWheel](messagetype-swift.enum/modwheel.md): An event type for modulating a vibrato effect.
- [AVMIDIControlChangeMessageTypeBreath](messagetype-swift.enum/breath.md): An event type for a breath controller.
- [AVMIDIControlChangeMessageTypeFoot](messagetype-swift.enum/foot.md): An event type for sending continuous stream of values when using a foot controller.
- [AVMIDIControlChangeMessageTypePortamentoTime](messagetype-swift.enum/portamentotime.md): An event type for controlling the portamento rate.
- [AVMIDIControlChangeMessageTypeDataEntry](messagetype-swift.enum/dataentry.md): An event type for controlling the data entry parameters.
- [AVMIDIControlChangeMessageTypeVolume](messagetype-swift.enum/volume.md): An event type for controlling the channel volume.
- [AVMIDIControlChangeMessageTypeBalance](messagetype-swift.enum/balance.md): An event type for controlling the left and right channel balance.
- [AVMIDIControlChangeMessageTypePan](messagetype-swift.enum/pan.md): An event type for controlling the left and right channel pan.
- [AVMIDIControlChangeMessageTypeExpression](messagetype-swift.enum/expression.md): An event type that represents an expression controller.
- [AVMIDIControlChangeMessageTypeSustain](messagetype-swift.enum/sustain.md): An event type for switching a damper pedal on or off.
- [AVMIDIControlChangeMessageTypePortamento](messagetype-swift.enum/portamento.md): An event type for switching portamento on or off.
- [AVMIDIControlChangeMessageTypeSostenuto](messagetype-swift.enum/sostenuto.md): An event type for switching sostenuto on or off.
- [AVMIDIControlChangeMessageTypeSoft](messagetype-swift.enum/soft.md): An event type for lowering the volume of the notes.
- [AVMIDIControlChangeMessageTypeLegatoPedal](messagetype-swift.enum/legatopedal.md): An event type for switching the legato pedal on or off.
- [AVMIDIControlChangeMessageTypeHold2Pedal](messagetype-swift.enum/hold2pedal.md): An event type for holding notes.
- [AVMIDIControlChangeMessageTypeFilterResonance](messagetype-swift.enum/filterresonance.md): An event type for a filter resonance.
- [AVMIDIControlChangeMessageTypeReleaseTime](messagetype-swift.enum/releasetime.md): An event type for controlling the release time.
- [AVMIDIControlChangeMessageTypeAttackTime](messagetype-swift.enum/attacktime.md): An event type for controlling the attack time.
- [AVMIDIControlChangeMessageTypeBrightness](messagetype-swift.enum/brightness.md): An event type for controlling the brightness.
- [AVMIDIControlChangeMessageTypeDecayTime](messagetype-swift.enum/decaytime.md): An event type for controlling the decay time.
- [AVMIDIControlChangeMessageTypeVibratoRate](messagetype-swift.enum/vibratorate.md): An event type for controlling the vibrato rate.
- [AVMIDIControlChangeMessageTypeVibratoDepth](messagetype-swift.enum/vibratodepth.md): An event type for controlling the vibrato depth.
- [AVMIDIControlChangeMessageTypeVibratoDelay](messagetype-swift.enum/vibratodelay.md): An event type for controlling the vibrato delay.
- [AVMIDIControlChangeMessageTypeReverbLevel](messagetype-swift.enum/reverblevel.md): An event type for controlling the reverb level.
- [AVMIDIControlChangeMessageTypeChorusLevel](messagetype-swift.enum/choruslevel.md): An event type for controlling the chorus level.
- [AVMIDIControlChangeMessageTypeRPN_LSB](messagetype-swift.enum/rpn_lsb.md): An event type that represents the registered parameter number LSB.
- [AVMIDIControlChangeMessageTypeRPN_MSB](messagetype-swift.enum/rpn_msb.md): An event type that represents the registered parameter number MSB.
- [AVMIDIControlChangeMessageTypeAllSoundOff](messagetype-swift.enum/allsoundoff.md): An event type for muting all sounding notes.
- [AVMIDIControlChangeMessageTypeResetAllControllers](messagetype-swift.enum/resetallcontrollers.md): An event type for resetting all controllers to their default state.
- [AVMIDIControlChangeMessageTypeAllNotesOff](messagetype-swift.enum/allnotesoff.md): An event type for muting all sounding notes while maintaining the release time.
- [AVMIDIControlChangeMessageTypeOmniModeOff](messagetype-swift.enum/omnimodeoff.md): An event type for setting omni off mode.
- [AVMIDIControlChangeMessageTypeOmniModeOn](messagetype-swift.enum/omnimodeon.md): An event type for setting omni on mode.
- [AVMIDIControlChangeMessageTypeMonoModeOn](messagetype-swift.enum/monomodeon.md): An event type for setting the device mode to monophonic.
- [AVMIDIControlChangeMessageTypeMonoModeOff](messagetype-swift.enum/monomodeoff.md): An event type for setting the device mode to polyphonic.

## See Also

### Inspecting a Control Change Event

- [value](value.md): The value of the control change event.
- [messageType](messagetype-swift.property.md): The type of control change message.
