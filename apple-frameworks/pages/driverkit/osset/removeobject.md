> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osset/removeobject

# removeObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
void removeObject(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: The OSMetaClassBase-derived object to be removed from the set.

<a id="discussion"></a>

## Discussion

Removes an object from the set.

Removes an object from the set.
