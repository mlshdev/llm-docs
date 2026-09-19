> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidelement/getusagepage

# getUsagePage

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

## Declaration

```objectivec
virtual uint32_t getUsagePage();
```

<a id="return-value"></a>

## Return Value

Returns the element’s usage page. Usage pages are defined in [HID Usage Tables](../hid-usage-tables.md).

## See Also

### Getting an Element’s Usage Information

- [getUsage](getusage.md)
