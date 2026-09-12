> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream_status_constants](https://developer.apple.com/documentation/foundation/stream_status_constants)

# Stream Status Constants (Swift)

**Framework:** Foundation  
**Kind:** API Collection

These constants indicate the current status of a stream. They are returned by [streamStatus](stream/streamstatus.md).

## Topics

### Constants

- [Stream.Status.notOpen](stream/status/notopen.md): The stream is not open for reading or writing. This status is returned before the underlying call to open a stream but after it’s been created.
- [Stream.Status.opening](stream/status/opening.md): The stream is in the process of being opened for reading or for writing. For network streams, this status might include the time after the stream was opened, but while network DNS resolution is happening.
- [Stream.Status.open](stream/status/open.md): The stream is open, but no reading or writing is occurring.
- [Stream.Status.reading](stream/status/reading.md): Data is being read from the stream. This status would be returned if code on another thread were to call [streamStatus](stream/streamstatus.md) on the stream while a [read(\_:maxLength:)](inputstream/read%28__maxlength_%29.md) call ([InputStream](inputstream.md)) was in progress.
- [Stream.Status.writing](stream/status/writing.md): Data is being written to the stream. This status would be returned if code on another thread were to call [streamStatus](stream/streamstatus.md) on the stream while a [write(\_:maxLength:)](outputstream/write%28__maxlength_%29.md) call ([OutputStream](outputstream.md)) was in progress.
- [Stream.Status.atEnd](stream/status/atend.md): There is no more data to read, or no more data can be written to the stream. When this status is returned, the stream is in a “non-blocking” mode and no data are available.
- [Stream.Status.closed](stream/status/closed.md): The stream is closed ([close()](stream/close%28%29.md) has been called on it).
- [Stream.Status.error](stream/status/error.md): The remote end of the connection can’t be contacted, or the connection has been severed for some other reason.

## See Also

### Constants

- [Stream.Status](stream/status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream.Event](stream/event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream(\_:handle:)](streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [StreamNetworkServiceTypeValue](streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [StreamSOCKSProxyConfiguration](streamsocksproxyconfiguration.md)
- [StreamSOCKSProxyVersion](streamsocksproxyversion.md)
- [StreamSocketSecurityLevel](streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [Stream.PropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [property(forKey:)](stream/property%28forkey_%29.md) and setting properties with [setProperty(\_:forKey:)](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.

# Stream Status Constants (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

These constants indicate the current status of a stream. They are returned by [streamStatus](stream/streamstatus.md).

## Topics

### Constants

- [NSStreamStatusNotOpen](stream/status/notopen.md): The stream is not open for reading or writing. This status is returned before the underlying call to open a stream but after it’s been created.
- [NSStreamStatusOpening](stream/status/opening.md): The stream is in the process of being opened for reading or for writing. For network streams, this status might include the time after the stream was opened, but while network DNS resolution is happening.
- [NSStreamStatusOpen](stream/status/open.md): The stream is open, but no reading or writing is occurring.
- [NSStreamStatusReading](stream/status/reading.md): Data is being read from the stream. This status would be returned if code on another thread were to call [streamStatus](stream/streamstatus.md) on the stream while a [read:maxLength:](inputstream/read%28__maxlength_%29.md) call ([NSInputStream](inputstream.md)) was in progress.
- [NSStreamStatusWriting](stream/status/writing.md): Data is being written to the stream. This status would be returned if code on another thread were to call [streamStatus](stream/streamstatus.md) on the stream while a [write:maxLength:](outputstream/write%28__maxlength_%29.md) call ([NSOutputStream](outputstream.md)) was in progress.
- [NSStreamStatusAtEnd](stream/status/atend.md): There is no more data to read, or no more data can be written to the stream. When this status is returned, the stream is in a “non-blocking” mode and no data are available.
- [NSStreamStatusClosed](stream/status/closed.md): The stream is closed ([close](stream/close%28%29.md) has been called on it).
- [NSStreamStatusError](stream/status/error.md): The remote end of the connection can’t be contacted, or the connection has been severed for some other reason.

## See Also

### Constants

- [NSStreamStatus](stream/status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [NSStreamEvent](stream/event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream:handleEvent:](streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [NSStreamNetworkServiceTypeValue](streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [NSStreamSOCKSProxyConfiguration](streamsocksproxyconfiguration.md)
- [NSStreamSOCKSProxyVersion](streamsocksproxyversion.md)
- [NSStreamSocketSecurityLevel](streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [NSStreamPropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [propertyForKey:](stream/property%28forkey_%29.md) and setting properties with [setProperty:forKey:](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.
