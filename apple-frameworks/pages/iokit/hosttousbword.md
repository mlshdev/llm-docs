> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/hosttousbword](https://developer.apple.com/documentation/iokit/hosttousbword)

# HostToUSBWord

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
#define HostToUSBWord
```

<a id="discussion"></a>

## Discussion

The USB API's use a convention of specifying parameters in the host order. The USB spec specifies that multi-byte items should be formatted in little endian order. The following macros allow one to translate multi-byte values from Host order to USB order and vice versa. There are separate macros for in-kernel use and for user space use.
