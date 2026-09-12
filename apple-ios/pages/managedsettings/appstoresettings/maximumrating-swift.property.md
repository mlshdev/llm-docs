> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/appstoresettings/maximumrating-swift.property](https://developer.apple.com/documentation/managedsettings/appstoresettings/maximumrating-swift.property)

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
