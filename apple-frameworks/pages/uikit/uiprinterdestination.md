> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterdestination](https://developer.apple.com/documentation/uikit/uiprinterdestination)

# UIPrinterDestination (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A description of a single printer.

## Declaration

```swift
@MainActor class UIPrinterDestination
```

<a id="overview"></a>

## Overview

You can use `UIPrinterDestination` to describe a printer so that it populates in a [UIPrinterPickerController](uiprinterpickercontroller.md) when the printer’s capabilities match the print-job attributes. `UIPrinterDestination` requires a URL to locate the printer. You can include an optional display name that populates in the user interface and a TXT record to detail the printer’s additional features.

## Topics

### Creating a printer destination

- [init(url:)](uiprinterdestination/init%28url_%29-7ck5j.md): Creates a printer destination with the specified address.

### Describing the printer

- [displayName](uiprinterdestination/displayname.md): A human-readable string that displays the name of a printer.
- [txtRecord](uiprinterdestination/txtrecord.md): A DNS TXT record to identify the printer.
- [url](uiprinterdestination/url.md): The address of the printer.

### Initializers

- [init(URL:)](uiprinterdestination/init%28url_%29-c1e8.md)
- [init(coder:)](uiprinterdestination/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Printer service discovery

- [UIPrintServiceExtension](uiprintserviceextension.md): An extension that locates and sets up a printer without a configuration profile.

# UIPrinterDestination (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A description of a single printer.

## Declaration

```objectivec
@interface UIPrinterDestination : NSObject
```

<a id="overview"></a>

## Overview

You can use `UIPrinterDestination` to describe a printer so that it populates in a [UIPrinterPickerController](uiprinterpickercontroller.md) when the printer’s capabilities match the print-job attributes. `UIPrinterDestination` requires a URL to locate the printer. You can include an optional display name that populates in the user interface and a TXT record to detail the printer’s additional features.

## Topics

### Creating a printer destination

- [initWithURL:](uiprinterdestination/init%28url_%29-7ck5j.md): Creates a printer destination with the specified address.

### Describing the printer

- [displayName](uiprinterdestination/displayname.md): A human-readable string that displays the name of a printer.
- [txtRecord](uiprinterdestination/txtrecord.md): A DNS TXT record to identify the printer.
- [URL](uiprinterdestination/url.md): The address of the printer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Printer service discovery

- [UIPrintServiceExtension](uiprintserviceextension.md): An extension that locates and sets up a printer without a configuration profile.
