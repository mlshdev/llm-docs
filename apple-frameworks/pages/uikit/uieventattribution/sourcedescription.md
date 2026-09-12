> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieventattribution/sourcedescription](https://developer.apple.com/documentation/uikit/uieventattribution/sourcedescription)

# sourceDescription (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A string describing the source tapped to launch the external link.

## Declaration

```swift
var sourceDescription: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a description of the attribution source. For example, for an ad, `sourceDescription` describes the content of the advertisement that the user tapped.

The system may truncate this field if it’s longer than 100 characters.

## See Also

### Setting attribution details

- [destinationURL](destinationurl.md): The destination URL to attribute.
- [purchaser](purchaser.md): The entity that purchased the ad or content.
- [reportEndpoint](reportendpoint.md): The URL that receives attribution data.
- [sourceIdentifier](sourceidentifier.md): A number that identifies the source of the attribution.

# sourceDescription (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A string describing the source tapped to launch the external link.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * sourceDescription;
```

<a id="Discussion"></a>

## Discussion

This property contains a description of the attribution source. For example, for an ad, `sourceDescription` describes the content of the advertisement that the user tapped.

The system may truncate this field if it’s longer than 100 characters.

## See Also

### Setting attribution details

- [destinationURL](destinationurl.md): The destination URL to attribute.
- [purchaser](purchaser.md): The entity that purchased the ad or content.
- [reportEndpoint](reportendpoint.md): The URL that receives attribution data.
- [sourceIdentifier](sourceidentifier.md): A number that identifies the source of the attribution.
