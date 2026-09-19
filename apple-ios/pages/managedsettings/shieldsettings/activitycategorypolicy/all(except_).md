> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/shieldsettings/activitycategorypolicy/all(except:)

# ShieldSettings.ActivityCategoryPolicy.all(except:)

**Framework:** Managed Settings  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A policy that indicates the device shields all apps and websites, except content that you specify.

## Declaration

```swift
case all(except: Set<Token<Activity>> = [])
```

<a id="discussion"></a>

## Discussion

Your app can specify up to 50 application or web domain tokens exceptions at once.

## See Also

### Shielding categories

- [ShieldSettings.ActivityCategoryPolicy.none](none.md): A policy that indicates the device doesn’t shield any content.
- [ShieldSettings.ActivityCategoryPolicy.specific(\_:except:)](specific%28__except_%29.md): A policy that indicates the device shields specific categories of activity, with some exceptions.
