> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516663-setcomponentinstanceerror](https://developer.apple.com/documentation/coreservices/1516663-setcomponentinstanceerror)

# SetComponentInstanceError

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Passes error information to the Component Manager which sets the current error value for the appropriate connection.

## Declaration

```objectivec
void SetComponentInstanceError(ComponentInstance aComponentInstance, OSErr theError);
```

## Parameters

- `aComponentInstance`: The connection for which to set the error. The Component Manager provides a component instance to your component when the connection is opened. The Component Manager also provides a component instance to your component as the first parameter in the `params` field of the parameters structure.
- `theError`: The new value for the current error.

<a id="discussion"></a>

## Discussion

In general, your component returns error information in its function result a nonzero function result indicates an error occurred, and a function result of 0 indicates the request was successful. However, some requests require that your component return other information as its function result. In these cases, your component can use this function to report its latest error state to the Component Manager. You can also use this function at any time during your component’s execution to report an error.

Applications retrieve this error information by calling the  [GetComponentInstanceError](1516618-getcomponentinstanceerror.md)  function. The documentation for your component should specify how the component indicates errors.
