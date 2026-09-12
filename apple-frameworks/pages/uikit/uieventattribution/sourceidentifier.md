> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieventattribution/sourceidentifier](https://developer.apple.com/documentation/uikit/uieventattribution/sourceidentifier)

# sourceIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A number that identifies the source of the attribution.

## Declaration

```swift
var sourceIdentifier: UInt8 { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an integer, between 0 and 255, that identifies the source of the attribution. For example, for an ad, `sourceIdentifier` might contain a campaign identifier so the advertiser can measure the effectiveness of different advertising campaigns.

This field corresponds to the `source_id` field of a web attribution.

## See Also

### Setting attribution details

- [destinationURL](destinationurl.md): The destination URL to attribute.
- [purchaser](purchaser.md): The entity that purchased the ad or content.
- [reportEndpoint](reportendpoint.md): The URL that receives attribution data.
- [sourceDescription](sourcedescription.md): A string describing the source tapped to launch the external link.

# sourceIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A number that identifies the source of the attribution.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) uint8_t sourceIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property contains an integer, between 0 and 255, that identifies the source of the attribution. For example, for an ad, `sourceIdentifier` might contain a campaign identifier so the advertiser can measure the effectiveness of different advertising campaigns.

This field corresponds to the `source_id` field of a web attribution.

## See Also

### Setting attribution details

- [destinationURL](destinationurl.md): The destination URL to attribute.
- [purchaser](purchaser.md): The entity that purchased the ad or content.
- [reportEndpoint](reportendpoint.md): The URL that receives attribution data.
- [sourceDescription](sourcedescription.md): A string describing the source tapped to launch the external link.
