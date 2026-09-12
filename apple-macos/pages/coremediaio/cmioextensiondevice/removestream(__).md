> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice/removestream(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/removestream(_:))

# removeStream(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Removes a stream from the device.

## Declaration

```swift
func removeStream(_ stream: CMIOExtensionStream) throws
```

## Parameters

- `stream`: The stream to remove from the device.

## See Also

### Managing Streams

- [streams](streams.md): An array of media streams attached to this device.
- [addStream(\_:)](addstream%28__%29.md): Adds a stream to a device.

# removeStream:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Removes a stream from the device.

## Declaration

```objectivec
- (BOOL) removeStream:(CMIOExtensionStream *) stream error:(NSError **) outError;
```

## Parameters

- `stream`: The stream to remove from the device.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="return-value"></a>

## Return Value

`true` if the device successfully removes the device; otherwise, `false`.

## See Also

### Managing Streams

- [streams](streams.md): An array of media streams attached to this device.
- [addStream:error:](addstream%28__%29.md): Adds a stream to a device.
