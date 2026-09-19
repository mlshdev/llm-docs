> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfannotation/stampname

# stampName (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The name of the stamp, a text or graphics annotation that emulates a rubber stamp effect.

## Declaration

```swift
var stampName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is `Default`. Additional possible values for `stampName` are: `Approved`, `Asis`, `Confidential`, `Departmental`, `Experimental`, `Expired`, `Final`, `ForComment`, `ForPublicRelease`, `NotApproved`, `NotForPublicRelease`, `Sold`, and `TopSecret`. Custom values are also supported.

# stampName (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The name of the stamp, a text or graphics annotation that emulates a rubber stamp effect.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * stampName;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is `Default`. Additional possible values for `stampName` are: `Approved`, `Asis`, `Confidential`, `Departmental`, `Experimental`, `Expired`, `Final`, `ForComment`, `ForPublicRelease`, `NotApproved`, `NotForPublicRelease`, `Sold`, and `TopSecret`. Custom values are also supported.
