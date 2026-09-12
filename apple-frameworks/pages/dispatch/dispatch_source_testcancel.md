> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_source_testcancel](https://developer.apple.com/documentation/dispatch/dispatch_source_testcancel)

# dispatch_source_testcancel

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tests whether the given dispatch source has been canceled.

## Declaration

```objectivec
extern intptr_t dispatch_source_testcancel(dispatch_source_t source);
```

## Parameters

- `source`: The dispatch source to be tested. This parameter cannot be `NULL`.

<a id="return-value"></a>

## Return Value

Non-zero if canceled and zero if not canceled.

<a id="Discussion"></a>

## Discussion

Your application can use this function to test whether a dispatch source object has been canceled by a call to [dispatch_source_cancel](dispatch_source_cancel.md). The result of this function is non-zero immediately after [dispatch_source_cancel](dispatch_source_cancel.md) has been called.

## See Also

### Canceling a Dispatch Source

- [dispatch_source_cancel](dispatch_source_cancel.md): Asynchronously cancels the dispatch source, preventing any further invocation of its event handler block.
