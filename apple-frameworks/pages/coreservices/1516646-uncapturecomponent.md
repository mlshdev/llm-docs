> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516646-uncapturecomponent](https://developer.apple.com/documentation/coreservices/1516646-uncapturecomponent)

# UncaptureComponent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Allows your component to uncapture a previously captured component.

## Declaration

```objectivec
OSErr UncaptureComponent(Component aComponent);
```

## Parameters

- `aComponent`: The component to be uncaptured. Your component obtains this identifier from the [CaptureComponent](1516357-capturecomponent.md) function. You can use a component instance here, but you must coerce the data type appropriately.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

<a id="discussion"></a>

## Discussion

This function restores the specified component to the list of available components. Applications can then access the component and retrieve information about the component using Component Manager functions.

## See Also

### Capturing Components

- [CaptureComponent](1516357-capturecomponent.md): Deprecated. Allows your component to capture another component.
