> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties)

# CMIOExtensionStreamProperties (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the properties of an extension stream.

## Declaration

```swift
class CMIOExtensionStreamProperties
```

## Topics

### Creating Stream Properties

- [init(dictionary:)](cmioextensionstreamproperties/init%28dictionary_%29.md): Creates a properties object that provides the specified properties and default states.

### Configuring Sink Properties

- [sinkBufferQueueSize](cmioextensionstreamproperties/sinkbufferqueuesize-9b80c.md): The buffer queue size.
- [sinkBuffersRequiredForStartup](cmioextensionstreamproperties/sinkbuffersrequiredforstartup-1bgyq.md): The number of buffers the stream requires for startup.
- [sinkBufferUnderrunCount](cmioextensionstreamproperties/sinkbufferunderruncount-1qmbb.md): The buffer underrun count.
- [sinkEndOfData](cmioextensionstreamproperties/sinkendofdata-8fswu.md): A value that indicates whether the stream has reached its end.

### Configuring Source Properties

- [activeFormatIndex](cmioextensionstreamproperties/activeformatindex-83u7z.md): The index of the active format.
- [frameDuration](cmioextensionstreamproperties/frameduration-4rnl9.md): The duration of the frame.
- [maxFrameDuration](cmioextensionstreamproperties/maxframeduration-5qqg.md): The maximum duration of a frame.

### Managing Property State

- [propertiesDictionary](cmioextensionstreamproperties/propertiesdictionary.md): A dictionary representation of the property state.
- [setPropertyState(\_:forProperty:)](cmioextensionstreamproperties/setpropertystate%28__forproperty_%29.md): Sets the state of the specified property.

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

- [CMIOExtensionStream](cmioextensionstream.md): An object that represents a stream of media data.
- [CMIOExtensionStreamSource](cmioextensionstreamsource.md): A protocol for objects that act as stream sources.
- [CMIOExtensionClient](cmioextensionclient.md): An object that represents a client of the extension.

# CMIOExtensionStreamProperties (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the properties of an extension stream.

## Declaration

```objectivec
@interface CMIOExtensionStreamProperties : NSObject
```

## Topics

### Creating Stream Properties

- [streamPropertiesWithDictionary:](cmioextensionstreamproperties/streampropertieswithdictionary_.md): Returns a new properties object that provides the specified properties and default states.
- [initWithDictionary:](cmioextensionstreamproperties/init%28dictionary_%29.md): Creates a properties object that provides the specified properties and default states.

### Configuring Sink Properties

- [sinkBufferQueueSize](cmioextensionstreamproperties/sinkbufferqueuesize-4kpug.md): The buffer queue size.
- [sinkBuffersRequiredForStartup](cmioextensionstreamproperties/sinkbuffersrequiredforstartup-4b5te.md): The number of buffers the stream requires for startup.
- [sinkBufferUnderrunCount](cmioextensionstreamproperties/sinkbufferunderruncount-9sph5.md): The buffer underrun count.
- [sinkEndOfData](cmioextensionstreamproperties/sinkendofdata-30he9.md): A value that indicates whether the stream has reached its end.

### Configuring Source Properties

- [activeFormatIndex](cmioextensionstreamproperties/activeformatindex-8czm7.md): The index of the active format.
- [frameDuration](cmioextensionstreamproperties/frameduration-lrfi.md): A dictionary representation of a frame duration.
- [maxFrameDuration](cmioextensionstreamproperties/maxframeduration-8fo5t.md): The maximum duration of a frame.

### Managing Property State

- [propertiesDictionary](cmioextensionstreamproperties/propertiesdictionary.md): A dictionary representation of the property state.
- [setPropertyState:forProperty:](cmioextensionstreamproperties/setpropertystate%28__forproperty_%29.md): Sets the state of the specified property.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Streams

- [CMIOExtensionStream](cmioextensionstream.md): An object that represents a stream of media data.
- [CMIOExtensionStreamSource](cmioextensionstreamsource.md): A protocol for objects that act as stream sources.
- [CMIOExtensionClient](cmioextensionclient.md): An object that represents a client of the extension.
