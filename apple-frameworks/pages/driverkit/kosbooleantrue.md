> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/kosbooleantrue](https://developer.apple.com/documentation/driverkit/kosbooleantrue)

# kOSBooleanTrue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit · iOS · iPadOS · macOS

The OSBoolean constant for `true` .

## Declaration

```objectivec
extern OSBooleanPtr kOSBooleanTrue;
```

<a id="Discussion"></a>

## Discussion

kOSBooleanTrue is the OSBoolean constant for `true` . This object does not need to be retained or released (but it can be). Comparisons should be of the form `booleanObject == kOSBooleanTrue`

## See Also

### Getting Boolean Values

- [kOSBooleanFalse](kosbooleanfalse.md): The OSBoolean constant for `false` .
