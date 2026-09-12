> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osorderedset/setobject](https://developer.apple.com/documentation/driverkit/osorderedset/setobject)

# setObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Adds an object to the OSOrderedSet if it is not already present, storing it in sorted order if there is an order function.

## Declaration

```objectivec
bool setObject(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: The OSMetaClassBase-derived object to be added to the ordered set.

<a id="return-value"></a>

## Return Value

`true` if `anObject` was successfully added to the ordered set, `false` otherwise (including if it was already in the ordered set).

<a id="discussion"></a>

## Discussion

The set adds storage to accomodate the new object, if necessary. If successfully added, the object is retained.

If `anObject` is not already in the ordered set and there is an order function, this function loops through the existing objects, calling the order function with arguments each existingObject, `anObject`, and the ordering context (or `NULL` if none was set), until the order function returns a value *greater than* or equal to 0. It then inserts `anObject` at the index of the existing object.

If there is no order function, the object is inserted at index 0.

A `false` return value can mean either that `anObject` is already present in the set, or that a memory allocation failure occurred. If you need to know whether the object is already present, use containsObject(const OSMetaClassBase \*).
