> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iobuffermemorydescriptor/init](https://developer.apple.com/documentation/driverkit/iobuffermemorydescriptor/init)

# init

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Initializes the buffer memory descriptor object.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`true` if initialization was successful, or `false` if it was unsuccessful.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. Use the [Create](create.md) method instead.

## See Also

### Creating a Memory Buffer

- [Create](create.md): Creates a new memory buffer descriptor object in the current process space.
- [free](free.md): Performs any final cleanup for the memory buffer descriptor object.
