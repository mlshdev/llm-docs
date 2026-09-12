> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/region-swift.struct/containingregion](https://developer.apple.com/documentation/foundation/locale/region-swift.struct/containingregion)

# containingRegion

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The region that contains this region, if any.

## Declaration

```swift
var containingRegion: Locale.Region? { get }
```

<a id="Discussion"></a>

## Discussion

The following example shows how to look up the containing region for the `US` region.

```swift
let usRegion = Locale.Region("US")
let containingRegion = usRegion.containingRegion //Identifier "021": Northern America

```

## See Also

### Examining region properties

- [identifier](identifier.md): The BCP 47 identifier of the region.
- [continent](continent.md): The continent that contains this region, if any.
- [isISORegion](isisoregion.md): A Boolean value that indicates whether the region is an ISO-defined region.
- [subRegions](subregions.md): An array of all the sub-regions of the region.
