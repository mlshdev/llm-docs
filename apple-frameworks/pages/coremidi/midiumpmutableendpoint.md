> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiumpmutableendpoint](https://developer.apple.com/documentation/coremidi/midiumpmutableendpoint)

# MIDIUMPMutableEndpoint (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
class MIDIUMPMutableEndpoint
```

## Topics

### Initializers

- [init(name:deviceInfo:productInstanceID:MIDIProtocol:destinationCallback:)](midiumpmutableendpoint/init%28name_deviceinfo_productinstanceid_midiprotocol_destinationcallback_%29-23tn4.md)
- [init(name:deviceInfo:productInstanceID:midiProtocol:destinationCallback:)](midiumpmutableendpoint/init%28name_deviceinfo_productinstanceid_midiprotocol_destinationcallback_%29-1bsgt.md)

### Instance Properties

- [isEnabled](midiumpmutableendpoint/isenabled.md)
- [mutableFunctionBlocks](midiumpmutableendpoint/mutablefunctionblocks.md)

### Instance Methods

- [registerFunctionBlocks(\_:markAsStatic:)](midiumpmutableendpoint/registerfunctionblocks%28__markasstatic_%29.md)
- [setEnabled(\_:)](midiumpmutableendpoint/setenabled%28__%29.md)
- [setName(\_:)](midiumpmutableendpoint/setname%28__%29.md)

## Relationships

### Inherits From

- [MIDIUMPEndpoint](midiumpendpoint.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MIDIUMPMutableEndpoint (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
@interface MIDIUMPMutableEndpoint : MIDIUMPEndpoint
```

## Topics

### Instance Properties

- [isEnabled](midiumpmutableendpoint/isenabled.md)
- [mutableFunctionBlocks](midiumpmutableendpoint/mutablefunctionblocks.md)

### Instance Methods

- [initWithName:deviceInfo:productInstanceID:MIDIProtocol:destinationCallback:](midiumpmutableendpoint/init%28name_deviceinfo_productinstanceid_midiprotocol_destinationcallback_%29-1bsgt.md)
- [registerFunctionBlocks:markAsStatic:error:](midiumpmutableendpoint/registerfunctionblocks%28__markasstatic_%29.md)
- [setEnabled:error:](midiumpmutableendpoint/setenabled%28__%29.md)
- [setName:error:](midiumpmutableendpoint/setname%28__%29.md)

## Relationships

### Inherits From

- [MIDIUMPEndpoint](midiumpendpoint.md)
