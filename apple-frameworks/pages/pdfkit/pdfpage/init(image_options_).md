> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/init(image:options:)](https://developer.apple.com/documentation/pdfkit/pdfpage/init(image:options:))

# init(image:options:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
init?(image: UIImage, options: [PDFPage.ImageInitializationOption : Any] = [:])
```

```swift
init?(image: NSImage, options: [PDFPage.ImageInitializationOption : Any] = [:])
```

## See Also

### Initializers

- [init()](init%28%29.md)

# initWithImage:options: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image options:(NSDictionary<NSString *,id> *) options;
```

```objectivec
- (instancetype) initWithImage:(NSImage *) image options:(NSDictionary<NSString *,id> *) options;
```

## See Also

### Initializers

- [init](init%28%29.md)
