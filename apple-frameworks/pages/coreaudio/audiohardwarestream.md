> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarestream](https://developer.apple.com/documentation/coreaudio/audiohardwarestream)

# AudioHardwareStream

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

Instances of the AudioHardwareStream class encapsulate a single audio stream, which represents a single buffer of data for transferring across the user/kernel boundary. As such, AudioStreams are the gatekeepers of format information. Each has its own format and list of available formats.

## Declaration

```swift
class AudioHardwareStream
```

## Topics

### Initializers

- [init(id:)](audiohardwarestream/init%28id_%29.md)

### Instance Properties

- [availablePhysicalFormats](audiohardwarestream/availablephysicalformats.md): An array of AudioStreamRangedDescriptions that describe the available data formats for the stream. The physical format refers to the data format in which the hardware for the owning device performs its IO transactions.
- [availableVirtualFormats](audiohardwarestream/availablevirtualformats.md): An array of AudioStreamRangedDescriptions that describe the available data formats for the stream. The virtual format refers to the data format in which all IOProcs for the owning device will perform IO transactions.
- [direction](audiohardwarestream/direction.md): An AudioHardwareDirection indicating whether this is an input or output stream.
- [isActive](audiohardwarestream/isactive.md): A Bool where a value of true indicates that the stream is enabled for IO.
- [latency](audiohardwarestream/latency.md): An Int containing the number of frames of latency in the stream.
- [physicalFormat](audiohardwarestream/physicalformat.md): An AudioStreamBasicDescription that describes the current data format for the stream. The physical format refers to the data format in which the hardware for the owning device performs its IO transactions.
- [startingChannel](audiohardwarestream/startingchannel.md): An Int that specifies the first element in the owning device that corresponds to element one of this stream.
- [terminalType](audiohardwarestream/terminaltype.md): A UInt32 whose value describes the general kind of functionality attached to the stream. Constants for some of the values for this property can be found in the enum in the AudioStream Constants section of AudioHardwareBase.h.
- [virtualFormat](audiohardwarestream/virtualformat.md): An AudioStreamBasicDescription that describes the current data format for the stream. The virtual format refers to the data format in which all IOProcs for the owning device will perform IO transactions.

### Instance Methods

- [setIsActive(\_:)](audiohardwarestream/setisactive%28__%29.md): Set the isActive property.
- [setPhysicalFormat(\_:)](audiohardwarestream/setphysicalformat%28__%29.md): Set the physicalFormat property.
- [setVirtualFormat(\_:)](audiohardwarestream/setvirtualformat%28__%29.md): Set the virtualFormat property.

## Relationships

### Inherits From

- [AudioHardwareObject](audiohardwareobject.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
