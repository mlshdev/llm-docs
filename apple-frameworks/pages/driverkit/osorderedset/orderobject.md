> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osorderedset/orderobject](https://developer.apple.com/documentation/driverkit/osorderedset/orderobject)

# orderObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Calls the ordered set’s order function against a `NULL` object.

## Declaration

```objectivec
int32_t orderObject(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: The object to be ordered.

<a id="return-value"></a>

## Return Value

The ordering value for the object.

<a id="discussion"></a>

## Discussion

This function calls the ordered set’s order function with `anObject`, `NULL`, and the ordering context (or `NULL` if none was set), and returns the result of that function.
