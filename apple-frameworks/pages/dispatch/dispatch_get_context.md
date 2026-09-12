> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_get_context](https://developer.apple.com/documentation/dispatch/dispatch_get_context)

# dispatch_get_context

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the application-defined context of an object.

## Declaration

```objectivec
extern void *dispatch_get_context(dispatch_object_t object);
```

## Parameters

- `object`: This parameter cannot be `NULL`.

<a id="return-value"></a>

## Return Value

The context of the object; can be `NULL`.

<a id="Discussion"></a>

## Discussion

Your application can associate custom context data with the object, to be used only by your application. Your application must allocate and deallocate the data as appropriate.

## See Also

### Updating Contextual Data

- [dispatch_set_context](dispatch_set_context.md): Associates an application-defined context with the object.
