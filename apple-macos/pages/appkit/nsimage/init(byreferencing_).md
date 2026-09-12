> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(byreferencing:)](https://developer.apple.com/documentation/appkit/nsimage/init(byreferencing:))

# init(byReferencing:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an image object using the specified URL.

## Declaration

```swift
convenience init(byReferencing url: URL)
```

## Parameters

- `url`: The URL identifying the image.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object.

<a id="Discussion"></a>

## Discussion

This method initializes the image object lazily. It does not attempt to retrieve the data from the specified URL or create any image representations from that data until an app attempts to draw the image or request information about it.

The `url` parameter should include a file extension that identifies the type of the image data. The mechanism that actually creates the image representation looks for an [NSImageRep](../nsimagerep.md) subclass that handles that data type from among those registered with `NSImage`.

Because this method doesn’t actually create image representations for the image data, your app should do error checking before attempting to use the image; one way to do so is by accessing the [isValid](isvalid.md) property to check whether the image can be drawn.

This method invokes [setDataRetained:](setdataretained_.md) with an argument of [true](https://developer.apple.com/documentation/swift/true), thus enabling it to hold onto its URL. When archiving an image created with this method, only the image’s URL is written to the archive.

## See Also

### Creating Images from Resource Files

- [init(byReferencingFile:)](init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Initializes and returns an image object with the contents of the specified file.
- [init(contentsOf:)](init%28contentsof_%29.md): Initializes and returns an image object with the contents of the specified URL.

# initByReferencingURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an image object using the specified URL.

## Declaration

```objectivec
- (instancetype) initByReferencingURL:(NSURL *) url;
```

## Parameters

- `url`: The URL identifying the image.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object.

<a id="Discussion"></a>

## Discussion

This method initializes the image object lazily. It does not attempt to retrieve the data from the specified URL or create any image representations from that data until an app attempts to draw the image or request information about it.

The `url` parameter should include a file extension that identifies the type of the image data. The mechanism that actually creates the image representation looks for an [NSImageRep](../nsimagerep.md) subclass that handles that data type from among those registered with `NSImage`.

Because this method doesn’t actually create image representations for the image data, your app should do error checking before attempting to use the image; one way to do so is by accessing the [valid](isvalid.md) property to check whether the image can be drawn.

This method invokes [setDataRetained:](setdataretained_.md) with an argument of [true](https://developer.apple.com/documentation/swift/true), thus enabling it to hold onto its URL. When archiving an image created with this method, only the image’s URL is written to the archive.

## See Also

### Creating Images from Resource Files

- [initByReferencingFile:](init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes and returns an image object with the contents of the specified file.
- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes and returns an image object with the contents of the specified URL.
