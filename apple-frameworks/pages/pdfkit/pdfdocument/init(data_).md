> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/init(data:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/init(data:))

# init(data:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Initializes a `PDFDocument` object with the passed-in data.

## Declaration

```swift
init?(data: Data)
```

<a id="return-value"></a>

## Return Value

A `PDFDocument` instance initialized with the passed-in PDF data, or `NULL` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

The data must be PDF data encapsulated in an `NSData` object; otherwise this method returns `NULL`.

## See Also

### Initializing Documents

- [init(url:)](init%28url_%29-98jte.md): Initializes a `PDFDocument` object with the contents at the specified URL (if the URL is invalid, this method returns `NULL`).
- [init()](init%28%29.md): Initializes a `PDFDocument` object.

# initWithData: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Initializes a `PDFDocument` object with the passed-in data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

<a id="return-value"></a>

## Return Value

A `PDFDocument` instance initialized with the passed-in PDF data, or `NULL` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

The data must be PDF data encapsulated in an `NSData` object; otherwise this method returns `NULL`.

## See Also

### Initializing Documents

- [initWithURL:](init%28url_%29-98jte.md): Initializes a `PDFDocument` object with the contents at the specified URL (if the URL is invalid, this method returns `NULL`).
- [init](init%28%29.md): Initializes a `PDFDocument` object.
