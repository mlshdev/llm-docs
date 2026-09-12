> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterror/jobfailed](https://developer.apple.com/documentation/uikit/uiprinterror/jobfailed)

# jobFailed

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An internal error occurred with the print job.

## Declaration

```swift
static var jobFailed: UIPrintError.Code { get }
```

## See Also

### Accessing error codes

- [UIPrintError.Code](code.md): Constants that specify the print error code.
- [notAvailable](notavailable.md): The device doesn’t support printing.
- [noContent](nocontent.md): UIKit hasn’t assigned a print formatter, page renderer, or printing item to print.
- [unknownImageFormat](unknownimageformat.md): An image is in a format that UIKit doesn’t recognize for printing.
