> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationcategorydefaultstatuslastprovideddateerrorkey](https://developer.apple.com/documentation/uikit/uiapplicationcategorydefaultstatuslastprovideddateerrorkey)

# UIApplicationCategoryDefaultStatusLastProvidedDateErrorKey

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A dictionary key, with a value that’s the date your app last received a successful result.

## Declaration

```objectivec
extern NSErrorUserInfoKey const UIApplicationCategoryDefaultStatusLastProvidedDateErrorKey;
```

## See Also

### Discovering if your app is the default app in a category

- [defaultStatusForCategory:error:](uiapplication/defaultstatusforcategory_error_.md): Reports whether this app is the person’s default app in the given category.
- [UIApplicationCategoryDefaultStatus](uiapplicationcategorydefaultstatus.md): The default status of an application for some category.
- [UIApplicationCategory](uiapplication/category.md): Constants that describe the types of apps in the system.
- [UIApplicationCategoryDefaultErrorDomain](uiapplicationcategorydefaulterrordomain.md): A string that identifies errors the system encounters when it determines if your app is the default in a category.
- [UIApplicationCategoryDefaultRetryAvailabilityDateErrorKey](uiapplicationcategorydefaultretryavailabilitydateerrorkey.md): A dictionary key, with a value that’s a date when a result is next available.
