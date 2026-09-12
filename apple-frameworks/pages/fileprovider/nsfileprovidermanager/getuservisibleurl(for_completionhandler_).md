> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/getuservisibleurl(for:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/getuservisibleurl(for:completionhandler:))

# getUserVisibleURL(for:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Returns the user-visible URL for an item.

## Declaration

```swift
func getUserVisibleURL(for itemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping @Sendable (URL?, (any Error)?) -> Void)
```

```swift
func getUserVisibleURL(for itemIdentifier: NSFileProviderItemIdentifier) async throws -> URL
```

## Parameters

- `itemIdentifier`: The item’s identifier.
- `completionHandler`: A block that the system calls after determining the item’s URL. The system passes the following parameters:

  - **`userVisibleFile`**: The URL of the user visible file, or `nil` if an error occurs.
  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func getUserVisibleURL(for itemIdentifier: NSFileProviderItemIdentifier) async throws -> URL
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Calling this method marks the process so that accessing the URL won’t materialize the item. Instead, any attempt to read or write to an unmaterialized item fails with a [EDEADLK](../../foundation/posixerror/edeadlk.md) POSIX error.

## See Also

### Translating user-visible URLs

- [getIdentifierForUserVisibleFile(at:completionHandler:)](getidentifierforuservisiblefile%28at_completionhandler_%29.md): Returns the identifier and domain for a user-visible URL.

# getUserVisibleURLForItemIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Returns the user-visible URL for an item.

## Declaration

```objectivec
- (void) getUserVisibleURLForItemIdentifier:(NSFileProviderItemIdentifier) itemIdentifier completionHandler:(void (^)(NSURL *userVisibleFile, NSError *error)) completionHandler;
```

## Parameters

- `itemIdentifier`: The item’s identifier.
- `completionHandler`: A block that the system calls after determining the item’s URL. The system passes the following parameters:

  - **`userVisibleFile`**: The URL of the user visible file, or `nil` if an error occurs.
  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func getUserVisibleURL(for itemIdentifier: NSFileProviderItemIdentifier) async throws -> URL
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Calling this method marks the process so that accessing the URL won’t materialize the item. Instead, any attempt to read or write to an unmaterialized item fails with a [EDEADLK](../../foundation/posixerror/edeadlk.md) POSIX error.

## See Also

### Translating user-visible URLs

- [getIdentifierForUserVisibleFileAtURL:completionHandler:](getidentifierforuservisiblefile%28at_completionhandler_%29.md): Returns the identifier and domain for a user-visible URL.
