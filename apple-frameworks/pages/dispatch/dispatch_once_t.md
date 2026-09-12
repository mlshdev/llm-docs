> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_once_t](https://developer.apple.com/documentation/dispatch/dispatch_once_t)

# dispatch_once_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A predicate for use with the `dispatch_once` function.

## Declaration

```objectivec
typedef intptr_t dispatch_once_t;
```

<a id="Discussion"></a>

## Discussion

Variables of this type must have global or static scope.  The result of using this type with automatic or dynamic allocation is undefined. See [dispatch_get_global_queue](dispatch_get_global_queue.md) for details.

## See Also

### Executing a Task Only Once

- [dispatch_once](dispatch_once-c.func.md): Executes a block object only once for the lifetime of an application.
- [dispatch_once_f](dispatch_once_f-c.func.md): Executes an application-defined function only once for the lifetime of an application.
