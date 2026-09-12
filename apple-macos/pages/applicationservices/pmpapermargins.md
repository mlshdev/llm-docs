> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pmpapermargins](https://developer.apple.com/documentation/applicationservices/pmpapermargins)

# PMPaperMargins (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

A data structure that specifies the unprintable area of a paper object.

## Declaration

```swift
typealias PMPaperMargins = PMRect
```

<a id="discussion"></a>

## Discussion

Your application specifies paper margins when calling the function [PMPaperCreateCustom(\_:\_:\_:\_:\_:\_:\_:)](1459322-pmpapercreatecustom.md) to create a custom paper type. You can obtain a paper’s margins with the function [PMPaperGetMargins(\_:\_:)](1461994-pmpapergetmargins.md).

# PMPaperMargins (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

A data structure that specifies the unprintable area of a paper object.

## Declaration

```objectivec
typedef PMRect PMPaperMargins;
```

<a id="discussion"></a>

## Discussion

Your application specifies paper margins when calling the function [PMPaperCreateCustom](1459322-pmpapercreatecustom.md) to create a custom paper type. You can obtain a paper’s margins with the function [PMPaperGetMargins](1461994-pmpapergetmargins.md).
