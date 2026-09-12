> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/streamwithlocalizedname:streamid:direction:clocktype:source:](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/streamwithlocalizedname:streamid:direction:clocktype:source:)

# streamWithLocalizedName:streamID:direction:clockType:source:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new stream.

## Declaration

```objectivec
+ (instancetype) streamWithLocalizedName:(NSString *) localizedName streamID:(NSUUID *) streamID direction:(CMIOExtensionStreamDirection) direction clockType:(CMIOExtensionStreamClockType) clockType source:(id<CMIOExtensionStreamSource>) source;
```

## Parameters

- `localizedName`: A localized name for the stream.
- `streamID`: A universally unique identifier for the stream.
- `direction`: The direction of the source, which indicates if it produces or consumes samples.
- `clockType`: A clock type for the stream.
- `source`: The stream source object.

<a id="return-value"></a>

## Return Value

A new stream object.

## See Also

### Creating a Stream

- [streamWithLocalizedName:streamID:direction:customClockConfiguration:source:](streamwithlocalizedname_streamid_direction_customclockconfiguration_source_.md): Returns a new stream that uses a custom clock configuration.
- [initWithLocalizedName:streamID:direction:clockType:source:](init%28localizedname_streamid_direction_clocktype_source_%29.md): Creates a stream.
- [initWithLocalizedName:streamID:direction:customClockConfiguration:source:](init%28localizedname_streamid_direction_customclockconfiguration_source_%29.md): Creates a stream that uses a custom clock configuration.
