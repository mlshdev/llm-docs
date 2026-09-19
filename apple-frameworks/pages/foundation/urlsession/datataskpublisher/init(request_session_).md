> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlsession/datataskpublisher/init(request:session:)

# init(request:session:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a data task publisher from the provided URL request and URL session.

## Declaration

```swift
init(request: URLRequest, session: URLSession)
```

## Parameters

- `request`: The [URLRequest](../../urlrequest.md) from which to create a URL session data task.
- `session`: The [URLSession](../../urlsession.md) to create the data task.
