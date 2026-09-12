> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kpmdataformatxmlminimal](https://developer.apple.com/documentation/applicationservices/kpmdataformatxmlminimal)

# kPMDataFormatXMLMinimal

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

## Declaration

```swift
var kPMDataFormatXMLMinimal: PMDataFormat { get }
```

<a id="discussion"></a>

## Discussion

Specifies an uncompressed data format that is approximately 3-5 times smaller than `kPMDataFormatXMLDefault`. This data format is only compatible with macOS 10.5 and later. This format is a good choice when you do not need to use the data in versions of macOS prior to 10.5 and you need a pure XML representation of the data.
