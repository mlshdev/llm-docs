> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osset/merge](https://developer.apple.com/documentation/driverkit/osset/merge)

# merge

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Adds the contents of an OSet to the set.

## Declaration

```objectivec
bool merge(const OSArray *otherArray);
```

## Parameters

- `otherArray`: The OSSet object containing the objects to be added.

<a id="return-value"></a>

## Return Value

`true` if any object from `set` are successfully added the receiver (or were already present), `false` otherwise.

<a id="discussion"></a>

## Discussion

This functions adds to the receiving set all objects from `set` that are not already in the receiving set. Objects added to the receiver are retained.

In releases prior to 10.7, this function would return `false` if an object from `set` was already present in the set, or if `set` was empty. This is no longer the case, so this function correctly returns `true` when the semantic of merging is met.
