> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/getservice(named:for:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/getservice(named:for:completionhandler:))

# getService(named:for:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func getService(named serviceName: NSFileProviderServiceName, for itemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable (NSFileProviderService?, (any Error)?) -> Void)
```

```swift
func service(named serviceName: NSFileProviderServiceName, for itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderService?
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func service(named serviceName: NSFileProviderServiceName, for itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderService?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# getServiceWithName:itemIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) getServiceWithName:(NSFileProviderServiceName) serviceName itemIdentifier:(NSFileProviderItemIdentifier) itemIdentifier completionHandler:(void (^)(NSFileProviderService *, NSError *)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func service(named serviceName: NSFileProviderServiceName, for itemIdentifier: NSFileProviderItemIdentifier) async throws -> NSFileProviderService?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
