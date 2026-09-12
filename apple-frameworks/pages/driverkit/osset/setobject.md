> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osset/setobject](https://developer.apple.com/documentation/driverkit/osset/setobject)

# setObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Adds an object to the OSSet if it is not already present.

## Declaration

```objectivec
bool setObject(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: The OSMetaClassBase-derived object to be added to the set.

<a id="return-value"></a>

## Return Value

`true` if `anObject` was successfully added to the set, `false` otherwise (including if it was already in the set).

<a id="discussion"></a>

## Discussion

The set adds storage to accomodate the new object, if necessary. If successfully added, the object is retained.

A `false` return value can mean either that `anObject` is already present in the set, or that a memory allocation failure occurred. If you need to know whether the object is already present, use containsObject.
