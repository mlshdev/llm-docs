> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignpostintervalstate/beginstate(id:)](https://developer.apple.com/documentation/os/ossignpostintervalstate/beginstate(id:))

# beginState(id:)

**Framework:** os  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Recreates interval state from the specified signpost ID.

## Declaration

```swift
static func beginState(id: OSSignpostID) -> OSSignpostIntervalState
```

## Parameters

- `id`: The signpost ID you use to begin the signposted interval.

<a id="return-value"></a>

## Return Value

The recreated interval state.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Recreating interval state to end a signposted interval bypasses runtime assertions that check for consistency between the beginning and the end of the interval.
