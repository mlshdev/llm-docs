> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516331-getcomponentrefcon](https://developer.apple.com/documentation/coreservices/1516331-getcomponentrefcon)

# GetComponentRefcon

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Retrieves the value of the reference constant for your component.

## Declaration

```objectivec
long GetComponentRefcon(Component aComponent);
```

## Parameters

- `aComponent`: The component whose reference constant you wish to get. You can use a component instance here, but you must coerce the data type appropriately.

<a id="return_value"></a>

## Return Value

The reference constant for the specified component.

<a id="discussion"></a>

## Discussion

There is one reference constant for each component, regardless of the number of connections to that component. When your component is registered, the Component Manager sets this reference constant to 0.

The reference constant is a 4-byte value that your component can use in any way you decide. For example, you might use the reference constant to store the address of a data structure that is shared by all connections maintained by your component. You should allocate shared structures in the system heap. Your component should deallocate the structure when its last connection is closed or when it is unregistered.

## See Also

### Working With Component Reference Constants

- [SetComponentRefcon](1516562-setcomponentrefcon.md): Deprecated. Sets the reference constant for your component.
