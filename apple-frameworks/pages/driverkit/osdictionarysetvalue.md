> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdictionarysetvalue

# OSDictionarySetValue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
bool OSDictionarySetValue(OSDictionaryPtr obj, const char *key, OSObjectPtr value);
```

## See Also

### Getting and Setting Values

- [OSDictionaryGetValue](osdictionarygetvalue.md)
- [OSDictionaryGetStringValue](osdictionarygetstringvalue.md)
- [OSDictionaryGetUInt64Value](osdictionarygetuint64value.md)
- [OSDictionarySetStringValue](osdictionarysetstringvalue.md)
- [OSDictionarySetUInt64Value](osdictionarysetuint64value.md)
- [OSDictionaryPtr](osdictionaryptr.md)
