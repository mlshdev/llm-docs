> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/datataskpublisher](https://developer.apple.com/documentation/foundation/urlsession/datataskpublisher)

# URLSession.DataTaskPublisher

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that delivers the results of performing URL session data tasks.

## Declaration

```swift
struct DataTaskPublisher
```

## Mentioned In

- [Processing URL session data task results with Combine](../processing-url-session-data-task-results-with-combine.md)

## Topics

### Declaring publisher topography

- [URLSession.DataTaskPublisher.Output](datataskpublisher/output.md): The kind of values published by this publisher.
- [URLSession.DataTaskPublisher.Failure](datataskpublisher/failure.md): The kind of errors this publisher might publish.

### Creating a data task publisher

- [init(request:session:)](datataskpublisher/init%28request_session_%29.md): Creates a data task publisher from the provided URL request and URL session.

### Inspecting data task properties

- [request](datataskpublisher/request.md): The URL request performed by the data task associated with this publisher.
- [session](datataskpublisher/session.md): The URL session that performs the data task associated with this publisher.

## Relationships

### Conforms To

- [Publisher](../../combine/publisher.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing tasks as a Combine Publisher

- [Processing URL session data task results with Combine](../processing-url-session-data-task-results-with-combine.md): Use a chain of asynchronous operators to receive and process data fetched from a URL.
- [dataTaskPublisher(for:)](datataskpublisher%28for_%29-61v3e.md): Returns a publisher that wraps a URL session data task for a given URL request.
- [dataTaskPublisher(for:)](datataskpublisher%28for_%29-5kiir.md): Returns a publisher that wraps a URL session data task for a given URL.
