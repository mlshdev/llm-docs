> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdata/isequalto-4xz0j](https://developer.apple.com/documentation/driverkit/osdata/isequalto-4xz0j)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the data with an OSObject

## Declaration

```objectivec
virtual bool isEqualTo(const OSMetaClassBase *anObject) const;
```

## Parameters

- `anObject`: The object to compare with.

<a id="return-value"></a>

## Return Value

True iff the object is of class OSData or OSString and isEqualTo() returns true.

<a id="Discussion"></a>

## Discussion

If the object is of class OSData, the result of isEqualTo(const OSData \* aDataObj) is returned. If the object is of class OSString, the result of OSString::isEqualTo(const OSData \* aDataObj) is returned. Otherwise false is returned.

## See Also

### Comparing Data Objects

- [isEqualTo](isequalto-2kdml.md): Compares the data with an OSData
- [isEqualTo](isequalto-5ssf5.md): Compares the data with an OSString
- [isEqualTo](isequalto-79gqy.md): Compares the data with a pointer to bytes
