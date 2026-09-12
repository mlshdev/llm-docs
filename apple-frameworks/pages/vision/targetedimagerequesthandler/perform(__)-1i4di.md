> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/targetedimagerequesthandler/perform(_:)-1i4di](https://developer.apple.com/documentation/vision/targetedimagerequesthandler/perform(_:)-1i4di)

# perform(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Performs one or more framework requests on the handler’s image.

## Declaration

```swift
final func perform<each T>(_ request: repeat each T) async throws -> (repeat (each T).Result) where repeat each T : TargetedRequest
```

## See Also

### Performing the request

- [perform(\_:)](perform%28__%29-2r0k8.md): Performs a framework request on the handler’s image.
- [performAll(\_:)](performall%28__%29.md): Schedules a collection of framework requests to perform on the handler’s image.
