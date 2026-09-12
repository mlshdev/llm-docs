> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitempage/generationmarker](https://developer.apple.com/documentation/contactprovider/contactitempage/generationmarker)

# generationMarker

**Framework:** ContactProvider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A value specific to your data source identifying the database generation when enumeration of content started.

## Declaration

```swift
var generationMarker: Data
```

<a id="discussion"></a>

## Discussion

When a content enumeration is underway, you must use the same `generationMarker` until the enumeration completes. If you restart content enumeration, you can use a new `generationMarker` value from that point onward.

## See Also

### Supporting paging

- [offset](offset.md): An offset from the page’s generation marker.
- [initialPage](initialpage.md): A static value the system uses to indicate the start of a new content enumeration.
