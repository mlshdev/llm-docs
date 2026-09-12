> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/mach_timebase_info-c.struct](https://developer.apple.com/documentation/driverkit/mach_timebase_info-c.struct)

# mach_timebase_info

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Structure  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
struct mach_timebase_info;
```

<a id="overview"></a>

## Overview

In general prefer to use the \<time.h\> API clock_gettime_nsec_np(3), which deals in the same clocks (and more) in ns units. Conversion of ns to (resp. from) tick units as returned by the mach time APIs is performed by division (resp. multiplication) with the fraction returned by mach_timebase_info().

## Topics

### Instance Properties

- [denom](mach_timebase_info-c.struct/denom.md)
- [numer](mach_timebase_info-c.struct/numer.md)

## See Also

### Structures

- [IODMACommandSpecification](iodmacommandspecification.md)
- [IOHistogramReportValues](iohistogramreportvalues.md)
- [IOHistogramSegmentConfig](iohistogramsegmentconfig.md)
- [IONormDistReportValues](ionormdistreportvalues.md)
- [IORPCMessageErrorReturnContent](iorpcmessageerrorreturncontent.md)
- [IOReportChannel](ioreportchannel.md)
- [IOReportChannelList](ioreportchannellist.md)
- [IOReportChannelType](ioreportchanneltype.md)
- [IOReportElement](ioreportelement.md)
- [IOReportElementValues](ioreportelementvalues.md)
- [IOReportInterest](ioreportinterest.md)
- [IOReportInterestList](ioreportinterestlist.md)
- [IOSimpleArrayReportValues](iosimplearrayreportvalues.md)
- [IOSimpleReportValues](iosimplereportvalues.md)
- [IOStateReportValues](iostatereportvalues.md)
