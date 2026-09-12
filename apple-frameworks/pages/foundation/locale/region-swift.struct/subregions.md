> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/region-swift.struct/subregions](https://developer.apple.com/documentation/foundation/locale/region-swift.struct/subregions)

# subRegions

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An array of all the sub-regions of the region.

## Declaration

```swift
var subRegions: [Locale.Region] { get }
```

<a id="Discussion"></a>

## Discussion

The following example looks up the sub-regions of region `021`, which represents North America.

```swift
let northAmericaRegion = Locale.Region("021")
let subRegions = northAmericaRegion.subRegions //BM, CA, GL, PM, US
```

The returned `subRegions` have the following identifiers:

| Identifier | Country |
| --- | --- |
| BM | Bermuda |
| CA | Canada |
| GL | Greenland |
| PM | Saint Pierre and Miquelon |
| US | United States |

## See Also

### Examining region properties

- [identifier](identifier.md): The BCP 47 identifier of the region.
- [containingRegion](containingregion.md): The region that contains this region, if any.
- [continent](continent.md): The continent that contains this region, if any.
- [isISORegion](isisoregion.md): A Boolean value that indicates whether the region is an ISO-defined region.
