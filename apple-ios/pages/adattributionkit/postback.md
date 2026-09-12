> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/postback](https://developer.apple.com/documentation/adattributionkit/postback)

# Postback

**Framework:** AdAttributionKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A structure that provides methods you use to update conversion values for ad attributions.

## Declaration

```swift
struct Postback
```

## Topics

### Type Properties

- [isSupported](postback/issupported.md): A Boolean value that indicates whether the framework supports postbacks on a person’s device.
- [reengagementOpenURLParameter](postback/reengagementopenurlparameter.md): A string that represents the query parameter that AdAttributionKit appends to the URL to indicate that a reengagement has occurred.

### Type Methods

- [updateConversionValue(\_:)](postback/updateconversionvalue%28__%29.md): Updates the conversion value using the given postback update configuration.
- [updateConversionValue(\_:coarseConversionValue:lockPostback:)](postback/updateconversionvalue%28__coarseconversionvalue_lockpostback_%29.md): Updates the conversion value with the provided fine and coarse conversion values, and optionally locks the postback, reducing the amount of time the system needs to deliver a signal.
- [updateConversionValue(\_:lockPostback:)](postback/updateconversionvalue%28__lockpostback_%29.md): Updates a conversion value with the provided fine and coarse conversion values, and optionally locks the postback, reducing the system time to deliver a signal.

## See Also

### Postbacks

- [PostbackUpdate](postbackupdate.md): Values you use to update properties in a postback, such as the conversion value.
- [CoarseConversionValue](coarseconversionvalue.md): Values that describe developer-defined, relative-attribution conversion values.
