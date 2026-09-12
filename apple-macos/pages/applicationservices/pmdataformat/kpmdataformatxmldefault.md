> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pmdataformat/kpmdataformatxmldefault](https://developer.apple.com/documentation/applicationservices/pmdataformat/kpmdataformatxmldefault)

# kPMDataFormatXMLDefault

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

## Declaration

```objectivec
kPMDataFormatXMLDefault = 0
```

<a id="discussion"></a>

## Discussion

Specifies a data format that is compatible with all macOS versions. Data in this format can be used with the `PMUnflattenXXX` functions present in versions of macOS prior to 10.5. This format is a pure XML representation of the data. However, this format is much larger than the more modern data formats described below.
