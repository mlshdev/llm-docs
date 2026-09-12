> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldsettings/activitycategorypolicy/specific(_:except:)](https://developer.apple.com/documentation/managedsettings/shieldsettings/activitycategorypolicy/specific(_:except:))

# ShieldSettings.ActivityCategoryPolicy.specific(\_:except:)

**Framework:** Managed Settings  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A policy that indicates the device shields specific categories of activity, with some exceptions.

## Declaration

```swift
case specific(Set<ActivityCategoryToken>, except: Set<Token<Activity>> = [])
```

<a id="discussion"></a>

## Discussion

List categories you want to shield in the first parameter. Use the `except` parameter to specify apps and websites not to shield, even if they’re in the categories that you list. Your app can shield up to 50 category tokens and specify up to 50 application or web domain tokens exceptions at once.

## See Also

### Shielding categories

- [ShieldSettings.ActivityCategoryPolicy.none](none.md): A policy that indicates the device doesn’t shield any content.
- [ShieldSettings.ActivityCategoryPolicy.all(except:)](all%28except_%29.md): A policy that indicates the device shields all apps and websites, except content that you specify.
