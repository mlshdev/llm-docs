> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/pmdataformat/kpmdataformatxmlcompressed

# kPMDataFormatXMLCompressed

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

## Declaration

```objectivec
kPMDataFormatXMLCompressed = 2
```

<a id="discussion"></a>

## Discussion

Specifies a compressed data format that is approximately 20 times smaller than `kPMDataFormatXMLDefault`. This data format is only compatible with macOS 10.5 and later. This format is a good choice when you do not need to use the data in versions of macOS prior to 10.5 and the minimum data size is important. Note that this format is not a pure XML representation of the data.
