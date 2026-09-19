> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidelement/getusage

# getUsage

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

## Declaration

```objectivec
virtual uint32_t getUsage();
```

<a id="return-value"></a>

## Return Value

Returns the element’s usage. Usages are defined in [HID Usage Tables](../hid-usage-tables.md).

## See Also

### Getting an Element’s Usage Information

- [getUsagePage](getusagepage.md)
