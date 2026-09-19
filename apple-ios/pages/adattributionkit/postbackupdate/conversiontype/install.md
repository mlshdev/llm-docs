> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/adattributionkit/postbackupdate/conversiontype/install

# PostbackUpdate.ConversionType.install

**Framework:** AdAttributionKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The value that represents the installation of an app after an ad interaction.

## Declaration

```swift
case install
```

<a id="discussion"></a>

## Discussion

In the attribution report, the framework represents this using the strings *download* or *redownload*, depending on the kind of installation.
