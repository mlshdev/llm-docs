> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/kosbooleanfalse

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
