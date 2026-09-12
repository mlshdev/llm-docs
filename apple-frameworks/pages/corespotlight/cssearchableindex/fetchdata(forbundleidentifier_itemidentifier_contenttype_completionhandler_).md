> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/fetchdata(forbundleidentifier:itemidentifier:contenttype:completionhandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/fetchdata(forbundleidentifier:itemidentifier:contenttype:completionhandler:))

# fetchData(forBundleIdentifier:itemIdentifier:contentType:completionHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Fetches data from an external provider.

## Declaration

```swift
func fetchData(forBundleIdentifier bundleIdentifier: String, itemIdentifier: String, contentType: UTType, completionHandler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func fetchData(forBundleIdentifier bundleIdentifier: String, itemIdentifier: String, contentType: UTType) async throws -> Data
```

## Parameters

- `bundleIdentifier`: The bundle identifier of the app to search.
- `itemIdentifier`: The app-specific identifier of the item you want.
- `contentType`: The type of data to fetch.
- `completionHandler`: The block to execute with the results. The block has no return value and takes the following parameters:

  - **data**: The data for the specified item, if successful.
  - **error**: An error object, or `nil` if the method retrieved the data successfully.

<a id="Discussion"></a>

## Discussion

Clients with the appropriate entitlements can use this method to fetch data from an external app such as Mail.

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func fetchData(forBundleIdentifier bundleIdentifier: String, itemIdentifier: String, contentType: UTType) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# fetchDataForBundleIdentifier:itemIdentifier:contentType:completionHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Fetches data from an external provider.

## Declaration

```objectivec
- (void) fetchDataForBundleIdentifier:(NSString *) bundleIdentifier itemIdentifier:(NSString *) itemIdentifier contentType:(UTType *) contentType completionHandler:(void (^)(NSData *, NSError *)) completionHandler;
```

## Parameters

- `bundleIdentifier`: The bundle identifier of the app to search.
- `itemIdentifier`: The app-specific identifier of the item you want.
- `contentType`: The type of data to fetch.
- `completionHandler`: The block to execute with the results. The block has no return value and takes the following parameters:

  - **data**: The data for the specified item, if successful.
  - **error**: An error object, or `nil` if the method retrieved the data successfully.

<a id="Discussion"></a>

## Discussion

Clients with the appropriate entitlements can use this method to fetch data from an external app such as Mail.

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func fetchData(forBundleIdentifier bundleIdentifier: String, itemIdentifier: String, contentType: UTType) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
