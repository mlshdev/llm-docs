> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintserviceextension](https://developer.apple.com/documentation/uikit/uiprintserviceextension)

# UIPrintServiceExtension (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

An extension that locates and sets up a printer without a configuration profile.

## Declaration

```swift
@MainActor class UIPrintServiceExtension
```

<a id="overview"></a>

## Overview

Support cloud printing by creating an extension instead of requiring users to install a managed configuration profile to set up an AirPrint printer. Create an extension by subclassing `UIPrintServiceExtension`. By creating your own extension, you can expose a cloud printer destination to a [UIPrinterPickerController](uiprinterpickercontroller.md). The extension matches printer destinations that fulfill the specified print-job attributes.

Create an instance of `UIPrinterDestination` to describe a printer to the system. The extension can then search for the printer, or set of printers, using [printerDestinations(for:)](uiprintserviceextension/printerdestinations%28for_%29.md). This method matches the requirements of a [UIPrintInfo](uiprintinfo.md) object and returns an array of [UIPrinterDestination](uiprinterdestination.md).

## Topics

### Locating a printer

- [printerDestinations(for:)](uiprintserviceextension/printerdestinations%28for_%29.md): Searches for a printer destination that matches the print-job attributes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Related Documentation

- [App extensions](app-extensions.md): Extend your app’s basic functionality to other parts of the system.

### Printer service discovery

- [UIPrinterDestination](uiprinterdestination.md): A description of a single printer.

# UIPrintServiceExtension (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

An extension that locates and sets up a printer without a configuration profile.

## Declaration

```objectivec
@interface UIPrintServiceExtension : NSObject
```

<a id="overview"></a>

## Overview

Support cloud printing by creating an extension instead of requiring users to install a managed configuration profile to set up an AirPrint printer. Create an extension by subclassing `UIPrintServiceExtension`. By creating your own extension, you can expose a cloud printer destination to a [UIPrinterPickerController](uiprinterpickercontroller.md). The extension matches printer destinations that fulfill the specified print-job attributes.

Create an instance of `UIPrinterDestination` to describe a printer to the system. The extension can then search for the printer, or set of printers, using [printerDestinationsForPrintInfo:](uiprintserviceextension/printerdestinations%28for_%29.md). This method matches the requirements of a [UIPrintInfo](uiprintinfo.md) object and returns an array of [UIPrinterDestination](uiprinterdestination.md).

## Topics

### Locating a printer

- [printerDestinationsForPrintInfo:](uiprintserviceextension/printerdestinations%28for_%29.md): Searches for a printer destination that matches the print-job attributes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Related Documentation

- [App extensions](app-extensions.md): Extend your app’s basic functionality to other parts of the system.

### Printer service discovery

- [UIPrinterDestination](uiprinterdestination.md): A description of a single printer.
