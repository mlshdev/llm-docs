> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/fetch(shazamid:completionhandler:)](https://developer.apple.com/documentation/shazamkit/shmediaitem/fetch(shazamid:completionhandler:))

# fetch(shazamID:completionHandler:) (Swift)

**Framework:** ShazamKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Requests the media item for the song with the specified Shazam ID.

## Declaration

```swift
class func fetch(shazamID: String, completionHandler: @escaping @Sendable (SHMediaItem?, (any Error)?) -> Void)
```

```swift
class func fetch(shazamID: String) async throws -> SHMediaItem
```

## Parameters

- `shazamID`: The Shazam ID of the song.
- `completionHandler`: The completion handler that the system calls with the result of the request.

  This block takes the following parameters:

  - **`mediaItem`**: A media item.
  - **`error`**: An error object if a problem occurs when fetching the media item; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func fetch(shazamID: String) async throws -> SHMediaItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with Shazam music catalog media items

- [webURL](weburl.md): A link to the Shazam Music catalog page that contains the full information for the song.
- [shazamID](shazamid.md): The Shazam ID for the song.

# fetchMediaItemWithShazamID:completionHandler: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Requests the media item for the song with the specified Shazam ID.

## Declaration

```objectivec
+ (void) fetchMediaItemWithShazamID:(NSString *) shazamID completionHandler:(void (^)(SHMediaItem *mediaItem, NSError *error)) completionHandler;
```

## Parameters

- `shazamID`: The Shazam ID of the song.
- `completionHandler`: The completion handler that the system calls with the result of the request.

  This block takes the following parameters:

  - **`mediaItem`**: A media item.
  - **`error`**: An error object if a problem occurs when fetching the media item; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func fetch(shazamID: String) async throws -> SHMediaItem
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with Shazam music catalog media items

- [webURL](weburl.md): A link to the Shazam Music catalog page that contains the full information for the song.
- [shazamID](shazamid.md): The Shazam ID for the song.
