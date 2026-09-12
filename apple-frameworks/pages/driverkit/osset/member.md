> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osset/member](https://developer.apple.com/documentation/driverkit/osset/member)

# member

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Checks the set for the presence of an object.

## Declaration

```objectivec
bool member(const OSMetaClassBase *anObject) const;
```

## Parameters

- `anObject`: The OSMetaClassBase-derived object to check for in the set.

<a id="return-value"></a>

## Return Value

`true` if `anObject` is present within the set, `false` otherwise.

<a id="discussion"></a>

## Discussion

Pointer equality is used. This function returns `false` if passed `NULL`.

containsObject checks for `NULL` first, and is therefore more efficient than this function.
