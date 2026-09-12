> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/isequalto-3kuk7](https://developer.apple.com/documentation/driverkit/osdictionary/isequalto-3kuk7)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the dictionary with an OSObject

## Declaration

```objectivec
virtual bool isEqualTo(const OSMetaClassBase *anObject) const;
```

## Parameters

- `anObject`: The object to compare with.

<a id="return-value"></a>

## Return Value

True iff the object is of class OSDictionary and isEqualTo(const OSDictionary \* anArray) returns true.

<a id="Discussion"></a>

## Discussion

If the object is of class OSDictionary, the result of isEqualTo(const OSDictionary \* anArray) is returned. Otherwise false is returned.

## See Also

### Comparing Dictionaries

- [isEqualTo](isequalto-3c1k0.md): Compares all members of two dictionaries with isEqualTo().
- [isEqualTo](isequalto-2p9or.md): Compares certain members of two dictionaries with isEqualTo().
