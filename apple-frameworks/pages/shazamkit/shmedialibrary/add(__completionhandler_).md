> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmedialibrary/add(_:completionhandler:)](https://developer.apple.com/documentation/shazamkit/shmedialibrary/add(_:completionhandler:))

# add(\_:completionHandler:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Adds an array of songs to the user’s Shazam library.

> Use SHLibrary instead

## Declaration

```swift
func add(_ mediaItems: [SHMediaItem], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func add(_ mediaItems: [SHMediaItem]) async throws
```

## Parameters

- `mediaItems`: An array of media items that represents the songs to add to the library.
- `completionHandler`: The system calls this completion block after adding the media items to the library.

  This block takes the following parameters:

  - **`error`**: An error object if a problem occurs when adding any item; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func add(_ mediaItems: [SHMediaItem]) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Saving a song to the user’s Shazam library also saves the following media item properties and their associated values:

- [shazamID](../shmediaitemproperty/shazamid.md)
- [title](../shmediaitemproperty/title.md)
- [subtitle](../shmediaitemproperty/subtitle.md), or [artist](../shmediaitemproperty/artist.md) if the subtitle is unavailable

> **Note**

>  Saving to the user’s Shazam library works only for songs with a valid [shazamID](../shmediaitemproperty/shazamid.md).

## See Also

### Adding a matched song to the library

- [default](default.md): Deprecated. An instance of the user’s default Shazam library.

# addMediaItems:completionHandler: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Adds an array of songs to the user’s Shazam library.

> Use SHLibrary instead

## Declaration

```objectivec
- (void) addMediaItems:(NSArray<SHMediaItem *> *) mediaItems completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `mediaItems`: An array of media items that represents the songs to add to the library.
- `completionHandler`: The system calls this completion block after adding the media items to the library.

  This block takes the following parameters:

  - **`error`**: An error object if a problem occurs when adding any item; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func add(_ mediaItems: [SHMediaItem]) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Saving a song to the user’s Shazam library also saves the following media item properties and their associated values:

- [SHMediaItemShazamID](../shmediaitemproperty/shazamid.md)
- [SHMediaItemTitle](../shmediaitemproperty/title.md)
- [SHMediaItemSubtitle](../shmediaitemproperty/subtitle.md), or [SHMediaItemArtist](../shmediaitemproperty/artist.md) if the subtitle is unavailable

> **Note**

>  Saving to the user’s Shazam library works only for songs with a valid [SHMediaItemShazamID](../shmediaitemproperty/shazamid.md).

## See Also

### Adding a matched song to the library

- [defaultLibrary](default.md): Deprecated. An instance of the user’s default Shazam library.
