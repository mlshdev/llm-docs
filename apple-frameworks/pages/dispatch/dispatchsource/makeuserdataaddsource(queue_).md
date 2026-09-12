> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/makeuserdataaddsource(queue:)](https://developer.apple.com/documentation/dispatch/dispatchsource/makeuserdataaddsource(queue:))

# makeUserDataAddSource(queue:)

**Framework:** Dispatch  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch source object that you use to coalesce custom app data using an AND operator.

## Declaration

```swift
class func makeUserDataAddSource(queue: DispatchQueue? = nil) -> any DispatchSourceUserDataAdd
```

## Parameters

- `queue`: The dispatch queue to use when executing the installed handlers.

<a id="return-value"></a>

## Return Value

A dispatch source object that conforms to the [DispatchSourceUserDataAdd](../dispatchsourceuserdataadd.md) protocol.

<a id="Discussion"></a>

## Discussion

After creating the dispatch source, use the methods of the [DispatchSourceProtocol](../dispatchsourceprotocol.md) protocol to install the event handlers you need. The returned dispatch source is in the inactive state initially. When you are ready to begin processing events, call its [activate()](../dispatchobject/activate%28%29.md) method.

## See Also

### Creating a Custom Source

- [makeUserDataOrSource(queue:)](makeuserdataorsource%28queue_%29.md): Creates a new dispatch source object that you use to coalesce custom app data using an OR operator.
- [makeUserDataReplaceSource(queue:)](makeuserdatareplacesource%28queue_%29.md): Creates a new dispatch source object that you use to track custom app data.
- [DispatchSourceUserDataAdd](../dispatchsourceuserdataadd.md): A dispatch source that coalesces data you provide using an AND operation.
- [DispatchSourceUserDataOr](../dispatchsourceuserdataor.md): A dispatch source that coalesces data you provide using an OR operation.
- [DispatchSourceUserDataReplace](../dispatchsourceuserdatareplace.md): A dispatch source that replaces any pending data with the new value you provide.
