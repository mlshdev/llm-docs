> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/fximagetilerequest/requesttime

# requestTime (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** FxPlug 4.0+

The time to pull the images.

## Declaration

```swift
var requestTime: CMTime { get }
```

## See Also

### Instance Properties

- [includeLeadingFilters](includeleadingfilters.md): Add filters from other FxPlug-ins.
- [parameterID](parameterid.md): The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`
- [source](source.md): The type of image input requested.

# requestTime (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

The time to pull the images.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime requestTime;
```

## See Also

### Instance Properties

- [includeLeadingFilters](includeleadingfilters.md): Add filters from other FxPlug-ins.
- [parameterID](parameterid.md): The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`
- [source](source.md): The type of image input requested.
