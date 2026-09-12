> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iomemorydescriptor/init](https://developer.apple.com/documentation/driverkit/iomemorydescriptor/init)

# init

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Initializes the memory descriptor object.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if initialization was successful, or [false](https://developer.apple.com/documentation/swift/false) if it was unsuccessful.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. To allocate a memory buffer for your driver, call the [Create](../iobuffermemorydescriptor/create.md) method of [IOBufferMemoryDescriptor](../iobuffermemorydescriptor.md).

## See Also

### Configuring the Buffer

- [free](free.md): Performs any final cleanup for the memory descriptor object.
