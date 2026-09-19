> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/pmdataformat/kpmdataformatxmlminimal

# kPMDataFormatXMLMinimal

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

## Declaration

```objectivec
kPMDataFormatXMLMinimal = 1
```

<a id="discussion"></a>

## Discussion

Specifies an uncompressed data format that is approximately 3-5 times smaller than `kPMDataFormatXMLDefault`. This data format is only compatible with macOS 10.5 and later. This format is a good choice when you do not need to use the data in versions of macOS prior to 10.5 and you need a pure XML representation of the data.
