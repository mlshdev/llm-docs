> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream](https://developer.apple.com/documentation/coremediaio/cmioextensionstream)

# CMIOExtensionStream (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that represents a stream of media data.

## Declaration

```swift
class CMIOExtensionStream
```

## Mentioned In

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md)

<a id="overview"></a>

## Overview

A stream delivers media samples to or from a [CMIOExtensionDevice](cmioextensiondevice.md).

## Topics

### Creating a Stream

- [init(localizedName:streamID:direction:clockType:source:)](cmioextensionstream/init%28localizedname_streamid_direction_clocktype_source_%29.md): Creates a stream.
- [init(localizedName:streamID:direction:customClockConfiguration:source:)](cmioextensionstream/init%28localizedname_streamid_direction_customclockconfiguration_source_%29.md): Creates a stream that uses a custom clock configuration.

### Identifying a Stream

- [localizedName](cmioextensionstream/localizedname.md): A localized name for the stream.
- [streamID](cmioextensionstream/streamid.md): A universally unique identifier for the stream.

### Accessing Clients

- [streamingClients](cmioextensionstream/streamingclients.md): An array of clients of the stream.

### Inspecting a Stream

- [source](cmioextensionstream/source.md): The source object for the stream.
- [direction](cmioextensionstream/direction-swift.property.md): The data-flow direction of the stream.
- [CMIOExtensionStream.Direction](cmioextensionstream/direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [clockType](cmioextensionstream/clocktype-swift.property.md): A clock type for the stream.
- [CMIOExtensionStream.ClockType](cmioextensionstream/clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](cmioextensionstream/customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.

### Processing Data

- [consumeSampleBuffer(from:completionHandler:)](cmioextensionstream/consumesamplebuffer%28from_completionhandler_%29.md): Consumes a sample buffer from a client.
- [send(\_:discontinuity:hostTimeInNanoseconds:)](cmioextensionstream/send%28__discontinuity_hosttimeinnanoseconds_%29.md): Sends a media sample to stream client.
- [CMIOExtensionStream.DiscontinuityFlags](cmioextensionstream/discontinuityflags.md): Constants that specify the types of discontinuities that can occur in a media stream.

### Posting Property Changes

- [notifyPropertiesChanged(\_:)](cmioextensionstream/notifypropertieschanged%28__%29.md): Notifies clients about stream property changes.

### Managing Scheduled Output

- [notifyScheduledOutputChanged(\_:)](cmioextensionstream/notifyscheduledoutputchanged%28__%29.md): Notifies clients when a particular buffer is output.
- [CMIOExtensionScheduledOutput](cmioextensionscheduledoutput.md): An object that represents scheduled output.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Streams

- [CMIOExtensionStreamSource](cmioextensionstreamsource.md): A protocol for objects that act as stream sources.
- [CMIOExtensionStreamProperties](cmioextensionstreamproperties.md): An object that describes the properties of an extension stream.
- [CMIOExtensionClient](cmioextensionclient.md): An object that represents a client of the extension.

# CMIOExtensionStream (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that represents a stream of media data.

## Declaration

```objectivec
@interface CMIOExtensionStream : NSObject
```

## Mentioned In

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md)

<a id="overview"></a>

## Overview

A stream delivers media samples to or from a [CMIOExtensionDevice](cmioextensiondevice.md).

## Topics

### Creating a Stream

- [streamWithLocalizedName:streamID:direction:clockType:source:](cmioextensionstream/streamwithlocalizedname_streamid_direction_clocktype_source_.md): Returns a new stream.
- [streamWithLocalizedName:streamID:direction:customClockConfiguration:source:](cmioextensionstream/streamwithlocalizedname_streamid_direction_customclockconfiguration_source_.md): Returns a new stream that uses a custom clock configuration.
- [initWithLocalizedName:streamID:direction:clockType:source:](cmioextensionstream/init%28localizedname_streamid_direction_clocktype_source_%29.md): Creates a stream.
- [initWithLocalizedName:streamID:direction:customClockConfiguration:source:](cmioextensionstream/init%28localizedname_streamid_direction_customclockconfiguration_source_%29.md): Creates a stream that uses a custom clock configuration.

### Identifying a Stream

- [localizedName](cmioextensionstream/localizedname.md): A localized name for the stream.
- [streamID](cmioextensionstream/streamid.md): A universally unique identifier for the stream.

### Accessing Clients

- [streamingClients](cmioextensionstream/streamingclients.md): An array of clients of the stream.

### Inspecting a Stream

- [source](cmioextensionstream/source.md): The source object for the stream.
- [direction](cmioextensionstream/direction-swift.property.md): The data-flow direction of the stream.
- [CMIOExtensionStreamDirection](cmioextensionstream/direction-swift.enum.md): Constants that define the data-flow direction of the stream.
- [clockType](cmioextensionstream/clocktype-swift.property.md): A clock type for the stream.
- [CMIOExtensionStreamClockType](cmioextensionstream/clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](cmioextensionstream/customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.

### Processing Data

- [consumeSampleBufferFromClient:completionHandler:](cmioextensionstream/consumesamplebuffer%28from_completionhandler_%29.md): Consumes a sample buffer from a client.
- [sendSampleBuffer:discontinuity:hostTimeInNanoseconds:](cmioextensionstream/send%28__discontinuity_hosttimeinnanoseconds_%29.md): Sends a media sample to stream client.
- [CMIOExtensionStreamDiscontinuityFlags](cmioextensionstream/discontinuityflags.md): Constants that specify the types of discontinuities that can occur in a media stream.

### Posting Property Changes

- [notifyPropertiesChanged:](cmioextensionstream/notifypropertieschanged%28__%29.md): Notifies clients about stream property changes.

### Managing Scheduled Output

- [notifyScheduledOutputChanged:](cmioextensionstream/notifyscheduledoutputchanged%28__%29.md): Notifies clients when a particular buffer is output.
- [CMIOExtensionScheduledOutput](cmioextensionscheduledoutput.md): An object that represents scheduled output.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Streams

- [CMIOExtensionStreamSource](cmioextensionstreamsource.md): A protocol for objects that act as stream sources.
- [CMIOExtensionStreamProperties](cmioextensionstreamproperties.md): An object that describes the properties of an extension stream.
- [CMIOExtensionClient](cmioextensionclient.md): An object that represents a client of the extension.
