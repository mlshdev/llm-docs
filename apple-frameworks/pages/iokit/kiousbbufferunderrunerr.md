> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiousbbufferunderrunerr](https://developer.apple.com/documentation/iokit/kiousbbufferunderrunerr)

# kIOUSBBufferUnderrunErr

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
#define kIOUSBBufferUnderrunErr
```

<a id="discussion"></a>

## Discussion

These errors are returned by the OHCI controller. The # in parenthesis (xx) corresponds to the OHCI Completion Code. For the following Completion codes, we return a generic IOKit error instead of a USB specific error. 

<a id="2557476"></a>

**Listing 1**

```occ
 
Completion Code         Error Returned              Description
9                       kIOReturnUnderrun           (Data Underrun) EP returned less data than max packet size
8                       kIOReturnOverrun            (Data Overrun) Packet too large or more data than buffer
5                       kIOReturnNotResponding      Device Not responding
4                       kIOUSBPipeStalled           Endpoint returned a STALL PID
```
