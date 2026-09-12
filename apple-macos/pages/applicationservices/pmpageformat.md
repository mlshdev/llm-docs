> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pmpageformat](https://developer.apple.com/documentation/applicationservices/pmpageformat)

# PMPageFormat (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

An opaque type that stores the settings in the Page Setup dialog.

## Declaration

```swift
typealias PMPageFormat = OpaquePointer
```

<a id="discussion"></a>

## Discussion

Your application uses page format objects to store information such as the paper size, orientation, and scale of pages in a printing session. To create a page format object, you use the function [PMCreatePageFormat(\_:)](1459485-pmcreatepageformat.md). A new page format object is empty and unusable until you call [PMSessionDefaultPageFormat(\_:\_:)](1462217-pmsessiondefaultpageformat.md) or [PMCopyPageFormat(\_:\_:)](1464669-pmcopypageformat.md) to initialize the settings. You can also use the functions [PMSetPageFormatExtendedData(\_:\_:\_:\_:)](1463464-pmsetpageformatextendeddata.md) and [PMGetPageFormatExtendedData(\_:\_:\_:\_:)](1464455-pmgetpageformatextendeddata.md) to store and retrieve application-specific data in a page format object.

# PMPageFormat (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

An opaque type that stores the settings in the Page Setup dialog.

## Declaration

```objectivec
typedef struct OpaquePMPageFormat *PMPageFormat;
```

<a id="discussion"></a>

## Discussion

Your application uses page format objects to store information such as the paper size, orientation, and scale of pages in a printing session. To create a page format object, you use the function [PMCreatePageFormat](1459485-pmcreatepageformat.md). A new page format object is empty and unusable until you call [PMSessionDefaultPageFormat](1462217-pmsessiondefaultpageformat.md) or [PMCopyPageFormat](1464669-pmcopypageformat.md) to initialize the settings. You can also use the functions [PMSetPageFormatExtendedData](1463464-pmsetpageformatextendeddata.md) and [PMGetPageFormatExtendedData](1464455-pmgetpageformatextendeddata.md) to store and retrieve application-specific data in a page format object.
