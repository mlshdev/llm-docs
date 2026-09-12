> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/category](https://developer.apple.com/documentation/uikit/uiapplication/category)

# UIApplication.Category (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

Constants that describe the types of apps in the system.

## Declaration

```swift
enum Category
```

<a id="overview"></a>

## Overview

Use the values in this enumeration with [isDefault(\_:)](isdefault%28__%29.md) (or, in Objective-C, [defaultStatusForCategory:error:](defaultstatusforcategory_error_.md)) to find if your app is the person’s default for a category.

## Topics

### Application categories

- [UIApplication.Category.webBrowser](category/webbrowser.md): The app is a web browser.

### Initializers

- [init(rawValue:)](category/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Discovering if your app is the default app in a category

- [isDefault(\_:)](isdefault%28__%29.md): Reports whether this app is the person’s default app in the given category.
- [UIApplication.CategoryDefaultError](categorydefaulterror.md): Errors that can happen when the system checks if your app is the default app in a category.

# UIApplicationCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Constants that describe the types of apps in the system.

## Declaration

```objectivec
enum UIApplicationCategory : NSInteger;
```

<a id="overview"></a>

## Overview

Use the values in this enumeration with [isDefault(\_:)](isdefault%28__%29.md) (or, in Objective-C, [defaultStatusForCategory:error:](defaultstatusforcategory_error_.md)) to find if your app is the person’s default for a category.

## Topics

### Application categories

- [UIApplicationCategoryWebBrowser](category/webbrowser.md): The app is a web browser.

## See Also

### Discovering if your app is the default app in a category

- [defaultStatusForCategory:error:](defaultstatusforcategory_error_.md): Reports whether this app is the person’s default app in the given category.
- [UIApplicationCategoryDefaultStatus](../uiapplicationcategorydefaultstatus.md): The default status of an application for some category.
- [UIApplicationCategoryDefaultErrorDomain](../uiapplicationcategorydefaulterrordomain.md): A string that identifies errors the system encounters when it determines if your app is the default in a category.
- [UIApplicationCategoryDefaultRetryAvailabilityDateErrorKey](../uiapplicationcategorydefaultretryavailabilitydateerrorkey.md): A dictionary key, with a value that’s a date when a result is next available.
- [UIApplicationCategoryDefaultStatusLastProvidedDateErrorKey](../uiapplicationcategorydefaultstatuslastprovideddateerrorkey.md): A dictionary key, with a value that’s the date your app last received a successful result.
