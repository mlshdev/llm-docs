> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceuserdataor/or(data:)](https://developer.apple.com/documentation/dispatch/dispatchsourceuserdataor/or(data:))

# or(data:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func or(data: UInt)
```

## Parameters

- `data`: The value you want to merge with the existing data in the dispatch source. The dispatch source ORs this value with the currently pending data.

<a id="Discussion"></a>

## Discussion

After you call this method, the dispatch source submits its event handler to its target queue to process the data. If you specify `0` for the data parameter, the dispatch source does not submit its event hander for execution.
