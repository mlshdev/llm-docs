> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/getnotificationcategories(completionhandler:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/getnotificationcategories(completionhandler:))

# getNotificationCategories(completionHandler:) (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Fetches your app’s registered notification categories.

## Declaration

```swift
func getNotificationCategories(completionHandler: @escaping @Sendable (Set<UNNotificationCategory>) -> Void)
```

```swift
func notificationCategories() async -> Set<UNNotificationCategory>
```

## Parameters

- `completionHandler`: The block to execute asynchronously with the results. This block may be executed on a background thread. The block has no return value and takes the following parameter:

  - **categories**: The set of [UNNotificationCategory](../unnotificationcategory.md) objects containing your registered notification types. If your app has not yet registered any categories, this parameter is an empty set.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func notificationCategories() async -> Set<UNNotificationCategory>
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to retrieve your app’s currently registered notification types. You might use this method when you want to augment the current set of categories with new categories later on. Simply merge the returned set with any new category objects and register the updated set.

```swift
let center = UNUserNotificationCenter.current()
let categories = await center.notificationCategories()
```

## See Also

### Managing notification categories

- [setNotificationCategories(\_:)](setnotificationcategories%28__%29.md): Registers the notification categories that your app supports.

# getNotificationCategoriesWithCompletionHandler: (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Fetches your app’s registered notification categories.

## Declaration

```objectivec
- (void) getNotificationCategoriesWithCompletionHandler:(void (^)(NSSet<UNNotificationCategory *> *categories)) completionHandler;
```

## Parameters

- `completionHandler`: The block to execute asynchronously with the results. This block may be executed on a background thread. The block has no return value and takes the following parameter:

  - **categories**: The set of [UNNotificationCategory](../unnotificationcategory.md) objects containing your registered notification types. If your app has not yet registered any categories, this parameter is an empty set.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func notificationCategories() async -> Set<UNNotificationCategory>
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to retrieve your app’s currently registered notification types. You might use this method when you want to augment the current set of categories with new categories later on. Simply merge the returned set with any new category objects and register the updated set.

```swift
let center = UNUserNotificationCenter.current()
let categories = await center.notificationCategories()
```

## See Also

### Managing notification categories

- [setNotificationCategories:](setnotificationcategories%28__%29.md): Registers the notification categories that your app supports.
