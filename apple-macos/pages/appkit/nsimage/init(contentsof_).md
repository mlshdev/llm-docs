> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(contentsof:)](https://developer.apple.com/documentation/appkit/nsimage/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an image object with the contents of the specified URL.

## Declaration

```swift
convenience init?(contentsOf url: URL)
```

## Parameters

- `url`: The URL identifying the image.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image representation from the contents of the specified URL.

## See Also

### Creating Images from Resource Files

- [init(byReferencingFile:)](init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [init(byReferencing:)](init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Initializes and returns an image object with the contents of the specified file.

# initWithContentsOfURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an image object with the contents of the specified URL.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: The URL identifying the image.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image representation from the contents of the specified URL.

## See Also

### Creating Images from Resource Files

- [initByReferencingFile:](init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [initByReferencingURL:](init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes and returns an image object with the contents of the specified file.
