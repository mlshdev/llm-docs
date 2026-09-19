> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/appstoresettings/maximumrating-swift.type.property

# maximumRating

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata associated with the maximum app rating setting.

## Declaration

```swift
static let maximumRating: BoundedSettingMetadata<Int>
```

<a id="discussion"></a>

## Discussion

Use `maximumRating` to access the metadata for [maximumRating](maximumrating-swift.property.md). The default value is `1000` and the bounds are `0...2000`.

## See Also

### Setting an app rating limit

- [maximumRating](maximumrating-swift.property.md): The maximum app rating the user can download.
