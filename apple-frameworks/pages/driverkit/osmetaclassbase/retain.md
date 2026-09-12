> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osmetaclassbase/retain](https://developer.apple.com/documentation/driverkit/osmetaclassbase/retain)

# retain

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Retains the OSObject instance

## Declaration

```objectivec
virtual void retain() const;
```

<a id="Discussion"></a>

## Discussion

Increases the retain count of the instance by one.

## See Also

### Managing the Object Lifecycle

- [release](release.md): Releases the OSObject instance
