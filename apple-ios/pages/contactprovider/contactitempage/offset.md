> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitempage/offset](https://developer.apple.com/documentation/contactprovider/contactitempage/offset)

# offset

**Framework:** ContactProvider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An offset from the page’s generation marker.

## Declaration

```swift
var offset: Int
```

<a id="discussion"></a>

## Discussion

You can use the offset to track a contiguous number of contact items which have been successfully enumerated for that database generation.

## See Also

### Supporting paging

- [generationMarker](generationmarker.md): A value specific to your data source identifying the database generation when enumeration of content started.
- [initialPage](initialpage.md): A static value the system uses to indicate the start of a new content enumeration.
