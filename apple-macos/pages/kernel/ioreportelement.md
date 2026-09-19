> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioreportelement

# IOReportElement

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.9+

## Declaration

```objectivec
typedef struct IOReportElement {
    ...
} IOReportElement;
```

```objectivec
typedef struct IOReportElement IOReportElement;
```

## Topics

### Instance Properties

- [channel_id](ioreportelement/1402797-channel_id.md)
- [channel_type](ioreportelement/1402811-channel_type.md)
- [provider_id](ioreportelement/1402847-provider_id.md)
- [timestamp](ioreportelement/1402764-timestamp.md)
- [values](ioreportelement/1402756-values.md)

## See Also

### Reports

- [IOReportChannel](ioreportchannel.md)
- [IOReportChannelList](ioreportchannellist.md)
- [IOReportChannelType](ioreportchanneltype.md)
- [IOReportElementValues](ioreportelementvalues.md)
- [IOReportInterest](ioreportinterest.md)
- [IOReportInterestList](ioreportinterestlist.md)
- [IOHistReportInfo](iohistreportinfo.md)
- [IOHistogramReportValues](iohistogramreportvalues.md)
- [IOHistogramSegmentConfig](iohistogramsegmentconfig.md)
- [IONormDistReportValues](ionormdistreportvalues.md)
- [IOSimpleArrayReportValues](iosimplearrayreportvalues.md)
- [IOSimpleReportValues](iosimplereportvalues.md)
- [IOStateReportInfo](iostatereportinfo.md)
- [IOStateReportValues](iostatereportvalues.md)
