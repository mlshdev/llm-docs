> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/badownloadmanager/fetchcurrentdownloads(completionhandler:)

# fetchCurrentDownloads(completionHandler:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Fetches the contents of the manager’s download queue.

## Declaration

```swift
func fetchCurrentDownloads(completionHandler: @escaping @Sendable ([BADownload], (any Error)?) -> Void)
```

```swift
var currentDownloads: [BADownload] { get async throws }
```

## Parameters

- `completionHandler`: The handler that processes the fetch results, which the system executes on an arbitrary queue.

<a id="Discussion"></a>

## Discussion

The completion handler takes the following parameters:

- An array of scheduled and in-progress downloads.
- An error if a problems occurs, or `nil` if the method successfully fetches the current downloads.

## See Also

### Fetching in-progress downloads

- [fetchCurrentDownloads()](fetchcurrentdownloads%28%29.md)

# fetchCurrentDownloadsWithCompletionHandler: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Fetches the contents of the manager’s download queue.

## Declaration

```objectivec
- (void) fetchCurrentDownloadsWithCompletionHandler:(void (^)(NSArray<BADownload *> *downloads, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The handler that processes the fetch results, which the system executes on an arbitrary queue.

<a id="Discussion"></a>

## Discussion

The completion handler takes the following parameters:

- An array of scheduled and in-progress downloads.
- An error if a problems occurs, or `nil` if the method successfully fetches the current downloads.

## See Also

### Fetching in-progress downloads

- [fetchCurrentDownloads:](fetchcurrentdownloads%28%29.md)
