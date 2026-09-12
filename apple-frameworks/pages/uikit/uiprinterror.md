> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterror](https://developer.apple.com/documentation/uikit/uiprinterror)

# UIPrintError

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A structure that contains information about a printing error.

## Declaration

```swift
struct UIPrintError
```

## Topics

### Accessing error codes

- [UIPrintError.Code](uiprinterror/code.md): Constants that specify the print error code.
- [notAvailable](uiprinterror/notavailable.md): The device doesn’t support printing.
- [noContent](uiprinterror/nocontent.md): UIKit hasn’t assigned a print formatter, page renderer, or printing item to print.
- [unknownImageFormat](uiprinterror/unknownimageformat.md): An image is in a format that UIKit doesn’t recognize for printing.
- [jobFailed](uiprinterror/jobfailed.md): An internal error occurred with the print job.

### Getting error information

- [errorDomain](uiprinterror/errordomain.md): The printing error domain.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling printing errors

- [UIPrintErrorDomain](uiprinterrordomain.md): The string constant that defines the UIKit printing error domain.
- [UIPrintError.Code](uiprinterror/code.md): Constants that specify the print error code.
