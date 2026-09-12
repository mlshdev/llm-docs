> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osboolean/release](https://developer.apple.com/documentation/driverkit/osboolean/release)

# release

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Releases the OSObject instance

## Declaration

```objectivec
virtual void release() const;
```

<a id="Discussion"></a>

## Discussion

Decreases the retain count of the instance by one. If the count is then zero, frees the object.

## See Also

### Configuring a Boolean Type

- [free](free.md)
- [retain](retain.md): Retains the OSObject instance
- [OSBooleanPtr](../osbooleanptr.md)
