> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdisplaymode](https://developer.apple.com/documentation/pdfkit/pdfdisplaymode)

# PDFDisplayMode (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A wrapper for the chosen display mode constant.

## Declaration

```swift
enum PDFDisplayMode
```

## Topics

### Constants

- [PDFDisplayMode.singlePage](pdfdisplaymode/singlepage.md): A display mode where the document displays one page at a time horizontally and vertically.
- [PDFDisplayMode.singlePageContinuous](pdfdisplaymode/singlepagecontinuous.md): A display mode where the document displays in continuous mode vertically, with single-page width horizontally.
- [PDFDisplayMode.twoUp](pdfdisplaymode/twoup.md): A display mode where the document displays two pages side-by-side.
- [PDFDisplayMode.twoUpContinuous](pdfdisplaymode/twoupcontinuous.md): A display mode where the document displays in continuous mode vertically and displays two pages side-by-side horizontally.

### Initializers

- [init(rawValue:)](pdfdisplaymode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Display Modes and Characteristics

- [displayMode](pdfview/displaymode.md): The current display mode.
- [Additional Display Configurations](additional-display-configurations.md): Operations for setting up page breaks, a display box, and display direction.
- [Book Display](book-display.md): Operations to setup a book display for a PDF view.
- [Graphics Properties](graphics-properties.md): Operations to define the background color, antialiasing, and greeking for a PDF view.

# PDFDisplayMode (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A wrapper for the chosen display mode constant.

## Declaration

```objectivec
enum PDFDisplayMode : NSInteger;
```

## Topics

### Constants

- [kPDFDisplaySinglePage](pdfdisplaymode/singlepage.md): A display mode where the document displays one page at a time horizontally and vertically.
- [kPDFDisplaySinglePageContinuous](pdfdisplaymode/singlepagecontinuous.md): A display mode where the document displays in continuous mode vertically, with single-page width horizontally.
- [kPDFDisplayTwoUp](pdfdisplaymode/twoup.md): A display mode where the document displays two pages side-by-side.
- [kPDFDisplayTwoUpContinuous](pdfdisplaymode/twoupcontinuous.md): A display mode where the document displays in continuous mode vertically and displays two pages side-by-side horizontally.

## See Also

### Working with Display Modes and Characteristics

- [displayMode](pdfview/displaymode.md): The current display mode.
- [Additional Display Configurations](additional-display-configurations.md): Operations for setting up page breaks, a display box, and display direction.
- [Book Display](book-display.md): Operations to setup a book display for a PDF view.
- [Graphics Properties](graphics-properties.md): Operations to define the background color, antialiasing, and greeking for a PDF view.
