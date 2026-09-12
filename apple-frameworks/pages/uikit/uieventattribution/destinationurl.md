> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieventattribution/destinationurl](https://developer.apple.com/documentation/uikit/uieventattribution/destinationurl)

# destinationURL (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

The destination URL to attribute.

## Declaration

```swift
var destinationURL: URL { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the URL associated with the event; for example, the `destinationURL` for an advertisement contains the external link opened when the user taps the ad.

This field corresponds to the `attributed_on_site` field of a web attribution.

## See Also

### Setting attribution details

- [purchaser](purchaser.md): The entity that purchased the ad or content.
- [reportEndpoint](reportendpoint.md): The URL that receives attribution data.
- [sourceDescription](sourcedescription.md): A string describing the source tapped to launch the external link.
- [sourceIdentifier](sourceidentifier.md): A number that identifies the source of the attribution.

# destinationURL (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

The destination URL to attribute.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSURL * destinationURL;
```

<a id="Discussion"></a>

## Discussion

This property contains the URL associated with the event; for example, the `destinationURL` for an advertisement contains the external link opened when the user taps the ad.

This field corresponds to the `attributed_on_site` field of a web attribution.

## See Also

### Setting attribution details

- [purchaser](purchaser.md): The entity that purchased the ad or content.
- [reportEndpoint](reportendpoint.md): The URL that receives attribution data.
- [sourceDescription](sourcedescription.md): A string describing the source tapped to launch the external link.
- [sourceIdentifier](sourceidentifier.md): A number that identifies the source of the attribution.
