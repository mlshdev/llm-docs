> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice/streams](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/streams)

# streams (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of media streams attached to this device.

## Declaration

```swift
var streams: [CMIOExtensionStream] { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t key-value observable.

## See Also

### Managing Streams

- [addStream(\_:)](addstream%28__%29.md): Adds a stream to a device.
- [removeStream(\_:)](removestream%28__%29.md): Removes a stream from the device.

# streams (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of media streams attached to this device.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSArray<CMIOExtensionStream *> * streams;
```

<a id="Discussion"></a>

## Discussion

This property isn’t key-value observable.

## See Also

### Managing Streams

- [addStream:error:](addstream%28__%29.md): Adds a stream to a device.
- [removeStream:error:](removestream%28__%29.md): Removes a stream from the device.
