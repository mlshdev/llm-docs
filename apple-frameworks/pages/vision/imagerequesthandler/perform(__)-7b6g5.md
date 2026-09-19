> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/imagerequesthandler/perform(_:)-7b6g5

# perform(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Performs a framework request on the handler’s image.

## Declaration

```swift
final func perform<T>(_ request: T) async throws -> T.Result where T : VisionRequest
```

## See Also

### Performing the request

- [perform(\_:)](perform%28__%29-l6er.md): Performs one or more framework requests on the handler’s image.
- [performAll(\_:)](performall%28__%29.md): Schedules a collection of framework requests to perform on the handler’s image.
