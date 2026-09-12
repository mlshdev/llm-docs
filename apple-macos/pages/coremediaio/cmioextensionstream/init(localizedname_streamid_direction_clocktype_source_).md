> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/init(localizedname:streamid:direction:clocktype:source:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/init(localizedname:streamid:direction:clocktype:source:))

# init(localizedName:streamID:direction:clockType:source:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a stream.

## Declaration

```swift
init(localizedName: String, streamID: UUID, direction: CMIOExtensionStream.Direction, clockType: CMIOExtensionStream.ClockType, source: any CMIOExtensionStreamSource)
```

## Parameters

- `localizedName`: A localized name for the stream.
- `streamID`: A universally unique identifier for the stream.
- `direction`: The direction of the source, which indicates if it produces or consumes samples.
- `clockType`: A clock type for the stream.
- `source`: The stream source object.

## See Also

### Creating a Stream

- [init(localizedName:streamID:direction:customClockConfiguration:source:)](init%28localizedname_streamid_direction_customclockconfiguration_source_%29.md): Creates a stream that uses a custom clock configuration.

# initWithLocalizedName:streamID:direction:clockType:source: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a stream.

## Declaration

```objectivec
- (instancetype) initWithLocalizedName:(NSString *) localizedName streamID:(NSUUID *) streamID direction:(CMIOExtensionStreamDirection) direction clockType:(CMIOExtensionStreamClockType) clockType source:(id<CMIOExtensionStreamSource>) source;
```

## Parameters

- `localizedName`: A localized name for the stream.
- `streamID`: A universally unique identifier for the stream.
- `direction`: The direction of the source, which indicates if it produces or consumes samples.
- `clockType`: A clock type for the stream.
- `source`: The stream source object.

## See Also

### Creating a Stream

- [streamWithLocalizedName:streamID:direction:clockType:source:](streamwithlocalizedname_streamid_direction_clocktype_source_.md): Returns a new stream.
- [streamWithLocalizedName:streamID:direction:customClockConfiguration:source:](streamwithlocalizedname_streamid_direction_customclockconfiguration_source_.md): Returns a new stream that uses a custom clock configuration.
- [initWithLocalizedName:streamID:direction:customClockConfiguration:source:](init%28localizedname_streamid_direction_customclockconfiguration_source_%29.md): Creates a stream that uses a custom clock configuration.
