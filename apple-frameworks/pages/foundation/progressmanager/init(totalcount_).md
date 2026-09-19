> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progressmanager/init(totalcount:)

# init(totalCount:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initializes `self` with `totalCount`.

## Declaration

```swift
convenience init(totalCount: Int?)
```

## Parameters

- `totalCount`: Total units of work.

<a id="discussion"></a>

## Discussion

If `totalCount` is set to `nil`, `self` is indeterminate.
