> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohideventservice/handlecopymatchingevent

# handleCopyMatchingEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+ · macOS

## Declaration

```objectivec
virtual kern_return_t handleCopyMatchingEvent(OSDictionary *matching, IOHIDEvent **event);
```
