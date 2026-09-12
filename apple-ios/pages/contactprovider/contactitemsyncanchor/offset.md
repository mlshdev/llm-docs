> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemsyncanchor/offset](https://developer.apple.com/documentation/contactprovider/contactitemsyncanchor/offset)

# offset

**Framework:** ContactProvider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An offset from the anchor’s generation marker.

## Declaration

```swift
var offset: Int
```

<a id="discussion"></a>

## Discussion

You can use the offset to track a contiguous number of contact items you’ve successfully enumerated within the database generation.

## See Also

### Inspecting sync anchor properties

- [generationMarker](generationmarker.md): A value specific to your data source identifying the database generation you’re enumerating for changes.
