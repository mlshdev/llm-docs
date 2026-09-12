> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceuserdatareplace/replace(data:)](https://developer.apple.com/documentation/dispatch/dispatchsourceuserdatareplace/replace(data:))

# replace(data:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces the current pending data with the new value you provide.

## Declaration

```swift
func replace(data: UInt)
```

## Parameters

- `data`: The data that replaces the current pending value.

<a id="Discussion"></a>

## Discussion

After you call this method, the dispatch source submits its event handler to its target queue to process the data. If you specify `0` for the data parameter, the dispatch source does not submit its event hander for execution.
