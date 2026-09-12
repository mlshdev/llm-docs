> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamsource](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamsource)

# CMIOExtensionStreamSource (Swift)

**Framework:** Core Media I/O  
**Kind:** Protocol  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A protocol for objects that act as stream sources.

## Declaration

```swift
protocol CMIOExtensionStreamSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Create a class that adopts this protocol to configure stream properties and manage the stream life cycle.

## Topics

### Accessing the Source Format

- [formats](cmioextensionstreamsource/formats.md): An array of formats that a stream supports.
- [CMIOExtensionStreamFormat](cmioextensionstreamformat.md): An object that describes the format of a media stream.

### Managing Stream Properties

- [availableProperties](cmioextensionstreamsource/availableproperties.md): A set of properties available for the stream.
- [streamProperties(forProperties:)](cmioextensionstreamsource/streamproperties%28forproperties_%29.md): Gets the states of specified properties.
- [setStreamProperties(\_:)](cmioextensionstreamsource/setstreamproperties%28__%29.md): Sets the property state of a stream.

### Managing a Stream

- [authorizedToStartStream(for:)](cmioextensionstreamsource/authorizedtostartstream%28for_%29.md): Determines whether to authorize an app to use this stream.
- [startStream()](cmioextensionstreamsource/startstream%28%29.md): Starts the stream of media data.
- [stopStream()](cmioextensionstreamsource/stopstream%28%29.md): Stops the stream of media data.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Streams

- [CMIOExtensionStream](cmioextensionstream.md): An object that represents a stream of media data.
- [CMIOExtensionStreamProperties](cmioextensionstreamproperties.md): An object that describes the properties of an extension stream.
- [CMIOExtensionClient](cmioextensionclient.md): An object that represents a client of the extension.

# CMIOExtensionStreamSource (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Protocol  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A protocol for objects that act as stream sources.

## Declaration

```objectivec
@protocol CMIOExtensionStreamSource <NSObject>
```

<a id="overview"></a>

## Overview

Create a class that adopts this protocol to configure stream properties and manage the stream life cycle.

## Topics

### Accessing the Source Format

- [formats](cmioextensionstreamsource/formats.md): An array of formats that a stream supports.
- [CMIOExtensionStreamFormat](cmioextensionstreamformat.md): An object that describes the format of a media stream.

### Managing Stream Properties

- [availableProperties](cmioextensionstreamsource/availableproperties.md): A set of properties available for the stream.
- [streamPropertiesForProperties:error:](cmioextensionstreamsource/streamproperties%28forproperties_%29.md): Gets the states of specified properties.
- [setStreamProperties:error:](cmioextensionstreamsource/setstreamproperties%28__%29.md): Sets the property state of a stream.

### Managing a Stream

- [authorizedToStartStreamForClient:](cmioextensionstreamsource/authorizedtostartstream%28for_%29.md): Determines whether to authorize an app to use this stream.
- [startStreamAndReturnError:](cmioextensionstreamsource/startstream%28%29.md): Starts the stream of media data.
- [stopStreamAndReturnError:](cmioextensionstreamsource/stopstream%28%29.md): Stops the stream of media data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Streams

- [CMIOExtensionStream](cmioextensionstream.md): An object that represents a stream of media data.
- [CMIOExtensionStreamProperties](cmioextensionstreamproperties.md): An object that describes the properties of an extension stream.
- [CMIOExtensionClient](cmioextensionclient.md): An object that represents a client of the extension.
