> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/streamwithlocalizedname:streamid:direction:customclockconfiguration:source:](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/streamwithlocalizedname:streamid:direction:customclockconfiguration:source:)

# streamWithLocalizedName:streamID:direction:customClockConfiguration:source:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new stream that uses a custom clock configuration.

## Declaration

```objectivec
+ (instancetype) streamWithLocalizedName:(NSString *) localizedName streamID:(NSUUID *) streamID direction:(CMIOExtensionStreamDirection) direction customClockConfiguration:(CMIOExtensionStreamCustomClockConfiguration *) customClockConfiguration source:(id<CMIOExtensionStreamSource>) source;
```

## Parameters

- `localizedName`: A localized name for the stream.
- `streamID`: A universally unique identifier for the stream.
- `direction`: The direction of the source, which indicates if it produces or consumes samples.
- `customClockConfiguration`: A custom clock configuration for the stream to use.
- `source`: The stream source object.

<a id="return-value"></a>

## Return Value

A new stream object.

## See Also

### Creating a Stream

- [streamWithLocalizedName:streamID:direction:clockType:source:](streamwithlocalizedname_streamid_direction_clocktype_source_.md): Returns a new stream.
- [initWithLocalizedName:streamID:direction:clockType:source:](init%28localizedname_streamid_direction_clocktype_source_%29.md): Creates a stream.
- [initWithLocalizedName:streamID:direction:customClockConfiguration:source:](init%28localizedname_streamid_direction_customclockconfiguration_source_%29.md): Creates a stream that uses a custom clock configuration.
