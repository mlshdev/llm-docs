> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_once_f-c.func](https://developer.apple.com/documentation/dispatch/dispatch_once_f-c.func)

# dispatch_once_f

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes an application-defined function only once for the lifetime of an application.

## Declaration

```objectivec
extern void dispatch_once_f(dispatch_once_t *predicate, void *context, dispatch_function_t function);
```

## Parameters

- `predicate`: A pointer to a [dispatch_once_t](dispatch_once_t.md) structure that is used to test whether the block has completed or not.
- `context`: The application-defined context parameter to pass to the function.
- `function`: The application-defined function to invoke once on the target queue. The parameter passed to this function is the value in the `context` parameter. This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

This function is useful for initialization of global data (singletons) in an application. Always call this function before using or testing any variables that are initialized by the function.

If called simultaneously from multiple threads, this function waits synchronously until the work function has completed.

The predicate must point to a variable stored in global or static scope. The result of using a predicate with automatic or dynamic storage (including Objective-C instance variables) is undefined.

## See Also

### Executing a Task Only Once

- [dispatch_once](dispatch_once-c.func.md): Executes a block object only once for the lifetime of an application.
- [dispatch_once_t](dispatch_once_t.md): A predicate for use with the `dispatch_once` function.
