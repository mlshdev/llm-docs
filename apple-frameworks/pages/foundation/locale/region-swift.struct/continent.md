> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/region-swift.struct/continent](https://developer.apple.com/documentation/foundation/locale/region-swift.struct/continent)

# continent

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The continent that contains this region, if any.

## Declaration

```swift
var continent: Locale.Region? { get }
```

<a id="Discussion"></a>

## Discussion

This value can be `nil` when the system can’t determine the appropriate continent, such as when the region isn’t an ISO region.

## See Also

### Examining region properties

- [identifier](identifier.md): The BCP 47 identifier of the region.
- [containingRegion](containingregion.md): The region that contains this region, if any.
- [isISORegion](isisoregion.md): A Boolean value that indicates whether the region is an ISO-defined region.
- [subRegions](subregions.md): An array of all the sub-regions of the region.
