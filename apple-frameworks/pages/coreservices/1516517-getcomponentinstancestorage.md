> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516517-getcomponentinstancestorage](https://developer.apple.com/documentation/coreservices/1516517-getcomponentinstancestorage)

# GetComponentInstanceStorage

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Allows your component to retrieve a handle to the memory associated with a connection.

## Declaration

```objectivec
Handle GetComponentInstanceStorage(ComponentInstance aComponentInstance);
```

## Parameters

- `aComponentInstance`: The connection for which to retrieve the associated memory. The Component Manager provides a component instance to your component when the connection is opened. You can use a component identifier here, but you must coerce the data type appropriately.

<a id="return_value"></a>

## Return Value

A handle to the memory associated with the specified connection.

<a id="discussion"></a>

## Discussion

Typically, your component does not need to use this function, because the Component Manager provides this handle to your component each time the client application requests service from this connection.

Your component tells the Component Manager about the memory associated with a connection by calling the  [SetComponentInstanceStorage](1516556-setcomponentinstancestorage.md)  function.

## See Also

### Managing Component Connections

- [CountComponentInstances](1516394-countcomponentinstances.md): Deprecated. Determines the number of open connections being managed by a specified component.
- [SetComponentInstanceStorage](1516556-setcomponentinstancestorage.md): Deprecated. Allows your component to associate memory with a connection.
