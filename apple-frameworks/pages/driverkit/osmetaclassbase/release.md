> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osmetaclassbase/release](https://developer.apple.com/documentation/driverkit/osmetaclassbase/release)

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

### Managing the Object Lifecycle

- [retain](retain.md): Retains the OSObject instance
