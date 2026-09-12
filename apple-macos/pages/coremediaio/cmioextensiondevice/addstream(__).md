> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice/addstream(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/addstream(_:))

# addStream(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Adds a stream to a device.

## Declaration

```swift
func addStream(_ stream: CMIOExtensionStream) throws
```

## Parameters

- `stream`: A stream to add to a device.

## See Also

### Managing Streams

- [streams](streams.md): An array of media streams attached to this device.
- [removeStream(\_:)](removestream%28__%29.md): Removes a stream from the device.

# addStream:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Adds a stream to a device.

## Declaration

```objectivec
- (BOOL) addStream:(CMIOExtensionStream *) stream error:(NSError **) outError;
```

## Parameters

- `stream`: A stream to add to a device.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="return-value"></a>

## Return Value

`true` if the device successfully adds the stream; otherwise, `false`.

## See Also

### Managing Streams

- [streams](streams.md): An array of media streams attached to this device.
- [removeStream:error:](removestream%28__%29.md): Removes a stream from the device.
