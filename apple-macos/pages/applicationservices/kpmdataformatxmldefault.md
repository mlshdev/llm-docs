> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kpmdataformatxmldefault](https://developer.apple.com/documentation/applicationservices/kpmdataformatxmldefault)

# kPMDataFormatXMLDefault

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

## Declaration

```swift
var kPMDataFormatXMLDefault: PMDataFormat { get }
```

<a id="discussion"></a>

## Discussion

Specifies a data format that is compatible with all macOS versions. Data in this format can be used with the `PMUnflattenXXX` functions present in versions of macOS prior to 10.5. This format is a pure XML representation of the data. However, this format is much larger than the more modern data formats described below.
