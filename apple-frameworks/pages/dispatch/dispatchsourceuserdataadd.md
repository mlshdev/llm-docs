> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceuserdataadd](https://developer.apple.com/documentation/dispatch/dispatchsourceuserdataadd)

# DispatchSourceUserDataAdd

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch source that coalesces data you provide using an AND operation.

## Declaration

```swift
protocol DispatchSourceUserDataAdd : DispatchSourceProtocol, Sendable
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeUserDataAddSource(queue:)](dispatchsource/makeuserdataaddsource%28queue_%29.md) method to create an object that adopts this protocol.

To add custom data to the dispatch source, call the [add(data:)](dispatchsourceuserdataadd/add%28data_%29.md) method.

## Topics

### Getting the Event Data

- [add(data:)](dispatchsourceuserdataadd/add%28data_%29.md): Adds the value to the current pending data.

## Relationships

### Inherits From

- [DispatchSourceProtocol](dispatchsourceprotocol.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DispatchSource](dispatchsource.md)

## See Also

### Creating a Custom Source

- [makeUserDataAddSource(queue:)](dispatchsource/makeuserdataaddsource%28queue_%29.md): Creates a new dispatch source object that you use to coalesce custom app data using an AND operator.
- [makeUserDataOrSource(queue:)](dispatchsource/makeuserdataorsource%28queue_%29.md): Creates a new dispatch source object that you use to coalesce custom app data using an OR operator.
- [makeUserDataReplaceSource(queue:)](dispatchsource/makeuserdatareplacesource%28queue_%29.md): Creates a new dispatch source object that you use to track custom app data.
- [DispatchSourceUserDataOr](dispatchsourceuserdataor.md): A dispatch source that coalesces data you provide using an OR operation.
- [DispatchSourceUserDataReplace](dispatchsourceuserdatareplace.md): A dispatch source that replaces any pending data with the new value you provide.
