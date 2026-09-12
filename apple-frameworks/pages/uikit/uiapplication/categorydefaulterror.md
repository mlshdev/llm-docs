> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/categorydefaulterror](https://developer.apple.com/documentation/uikit/uiapplication/categorydefaulterror)

# UIApplication.CategoryDefaultError

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Errors that can happen when the system checks if your app is the default app in a category.

## Declaration

```swift
struct CategoryDefaultError
```

## Topics

### Getting information about the error

- [UIApplication.CategoryDefaultError.Code](categorydefaulterror/code.md): An enumeration of reasons an error happens when the system discovers whether your app is the default in a category.
- [retryAvailableDateErrorKey](categorydefaulterror/retryavailabledateerrorkey.md): A dictionary key, with a value that’s a date when a result is next available.
- [statusLastProvidedDateErrorKey](categorydefaulterror/statuslastprovideddateerrorkey.md): A dictionary key, with a value that’s the date your app last received a successful result.

### Errors when discovering if an app is the default in a category

- [errorDomain](categorydefaulterror/errordomain.md): A string that indicates that an error happened when the system attempted to determine if your app is the default in a category.
- [rateLimited](categorydefaulterror/ratelimited.md): An error code that indicates your app requested its status too frequently.

## Relationships

### Conforms To

- [CustomNSError](../../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Discovering if your app is the default app in a category

- [isDefault(\_:)](isdefault%28__%29.md): Reports whether this app is the person’s default app in the given category.
- [UIApplication.Category](category.md): Constants that describe the types of apps in the system.
