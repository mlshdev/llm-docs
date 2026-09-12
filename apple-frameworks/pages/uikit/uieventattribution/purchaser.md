> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieventattribution/purchaser](https://developer.apple.com/documentation/uikit/uieventattribution/purchaser)

# purchaser (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

The entity that purchased the ad or content.

## Declaration

```swift
var purchaser: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the name of the party that purchased the ad or other content. For example, for an in-app ad, this would contain the name of the company or individual that purchased the advertisement. The system may truncate this field if it’s longer than 100 characters.

## See Also

### Setting attribution details

- [destinationURL](destinationurl.md): The destination URL to attribute.
- [reportEndpoint](reportendpoint.md): The URL that receives attribution data.
- [sourceDescription](sourcedescription.md): A string describing the source tapped to launch the external link.
- [sourceIdentifier](sourceidentifier.md): A number that identifies the source of the attribution.

# purchaser (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

The entity that purchased the ad or content.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * purchaser;
```

<a id="Discussion"></a>

## Discussion

This property contains the name of the party that purchased the ad or other content. For example, for an in-app ad, this would contain the name of the company or individual that purchased the advertisement. The system may truncate this field if it’s longer than 100 characters.

## See Also

### Setting attribution details

- [destinationURL](destinationurl.md): The destination URL to attribute.
- [reportEndpoint](reportendpoint.md): The URL that receives attribution data.
- [sourceDescription](sourcedescription.md): A string describing the source tapped to launch the external link.
- [sourceIdentifier](sourceidentifier.md): A number that identifies the source of the attribution.
