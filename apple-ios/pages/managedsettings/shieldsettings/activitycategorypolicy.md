> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldsettings/activitycategorypolicy](https://developer.apple.com/documentation/managedsettings/shieldsettings/activitycategorypolicy)

# ShieldSettings.ActivityCategoryPolicy

**Framework:** Managed Settings  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Policies available for shielding activities based on their category.

## Declaration

```swift
enum ActivityCategoryPolicy<Activity>
```

## Topics

### Shielding categories

- [ShieldSettings.ActivityCategoryPolicy.none](activitycategorypolicy/none.md): A policy that indicates the device doesn’t shield any content.
- [ShieldSettings.ActivityCategoryPolicy.all(except:)](activitycategorypolicy/all%28except_%29.md): A policy that indicates the device shields all apps and websites, except content that you specify.
- [ShieldSettings.ActivityCategoryPolicy.specific(\_:except:)](activitycategorypolicy/specific%28__except_%29.md): A policy that indicates the device shields specific categories of activity, with some exceptions.

### Comparing category policies

- [==(\_:\_:)](activitycategorypolicy/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Blocking categories of apps and websites

- [applicationCategories](applicationcategories-swift.property.md): Categories of apps for the system to cover with a shielding view.
- [applicationCategories](applicationcategories-swift.type.property.md): The metadata for the configuration that specifies categories of apps for the system to cover with a shielding view.
- [webDomainCategories](webdomaincategories-swift.property.md): Categories of websites for the system to cover with a shielding view.
- [webDomainCategories](webdomaincategories-swift.type.property.md): The metadata for the configuration that specifies categories of websites for the system to shield.
