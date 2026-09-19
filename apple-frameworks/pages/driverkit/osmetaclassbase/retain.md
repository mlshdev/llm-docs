> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osmetaclassbase/retain

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
