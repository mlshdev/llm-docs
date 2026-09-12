> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516562-setcomponentrefcon](https://developer.apple.com/documentation/coreservices/1516562-setcomponentrefcon)

# SetComponentRefcon

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the reference constant for your component.

## Declaration

```objectivec
void SetComponentRefcon(Component aComponent, long theRefcon);
```

## Parameters

- `aComponent`: The component whose reference constant you wish to set. You can use a component instance here, but you must coerce the data type appropriately.
- `theRefcon`: The reference constant value that you want to set for your component. Your component can retrieve the reference constant using the [GetComponentRefcon](1516331-getcomponentrefcon.md) function.

<a id="discussion"></a>

## Discussion

There is one reference constant for each component, regardless of the number of connections to that component. When your component is registered, the Component Manager sets this reference constant to 0.

The reference constant is a 4-byte value that your component can use in any way you decide. For example, you might use the reference constant to store the address of a data structure that is shared by all connections maintained by your component. You should allocate shared structures in the system heap. Your component should deallocate the structure when its last connection is closed or when it is unregistered.

## See Also

### Working With Component Reference Constants

- [GetComponentRefcon](1516331-getcomponentrefcon.md): Deprecated. Retrieves the value of the reference constant for your component.
