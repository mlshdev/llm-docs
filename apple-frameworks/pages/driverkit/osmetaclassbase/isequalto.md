> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osmetaclassbase/isequalto

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares two objects

## Declaration

```objectivec
virtual bool isEqualTo(const OSMetaClassBase *anObject) const;
```

<a id="Discussion"></a>

## Discussion

The default implementation only compares the object pointers, however many container classes override to provide deeper comparison.
