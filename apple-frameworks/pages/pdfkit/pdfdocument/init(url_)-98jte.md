> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/init(url:)-98jte](https://developer.apple.com/documentation/pdfkit/pdfdocument/init(url:)-98jte)

# init(url:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Initializes a `PDFDocument` object with the contents at the specified URL (if the URL is invalid, this method returns `NULL`).

## Declaration

```swift
init?(url: URL)
```

<a id="return-value"></a>

## Return Value

A `PDFDocument` instance initialized with the data at the passed-in URL or `NULL` if the object could not be initialized or if the URL is invalid.

## See Also

### Initializing Documents

- [init(data:)](init%28data_%29.md): Initializes a `PDFDocument` object with the passed-in data.
- [init()](init%28%29.md): Initializes a `PDFDocument` object.

# initWithURL: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Initializes a `PDFDocument` object with the contents at the specified URL (if the URL is invalid, this method returns `NULL`).

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

<a id="return-value"></a>

## Return Value

A `PDFDocument` instance initialized with the data at the passed-in URL or `NULL` if the object could not be initialized or if the URL is invalid.

## See Also

### Initializing Documents

- [initWithData:](init%28data_%29.md): Initializes a `PDFDocument` object with the passed-in data.
- [init](init%28%29.md): Initializes a `PDFDocument` object.
