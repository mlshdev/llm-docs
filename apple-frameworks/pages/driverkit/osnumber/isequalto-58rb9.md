> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osnumber/isequalto-58rb9](https://developer.apple.com/documentation/driverkit/osnumber/isequalto-58rb9)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the number with an OSNumber.

## Declaration

```objectivec
bool isEqualTo(const OSNumber *aNumber) const;
```

## Parameters

- `aNumber`: The OSNumber to compare with.

<a id="return-value"></a>

## Return Value

True iff the two numbers have the same value.

<a id="Discussion"></a>

## Discussion

If the passed OSNumber object has the same value, regardless of size, true is returned. Otherwise false is returned.

## See Also

### Comparing Numbers

- [isEqualTo](isequalto-333kh.md): Compares the string with an OSObject
