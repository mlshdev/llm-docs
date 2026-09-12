> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/tablestatus](https://developer.apple.com/documentation/appkit/nsprinter/tablestatus)

# NSPrinter.TableStatus (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe the state of a printer information table stored by a printer object.

## Declaration

```swift
enum TableStatus
```

<a id="overview"></a>

## Overview

These constants are used by [statusForTable:](statusfortable_.md).

## Topics

### Constants

- [NSPrinter.TableStatus.ok](tablestatus/ok.md): Printer table was found and is valid.
- [NSPrinter.TableStatus.notFound](tablestatus/notfound.md): Printer table was not found.
- [NSPrinter.TableStatus.error](tablestatus/error.md): Printer table is not valid.

### Initializers

- [init(rawValue:)](tablestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSPrinterTableStatus (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe the state of a printer information table stored by a printer object.

## Declaration

```objectivec
enum NSPrinterTableStatus : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by [statusForTable:](statusfortable_.md).

## Topics

### Constants

- [NSPrinterTableOK](tablestatus/ok.md): Printer table was found and is valid.
- [NSPrinterTableNotFound](tablestatus/notfound.md): Printer table was not found.
- [NSPrinterTableError](tablestatus/error.md): Printer table is not valid.

## See Also

### Deprecated

- [isKey:inTable:](iskey_intable_.md): Deprecated. Returns a Boolean value that indicates whether the specified key is in the specified table.
- [stringForKey:inTable:](stringforkey_intable_.md): Deprecated. Returns the first occurrence of a value associated with specified key.
- [stringListForKey:inTable:](stringlistforkey_intable_.md): Deprecated. Returns an array of strings, one for each occurrence, associated with specified key.
- [booleanForKey:inTable:](booleanforkey_intable_.md): Deprecated. Returns the Boolean value associated with the specified key.
- [floatForKey:inTable:](floatforkey_intable_.md): Deprecated. Returns the floating-point value associated with the specified key.
- [intForKey:inTable:](intforkey_intable_.md): Deprecated. Returns the integer value associated with the specified key.
- [rectForKey:inTable:](rectforkey_intable_.md): Deprecated. Returns the rectangle associated with the specified key.
- [sizeForKey:inTable:](sizeforkey_intable_.md): Deprecated. Returns the size data type associated with the specified key.
- [statusForTable:](statusfortable_.md): Deprecated. Returns the status of the specified table.
- [printerWithName:domain:includeUnavailable:](printerwithname_domain_includeunavailable_.md): Deprecated. Deprecated.
- [acceptsBinary](acceptsbinary.md): Deprecated. Deprecated.
- [domain](domain.md): Deprecated. Deprecated.
- [host](host.md): Deprecated. Deprecated.
- [imageRectForPaper:](imagerectforpaper_.md): Deprecated. Deprecated.
- [isColor](iscolor.md): Deprecated. Deprecated.
