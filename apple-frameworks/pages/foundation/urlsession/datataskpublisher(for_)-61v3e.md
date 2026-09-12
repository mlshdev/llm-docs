> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/datataskpublisher(for:)-61v3e](https://developer.apple.com/documentation/foundation/urlsession/datataskpublisher(for:)-61v3e)

# dataTaskPublisher(for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a publisher that wraps a URL session data task for a given URL request.

## Declaration

```swift
func dataTaskPublisher(for request: URLRequest) -> URLSession.DataTaskPublisher
```

## Parameters

- `request`: The URL request for which to create a data task.

<a id="Discussion"></a>

## Discussion

The publisher publishes data when the task completes, or terminates if the task fails with an error.

## See Also

### Performing tasks as a Combine Publisher

- [Processing URL session data task results with Combine](../processing-url-session-data-task-results-with-combine.md): Use a chain of asynchronous operators to receive and process data fetched from a URL.
- [dataTaskPublisher(for:)](datataskpublisher%28for_%29-5kiir.md): Returns a publisher that wraps a URL session data task for a given URL.
- [URLSession.DataTaskPublisher](datataskpublisher.md): A publisher that delivers the results of performing URL session data tasks.
