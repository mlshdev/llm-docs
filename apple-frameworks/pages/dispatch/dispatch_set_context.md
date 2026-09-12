> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_set_context](https://developer.apple.com/documentation/dispatch/dispatch_set_context)

# dispatch_set_context

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates an application-defined context with the object.

## Declaration

```objectivec
extern void dispatch_set_context(dispatch_object_t object, void *context);
```

## Parameters

- `object`: This parameter cannot be `NULL`.
- `context`: The new application-defined context for the object. This can be `NULL`.

<a id="Discussion"></a>

## Discussion

Your application can associate custom context data with the object, to be used only by your application. Your application must allocate and deallocate the data as appropriate.

## See Also

### Updating Contextual Data

- [dispatch_get_context](dispatch_get_context.md): Returns the application-defined context of an object.
