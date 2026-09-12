> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetilerequest/parameterid](https://developer.apple.com/documentation/professional_video_applications/fximagetilerequest/parameterid)

# parameterID (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** FxPlug 4.0+

The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`

## Declaration

```swift
var parameterID: UInt32 { get }
```

<a id="discussion"></a>

## Discussion

If the `requestSource` is `kFxImageTileRequestSourceParameter`, then this parameter holds the `parameterID`, otherwise this parameter is ignored.

Set to `0` for effect source, otherwise the ID of the image parameter for the requested frame.` `

## See Also

### Instance Properties

- [includeLeadingFilters](includeleadingfilters.md): Add filters from other FxPlug-ins.
- [requestTime](requesttime.md): The time to pull the images.
- [source](source.md): The type of image input requested.

# parameterID (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`

## Declaration

```objectivec
@property (nonatomic, readonly) UInt32 parameterID;
```

<a id="discussion"></a>

## Discussion

If the `requestSource` is `kFxImageTileRequestSourceParameter`, then this parameter holds the `parameterID`, otherwise this parameter is ignored.

Set to `0` for effect source, otherwise the ID of the image parameter for the requested frame.` `

## See Also

### Instance Properties

- [includeLeadingFilters](includeleadingfilters.md): Add filters from other FxPlug-ins.
- [requestTime](requesttime.md): The time to pull the images.
- [source](source.md): The type of image input requested.
