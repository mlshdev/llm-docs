> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterror/notavailable](https://developer.apple.com/documentation/uikit/uiprinterror/notavailable)

# notAvailable

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The device doesn’t support printing.

## Declaration

```swift
static var notAvailable: UIPrintError.Code { get }
```

## See Also

### Accessing error codes

- [UIPrintError.Code](code.md): Constants that specify the print error code.
- [noContent](nocontent.md): UIKit hasn’t assigned a print formatter, page renderer, or printing item to print.
- [unknownImageFormat](unknownimageformat.md): An image is in a format that UIKit doesn’t recognize for printing.
- [jobFailed](jobfailed.md): An internal error occurred with the print job.
