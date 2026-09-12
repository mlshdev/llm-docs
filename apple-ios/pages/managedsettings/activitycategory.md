> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/activitycategory](https://developer.apple.com/documentation/managedsettings/activitycategory)

# ActivityCategory

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An activity’s category, such as Entertainment or Social.

## Declaration

```swift
struct ActivityCategory
```

## Topics

### Creating a category

- [init(token:)](activitycategory/init%28token_%29.md): Initializes the representation with the provided token.

### Accessing category identifiers

- [localizedDisplayName](activitycategory/localizeddisplayname.md): A localized display name for the category.
- [token](activitycategory/token.md): An opaque representation of a category of activities.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Categories

- [ActivityCategoryToken](activitycategorytoken.md): A token that represents a category of app or website activity.
