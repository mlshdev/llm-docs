> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/initwith](https://developer.apple.com/documentation/serialdriverkit/iouserserial/initwith)

# initWith

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Initializes the private data structures associated with this class.

## Declaration

```objectivec
virtual bool initWith(IOBufferMemoryDescriptor *ifmd);
```

## Parameters

- `ifmd`: The memory buffer to use for interrupt-related data.

<a id="return-value"></a>

## Return Value

`YES` if initialization succeeded, or `NO` if it didn’t.

<a id="Discussion"></a>

## Discussion

Do not override or call this method. Instead, override the [init](../../usbserialdriverkit/iouserusbserial/init.md) method and use it to allocate memory for your driver’s data structures.

## See Also

### Configuring the Service

- [init](init.md): Handles the basic initialization of the service.
- [Start](start.md): Starts the current service and associates it with the specified provider.
- [Stop](stop.md): Stops the service associated with the specified provider.
- [free](free.md): Performs any final cleanup for the service.
