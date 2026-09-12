> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/isequalto-93qxy](https://developer.apple.com/documentation/driverkit/osarray/isequalto-93qxy)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the array with an OSObject

## Declaration

```objectivec
virtual bool isEqualTo(const OSMetaClassBase *anObject) const;
```

## Parameters

- `anObject`: The object to compare with.

<a id="return-value"></a>

## Return Value

True iff the object is of class OSArray and isEqualTo(const OSArray \* anArray) returns true.

<a id="Discussion"></a>

## Discussion

If the object is of class OSArray, the result of isEqualTo(const OSArray \* anArray) is returned. Otherwise false is returned.

## See Also

### Comparing Arrays

- [isEqualTo](isequalto-5w7om.md): Compares all members of two arrays with isEqualTo().
