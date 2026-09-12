> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetilerequest/includeleadingfilters](https://developer.apple.com/documentation/professional_video_applications/fximagetilerequest/includeleadingfilters)

# includeLeadingFilters (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** FxPlug 4.0+

Add filters from other FxPlug-ins.

## Declaration

```swift
var includeLeadingFilters: Bool { get }
```

<a id="discussion"></a>

## Discussion

Set to true if you request the filter input and you want it to include the output of other FxPlugs applied before your filter. Each tile is pre-processed by filters higher in the processing order.

## See Also

### Instance Properties

- [parameterID](parameterid.md): The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`
- [requestTime](requesttime.md): The time to pull the images.
- [source](source.md): The type of image input requested.

# includeLeadingFilters (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

Add filters from other FxPlug-ins.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL includeLeadingFilters;
```

<a id="discussion"></a>

## Discussion

Set to true if you request the filter input and you want it to include the output of other FxPlugs applied before your filter. Each tile is pre-processed by filters higher in the processing order.

## See Also

### Instance Properties

- [parameterID](parameterid.md): The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`
- [requestTime](requesttime.md): The time to pull the images.
- [source](source.md): The type of image input requested.
