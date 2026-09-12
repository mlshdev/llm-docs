> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/categorydefaulterror/code](https://developer.apple.com/documentation/uikit/uiapplication/categorydefaulterror/code)

# UIApplication.CategoryDefaultError.Code (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+

An enumeration of reasons an error happens when the system discovers whether your app is the default in a category.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [UIApplication.CategoryDefaultError.Code.rateLimited](code/ratelimited.md): The system didn’t determine if your app is the default in a category because the app made the request too many times.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting information about the error

- [retryAvailableDateErrorKey](retryavailabledateerrorkey.md): A dictionary key, with a value that’s a date when a result is next available.
- [statusLastProvidedDateErrorKey](statuslastprovideddateerrorkey.md): A dictionary key, with a value that’s the date your app last received a successful result.

# UIApplicationCategoryDefaultErrorCode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+

An enumeration of reasons an error happens when the system discovers whether your app is the default in a category.

## Declaration

```objectivec
enum UIApplicationCategoryDefaultErrorCode : NSInteger;
```

## Topics

### Error codes

- [UIApplicationCategoryDefaultErrorRateLimited](code/ratelimited.md): The system didn’t determine if your app is the default in a category because the app made the request too many times.
