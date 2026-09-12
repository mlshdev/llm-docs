> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516394-countcomponentinstances](https://developer.apple.com/documentation/coreservices/1516394-countcomponentinstances)

# CountComponentInstances

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Determines the number of open connections being managed by a specified component.

## Declaration

```objectivec
long CountComponentInstances(Component aComponent);
```

## Parameters

- `aComponent`: The component for which you want a count of open connections. You can use a component instance here, but you must coerce the data type appropriately.

<a id="return_value"></a>

## Return Value

The number of open connections for the specified component.

<a id="discussion"></a>

## Discussion

This function can be useful if you want to restrict the number of connections for your component or if your component needs to perform special processing based on the number of open connections.

## See Also

### Managing Component Connections

- [GetComponentInstanceStorage](1516517-getcomponentinstancestorage.md): Deprecated. Allows your component to retrieve a handle to the memory associated with a connection.
- [SetComponentInstanceStorage](1516556-setcomponentinstancestorage.md): Deprecated. Allows your component to associate memory with a connection.
