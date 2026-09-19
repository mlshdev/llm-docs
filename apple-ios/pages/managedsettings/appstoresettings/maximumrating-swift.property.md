> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/appstoresettings/maximumrating-swift.property

# maximumRating

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The maximum app rating the user can download.

## Declaration

```swift
var maximumRating: Int? { get set }
```

<a id="discussion"></a>

## Discussion

The value is `nil` if your app doesn’t constrain this setting. The following list provides U.S. rating descriptions for the levels:

- `1000` \- All
- `600` \- 17+
- `300` \- 12+
- `200` \- 9+
- `100` \- 4+
- `0` \- None

## See Also

### Setting an app rating limit

- [maximumRating](maximumrating-swift.type.property.md): The metadata associated with the maximum app rating setting.
