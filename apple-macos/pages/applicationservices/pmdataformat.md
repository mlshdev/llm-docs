> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pmdataformat](https://developer.apple.com/documentation/applicationservices/pmdataformat)

# PMDataFormat (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.5+

Constants that specify the format of the data representation created with the functions [PMPageFormatCreateDataRepresentation(\_:\_:\_:)](1464227-pmpageformatcreatedatarepresenta.md) and [PMPrintSettingsCreateDataRepresentation(\_:\_:\_:)](1464570-pmprintsettingscreatedatareprese.md).

## Declaration

```swift
struct PMDataFormat
```

## Topics

### Constants

- [kPMDataFormatXMLDefault](kpmdataformatxmldefault.md)
- [kPMDataFormatXMLMinimal](kpmdataformatxmlminimal.md)
- [kPMDataFormatXMLCompressed](kpmdataformatxmlcompressed.md)

### Initializers

- [init(\_:)](pmdataformat/1462724-init.md)
- [init(rawValue:)](pmdataformat/1459732-init.md)

### Instance Properties

- [rawValue](pmdataformat/1459960-rawvalue.md)

## Relationships

### Conforms To

- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

# PMDataFormat (Objective-C)

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants that specify the format of the data representation created with the functions [PMPageFormatCreateDataRepresentation](1464227-pmpageformatcreatedatarepresenta.md) and [PMPrintSettingsCreateDataRepresentation](1464570-pmprintsettingscreatedatareprese.md).

## Declaration

```objectivec
typedef enum PMDataFormat : unsigned int {
    ...
} PMDataFormat;
```

## Topics

### Constants

- [kPMDataFormatXMLDefault](pmdataformat/kpmdataformatxmldefault.md)
- [kPMDataFormatXMLMinimal](pmdataformat/kpmdataformatxmlminimal.md)
- [kPMDataFormatXMLCompressed](pmdataformat/kpmdataformatxmlcompressed.md)
