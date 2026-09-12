> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osnumber/isequalto-333kh](https://developer.apple.com/documentation/driverkit/osnumber/isequalto-333kh)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the string with an OSObject

## Declaration

```objectivec
virtual bool isEqualTo(const OSMetaClassBase *anObject) const;
```

## Parameters

- `anObject`: The object to compare with.

<a id="return-value"></a>

## Return Value

True iff the object is of class OSNumber isEqualTo() returns true.

<a id="Discussion"></a>

## Discussion

If the object is of class OSNumber, the result of isEqualTo(const OSNumber \* aDataObj) is returned. Otherwise false is returned.

## See Also

### Comparing Numbers

- [isEqualTo](isequalto-58rb9.md): Compares the number with an OSNumber.
