> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidelement/getreportsize

# getReportSize

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

## Declaration

```objectivec
virtual uint32_t getReportSize();
```

<a id="return-value"></a>

## Return Value

Returns the element’s report size, in bits.

## See Also

### Getting Report Information

- [getReportID](getreportid.md)
- [getReportCount](getreportcount.md)
- [IOHIDReportType](../iohidreporttype.md): Describes the different types of HID reports.
