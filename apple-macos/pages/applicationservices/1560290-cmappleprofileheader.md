> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560290-cmappleprofileheader](https://developer.apple.com/documentation/applicationservices/1560290-cmappleprofileheader)

# CMAppleProfileHeader

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Union  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Defines a data structure to provide access to both version 2.x and version 1.0 profiles, as specified by the International Color Consortium.

## Declaration

```objectivec
typedef union CMAppleProfileHeader {
    ...
} CMAppleProfileHeader;
```

<a id="discussion"></a>

## Discussion

The ColorSync Manager defines the `CMAppleProfileHeader` structure to provide access to both version 2.x and version 1.0 profiles, as specified by the International Color Consortium. To obtain a copy of the International Color Consortium Profile Format Specification, or to get other information about the ICC, visit the ICC Web site at [http://www.color.org/](http://www.color.org/).

## Topics

### Fields

- [cm2](1560290-cmappleprofileheader/1560384-cm2.md): Deprecated. A current profile header. For a description of the ColorSync profile header, see [CM2Header](cm2header.md).
- [cm4](1560290-cmappleprofileheader/1560107-cm4.md): Deprecated.
