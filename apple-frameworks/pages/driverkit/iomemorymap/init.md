> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iomemorymap/init](https://developer.apple.com/documentation/driverkit/iomemorymap/init)

# init

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Initializes the memory map object.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`true` if initialization was successful, or `false` if it was unsuccessful.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. To create a memory map object, call the [CreateMapping](../iomemorydescriptor/createmapping.md) method of [IOMemoryDescriptor](../iomemorydescriptor.md).

## See Also

### Configuring the Memory Map

- [free](free.md): Performs any final cleanup for the memory map object.
