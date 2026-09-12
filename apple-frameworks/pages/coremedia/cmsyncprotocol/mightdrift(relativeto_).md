> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncprotocol/mightdrift(relativeto:)](https://developer.apple.com/documentation/coremedia/cmsyncprotocol/mightdrift(relativeto:))

# mightDrift(relativeTo:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether it’s possible for the clock to drift relative to the input.

## Declaration

```swift
func mightDrift<T>(relativeTo clockOrTimebase: T) -> Bool where T : CMSyncProtocol
```

## Parameters

- `clockOrTimebase`: The clock to compare to.
