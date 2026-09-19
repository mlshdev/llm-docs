> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiapplicationcategorydefaulterrordomain

# UIApplicationCategoryDefaultErrorDomain

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A string that identifies errors the system encounters when it determines if your app is the default in a category.

## Declaration

```objectivec
extern NSErrorDomain const UIApplicationCategoryDefaultErrorDomain;
```

## See Also

### Discovering if your app is the default app in a category

- [defaultStatusForCategory:error:](uiapplication/defaultstatusforcategory_error_.md): Reports whether this app is the person’s default app in the given category.
- [UIApplicationCategoryDefaultStatus](uiapplicationcategorydefaultstatus.md): The default status of an application for some category.
- [UIApplicationCategory](uiapplication/category.md): Constants that describe the types of apps in the system.
- [UIApplicationCategoryDefaultRetryAvailabilityDateErrorKey](uiapplicationcategorydefaultretryavailabilitydateerrorkey.md): A dictionary key, with a value that’s a date when a result is next available.
- [UIApplicationCategoryDefaultStatusLastProvidedDateErrorKey](uiapplicationcategorydefaultstatuslastprovideddateerrorkey.md): A dictionary key, with a value that’s the date your app last received a successful result.
