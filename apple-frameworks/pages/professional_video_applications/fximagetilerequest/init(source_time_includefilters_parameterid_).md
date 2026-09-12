> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetilerequest/init(source:time:includefilters:parameterid:)](https://developer.apple.com/documentation/professional_video_applications/fximagetilerequest/init(source:time:includefilters:parameterid:))

# init(source:time:includeFilters:parameterID:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Initializer  
**Availability:** FxPlug 4.0+

Initializes an `FxImageTileRequestSource`.

## Declaration

```swift
init?(source requestSource: FxImageTileRequestSource, time requestTime: CMTime, includeFilters: Bool, parameterID: UInt32)
```

## Parameters

- `requestSource`: The type of image input requested. Set the type to the filter’s input or one of its parameters.
- `requestTime`: The time to pull the images.
- `includeFilters`: Set to true if you request the filter input and you want it to include the output of other FxPlug-ins applied before your filter.
- `parameterID`: If the `requestSource` is `kFxImageTileRequestSourceParameter`, then this parameter holds the `parameterID`, otherwise this parameter is ignored.

<a id="discussion"></a>

## Discussion

Use this method to notify the host application of the location to pull image tiles from (either the effect’s input or parameters), at what time to pull the images, and whether to include other filters.

For parameter requests, this method is used to identify the parameter.

# initWithSource:time:includeFilters:parameterID: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Initializes an `FxImageTileRequestSource`.

## Declaration

```objectivec
- (id) initWithSource:(FxImageTileRequestSource) requestSource time:(CMTime) requestTime includeFilters:(BOOL) includeFilters parameterID:(UInt32) parameterID;
```

## Parameters

- `requestSource`: The type of image input requested. Set the type to the filter’s input or one of its parameters.
- `requestTime`: The time to pull the images.
- `includeFilters`: Set to true if you request the filter input and you want it to include the output of other FxPlug-ins applied before your filter.
- `parameterID`: If the `requestSource` is `kFxImageTileRequestSourceParameter`, then this parameter holds the `parameterID`, otherwise this parameter is ignored.

<a id="discussion"></a>

## Discussion

Use this method to notify the host application of the location to pull image tiles from (either the effect’s input or parameters), at what time to pull the images, and whether to include other filters.

For parameter requests, this method is used to identify the parameter.
