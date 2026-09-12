> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/kcmiosamplebufferdiscontinuityflag_sleepwakecycle](https://developer.apple.com/documentation/coremediaio/kcmiosamplebufferdiscontinuityflag_sleepwakecycle)

# kCMIOSampleBufferDiscontinuityFlag_SleepWakeCycle

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
kCMIOSampleBufferDiscontinuityFlag_SleepWakeCycle
```

<a id="discussion"></a>

## Discussion

By increasing the duration of known good media;  this is a “soft” discontinuity, much like kCMIOSampleBufferDiscontinuityFlag_TimecodeDiscontinuity, meaning that the stream isn’t necessarily broken, but clients might want to force capture of all media.
