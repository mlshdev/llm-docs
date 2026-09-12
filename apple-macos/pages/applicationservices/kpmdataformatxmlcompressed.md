> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kpmdataformatxmlcompressed](https://developer.apple.com/documentation/applicationservices/kpmdataformatxmlcompressed)

# kPMDataFormatXMLCompressed

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

## Declaration

```swift
var kPMDataFormatXMLCompressed: PMDataFormat { get }
```

<a id="discussion"></a>

## Discussion

Specifies a compressed data format that is approximately 20 times smaller than `kPMDataFormatXMLDefault`. This data format is only compatible with macOS 10.5 and later. This format is a good choice when you do not need to use the data in versions of macOS prior to 10.5 and the minimum data size is important. Note that this format is not a pure XML representation of the data.
