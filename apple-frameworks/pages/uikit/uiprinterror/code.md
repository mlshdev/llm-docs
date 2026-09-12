> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterror/code](https://developer.apple.com/documentation/uikit/uiprinterror/code)

# UIPrintError.Code (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that specify the print error code.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [UIPrintError.Code.notAvailable](code/notavailable.md): The device doesn’t support printing.
- [UIPrintError.Code.noContent](code/nocontent.md): UIKit hasn’t assigned a print formatter, page renderer, or printing item to print.
- [UIPrintError.Code.unknownImageFormat](code/unknownimageformat.md): An image is in a format that UIKit doesn’t recognize for printing.
- [UIPrintError.Code.jobFailed](code/jobfailed.md): An internal error occurred with the print job.

### Global variables

- [Print error global variables](../print-error-global-variables.md): Global variables associated with print errors.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling printing errors

- [UIPrintErrorDomain](../uiprinterrordomain.md): The string constant that defines the UIKit printing error domain.
- [UIPrintError](../uiprinterror.md): A structure that contains information about a printing error.

# UIPrintErrorCode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that specify the print error code.

## Declaration

```objectivec
enum UIPrintErrorCode : NSInteger;
```

## Topics

### Error codes

- [UIPrintingNotAvailableError](code/notavailable.md): The device doesn’t support printing.
- [UIPrintNoContentError](code/nocontent.md): UIKit hasn’t assigned a print formatter, page renderer, or printing item to print.
- [UIPrintUnknownImageFormatError](code/unknownimageformat.md): An image is in a format that UIKit doesn’t recognize for printing.
- [UIPrintJobFailedError](code/jobfailed.md): An internal error occurred with the print job.

## See Also

### Handling printing errors

- [UIPrintErrorDomain](../uiprinterrordomain.md): The string constant that defines the UIKit printing error domain.
