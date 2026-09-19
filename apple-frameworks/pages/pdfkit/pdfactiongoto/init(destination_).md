> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfactiongoto/init(destination:)

# init(destination:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Initializes the go-to action.

## Declaration

```swift
init(destination: PDFDestination)
```

## Parameters

- `destination`: The destination with which to initialize the go-to action.

<a id="return-value"></a>

## Return Value

An initialized `PDFActionGoTo` instance, or `NULL` if the object could not be initialized.

# initWithDestination: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Initializes the go-to action.

## Declaration

```objectivec
- (instancetype) initWithDestination:(PDFDestination *) destination;
```

## Parameters

- `destination`: The destination with which to initialize the go-to action.

<a id="return-value"></a>

## Return Value

An initialized `PDFActionGoTo` instance, or `NULL` if the object could not be initialized.
