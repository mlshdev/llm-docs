> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeature/featureid

# featureID

**Framework:** Accessory Transport Extension  
**Kind:** Type Property  
**Availability:** iOS 26.5+

A string for the feature type.

## Declaration

```swift
static var featureID: String { get }
```

<a id="discussion"></a>

## Discussion

List this value under the `EXCapabilities` key in your data provider extension’s target properties. Use the same value for every app that declares the feature.

> **Important**

> The value of this property isn’t always equal to the transport message’s [sessionID](../transportmessage/sessionid.md).
