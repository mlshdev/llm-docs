> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/configuration/datadetectortypes

# dataDetectorTypes

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The types of data detectors to apply to the webpage’s content.

## Declaration

```swift
@MainActor var dataDetectorTypes: WKDataDetectorTypes
```

<a id="discussion"></a>

## Discussion

Data detectors add interactivity to web content by creating links for specially formatted text. For example, the `.link` type causes the apple.com portion of the text “Visit apple.com” to become a link to the Apple website.

The default value of this property is an empty OptionSet.
