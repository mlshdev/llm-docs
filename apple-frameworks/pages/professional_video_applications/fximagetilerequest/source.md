> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/fximagetilerequest/source

# source (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** FxPlug 4.0+

The type of image input requested.

## Declaration

```swift
var source: FxImageTileRequestSource { get }
```

<a id="discussion"></a>

## Discussion

Set the type to the filter’s input or one of its parameters.

## See Also

### Instance Properties

- [includeLeadingFilters](includeleadingfilters.md): Add filters from other FxPlug-ins.
- [parameterID](parameterid.md): The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`
- [requestTime](requesttime.md): The time to pull the images.

# source (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

The type of image input requested.

## Declaration

```objectivec
@property (nonatomic, readonly) FxImageTileRequestSource source;
```

<a id="discussion"></a>

## Discussion

Set the type to the filter’s input or one of its parameters.

## See Also

### Instance Properties

- [includeLeadingFilters](includeleadingfilters.md): Add filters from other FxPlug-ins.
- [parameterID](parameterid.md): The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`
- [requestTime](requesttime.md): The time to pull the images.
