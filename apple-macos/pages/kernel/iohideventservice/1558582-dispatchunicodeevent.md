> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1558582-dispatchunicodeevent](https://developer.apple.com/documentation/kernel/iohideventservice/1558582-dispatchunicodeevent)

# dispatchUnicodeEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchUnicodeEvent(AbsoluteTime timeStamp, UInt8 *payload, UInt32 length, UnicodeEncodingType encoding, IOFixed quality, IOOptionBits options);
```
