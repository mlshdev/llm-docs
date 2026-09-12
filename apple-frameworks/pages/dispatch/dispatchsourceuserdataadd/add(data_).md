> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceuserdataadd/add(data:)](https://developer.apple.com/documentation/dispatch/dispatchsourceuserdataadd/add(data:))

# add(data:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds the value to the current pending data.

## Declaration

```swift
func add(data: UInt)
```

## Parameters

- `data`: The value you want to add the dispatch source.

<a id="Discussion"></a>

## Discussion

After you call this method, the dispatch source submits its event handler to its target queue to process the data. If you specify `0` for the data parameter, the dispatch source does not submit its event hander for execution.
