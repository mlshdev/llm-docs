> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osset/containsobject

# containsObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
bool containsObject(const OSMetaClassBase *anObject) const;
```

## Parameters

- `anObject`: The OSMetaClassBase-derived object to check for in the set.

<a id="return-value"></a>

## Return Value

If anObject is non-NULL and present within the set, false otherwise.

<a id="discussion"></a>

## Discussion

Checks the set for the presence of an object.

Checks the set for the presence of an object.
