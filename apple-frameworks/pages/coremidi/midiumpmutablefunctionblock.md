> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiumpmutablefunctionblock](https://developer.apple.com/documentation/coremidi/midiumpmutablefunctionblock)

# MIDIUMPMutableFunctionBlock (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
class MIDIUMPMutableFunctionBlock
```

## Topics

### Initializers

- [init(name:direction:firstGroup:totalGroupsSpanned:maxSysEx8Streams:MIDI1Info:UIHint:isEnabled:)](midiumpmutablefunctionblock/init%28name_direction_firstgroup_totalgroupsspanned_maxsysex8streams_midi1info_uihint_isenabled_%29-2i27v.md)
- [init(name:direction:firstGroup:totalGroupsSpanned:maxSysEx8Streams:midi1Info:uiHint:isEnabled:)](midiumpmutablefunctionblock/init%28name_direction_firstgroup_totalgroupsspanned_maxsysex8streams_midi1info_uihint_isenabled_%29-2izkf.md)

### Instance Properties

- [umpEndpoint](midiumpmutablefunctionblock/umpendpoint.md)

### Instance Methods

- [reconfigure(firstGroup:direction:MIDI1Info:UIHint:)](midiumpmutablefunctionblock/reconfigure%28firstgroup_direction_midi1info_uihint_%29.md)
- [setEnabled(\_:)](midiumpmutablefunctionblock/setenabled%28__%29.md)
- [setName(\_:)](midiumpmutablefunctionblock/setname%28__%29.md)

## Relationships

### Inherits From

- [MIDIUMPFunctionBlock](midiumpfunctionblock.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MIDIUMPMutableFunctionBlock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
@interface MIDIUMPMutableFunctionBlock : MIDIUMPFunctionBlock
```

## Topics

### Instance Properties

- [UMPEndpoint](midiumpmutablefunctionblock/umpendpoint.md)

### Instance Methods

- [initWithName:direction:firstGroup:totalGroupsSpanned:maxSysEx8Streams:MIDI1Info:UIHint:isEnabled:](midiumpmutablefunctionblock/init%28name_direction_firstgroup_totalgroupsspanned_maxsysex8streams_midi1info_uihint_isenabled_%29-2izkf.md)
- [reconfigureWithFirstGroup:direction:MIDI1Info:UIHint:error:](midiumpmutablefunctionblock/reconfigure%28firstgroup_direction_midi1info_uihint_%29.md)
- [setEnabled:error:](midiumpmutablefunctionblock/setenabled%28__%29.md)
- [setName:error:](midiumpmutablefunctionblock/setname%28__%29.md)

## Relationships

### Inherits From

- [MIDIUMPFunctionBlock](midiumpfunctionblock.md)
