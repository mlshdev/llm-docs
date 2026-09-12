> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osstring/isequalto-712xj](https://developer.apple.com/documentation/driverkit/osstring/isequalto-712xj)

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

True iff the object is of class OSData or OSString and isEqualTo() returns true.

<a id="Discussion"></a>

## Discussion

If the object is of class OSString, the result of isEqualTo(const OSString \* aDataObj) is returned. If the object is of class OSData, the result of isEqualTo(const OSData \* aDataObj) is returned. Otherwise false is returned.

## See Also

### Comparing Strings

- [isEqualTo](isequalto-1uq1f.md): Compares the string with an OSData.
- [isEqualTo](isequalto-5paj5.md): Compares the string with an OSString.
- [isEqualTo](isequalto-2rg80.md): Compares the string with a c-string.
