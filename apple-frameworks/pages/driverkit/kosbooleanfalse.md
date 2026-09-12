> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/kosbooleanfalse](https://developer.apple.com/documentation/driverkit/kosbooleanfalse)

# kOSBooleanFalse

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit · iOS · iPadOS · macOS

The OSBoolean constant for `false` .

## Declaration

```objectivec
extern OSBooleanPtr kOSBooleanFalse;
```

<a id="Discussion"></a>

## Discussion

kOSBooleanFalse is the OSBoolean constant for `true` . This object does not need to be retained or released (but it can be). Comparisons should be of the form `booleanObject == kOSBooleanFalse`

## See Also

### Getting Boolean Values

- [kOSBooleanTrue](kosbooleantrue.md): The OSBoolean constant for `true` .
