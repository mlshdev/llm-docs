> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/adattributionkit/postbackupdate/conversiontypes

# conversionTypes

**Framework:** AdAttributionKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

An array conversion type the system uses to determine which postbacks to update with this postback update.

## Declaration

```swift
let conversionTypes: [PostbackUpdate.ConversionType]?
```

<a id="discussion"></a>

## Discussion

If `nil`, the system updates all types of postbacks by default.
