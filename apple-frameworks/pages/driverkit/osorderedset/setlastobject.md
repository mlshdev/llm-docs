> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osorderedset/setlastobject](https://developer.apple.com/documentation/driverkit/osorderedset/setlastobject)

# setLastObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Adds an object at the end of the OSOrderedSet if it is not already present.

## Declaration

```objectivec
bool setLastObject(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: The OSMetaClassBase-derived object to be added to the ordered set.

<a id="return-value"></a>

## Return Value

`true` if `anObject` was successfully added to the ordered set, `false` otherwise (including if it was already in the ordered set at any index).

<a id="discussion"></a>

## Discussion

The set adds storage to accomodate the new object, if necessary. If successfully added, the object is retained.

This function ignores any ordering function of the ordered set, and can disrupt the automatic sorting mechanism. Only call this function if you are managing the ordered set directly.

A `false` return value can mean either that `anObject` is already present in the set, or that a memory allocation failure occurred. If you need to know whether the object is already present, use containsObject(const OSMetaClassBase \*).
