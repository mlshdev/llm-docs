> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osboolean/release

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
