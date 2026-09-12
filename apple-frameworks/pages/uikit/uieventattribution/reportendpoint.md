> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieventattribution/reportendpoint](https://developer.apple.com/documentation/uikit/uieventattribution/reportendpoint)

# reportEndpoint (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

The URL that receives attribution data.

## Declaration

```swift
var reportEndpoint: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This read-only property contains the URL that recieves the event attribution data. Your app sets this value by reading it from its `Info.plist` using the [NSAdvertisingAttributionReportEndpoint](../../bundleresources/information-property-list/nsadvertisingattributionreportendpoint.md) key.

Specify the desired value in your Xcode project’s `Info.plist` file. Your app uses the value you set in all PCM attribution requests. You can’t change the value at runtime.

This field corresponds to the `source_site` field of a web attribution.

## See Also

### Setting attribution details

- [destinationURL](destinationurl.md): The destination URL to attribute.
- [purchaser](purchaser.md): The entity that purchased the ad or content.
- [sourceDescription](sourcedescription.md): A string describing the source tapped to launch the external link.
- [sourceIdentifier](sourceidentifier.md): A number that identifies the source of the attribution.

# reportEndpoint (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

The URL that receives attribution data.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * reportEndpoint;
```

<a id="Discussion"></a>

## Discussion

This read-only property contains the URL that recieves the event attribution data. Your app sets this value by reading it from its `Info.plist` using the [NSAdvertisingAttributionReportEndpoint](../../bundleresources/information-property-list/nsadvertisingattributionreportendpoint.md) key.

Specify the desired value in your Xcode project’s `Info.plist` file. Your app uses the value you set in all PCM attribution requests. You can’t change the value at runtime.

This field corresponds to the `source_site` field of a web attribution.

## See Also

### Setting attribution details

- [destinationURL](destinationurl.md): The destination URL to attribute.
- [purchaser](purchaser.md): The entity that purchased the ad or content.
- [sourceDescription](sourcedescription.md): A string describing the source tapped to launch the external link.
- [sourceIdentifier](sourceidentifier.md): A number that identifies the source of the attribution.
