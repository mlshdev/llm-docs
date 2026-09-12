> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/postbackupdate](https://developer.apple.com/documentation/adattributionkit/postbackupdate)

# PostbackUpdate

**Framework:** AdAttributionKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Values you use to update properties in a postback, such as the conversion value.

## Declaration

```swift
struct PostbackUpdate
```

## Mentioned In

- [Identifying conversion values with conversion tags](conversion-tags.md)

## Topics

### Initializers

- [init(fineConversionValue:lockPostback:coarseConversionValue:conversionTypes:)](postbackupdate/init%28fineconversionvalue_lockpostback_coarseconversionvalue_conversiontypes_%29.md): Creates a new postback update with the conversions values, conversion types, and lock indication you provide.
- [init(fineConversionValue:lockPostback:conversionTag:coarseConversionValue:conversionTypes:)](postbackupdate/init%28fineconversionvalue_lockpostback_conversiontag_coarseconversionvalue_conversiontypes_%29.md)

### Instance Properties

- [coarseConversionValue](postbackupdate/coarseconversionvalue.md): An enumeration that represents the coarse conversion value.
- [conversionTag](postbackupdate/conversiontag.md)
- [conversionTypes](postbackupdate/conversiontypes.md): An array conversion type the system uses to determine which postbacks to update with this postback update.
- [fineConversionValue](postbackupdate/fineconversionvalue.md): An integer that represents the fine conversion value.
- [lockPostback](postbackupdate/lockpostback.md): A Boolean value that indicates whether the system should lock the postback, reducing system time deliver a signal

### Enumerations

- [PostbackUpdate.ConversionType](postbackupdate/conversiontype.md): Values that describe the types of conversions.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Postbacks

- [Postback](postback.md): A structure that provides methods you use to update conversion values for ad attributions.
- [CoarseConversionValue](coarseconversionvalue.md): Values that describe developer-defined, relative-attribution conversion values.
