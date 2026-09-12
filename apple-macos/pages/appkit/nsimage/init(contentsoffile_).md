> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(contentsoffile:)](https://developer.apple.com/documentation/appkit/nsimage/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an image object with the contents of the specified file.

## Declaration

```swift
convenience init?(contentsOfFile fileName: String)
```

## Parameters

- `fileName`: A full or relative path name specifying the file with the desired image data. Relative paths must be relative to the current working directory.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image representation from the contents of the specified file.

<a id="Discussion"></a>

## Discussion

Unlike [init(byReferencingFile:)](init%28byreferencingfile_%29.md), which initializes an `NSImage` object lazily, this method immediately opens the specified file and creates one or more image representations from its data.

The `filename` parameter should include the file extension that identifies the type of the image data. This method looks for an `NSImageRep` subclass that handles that data type from among those registered with `NSImage`.

## See Also

### Creating Images from Resource Files

- [init(byReferencingFile:)](init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [init(byReferencing:)](init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.
- [init(contentsOf:)](init%28contentsof_%29.md): Initializes and returns an image object with the contents of the specified URL.

# initWithContentsOfFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an image object with the contents of the specified file.

## Declaration

```objectivec
- (instancetype) initWithContentsOfFile:(NSString *) fileName;
```

## Parameters

- `fileName`: A full or relative path name specifying the file with the desired image data. Relative paths must be relative to the current working directory.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image representation from the contents of the specified file.

<a id="Discussion"></a>

## Discussion

Unlike [initByReferencingFile:](init%28byreferencingfile_%29.md), which initializes an `NSImage` object lazily, this method immediately opens the specified file and creates one or more image representations from its data.

The `filename` parameter should include the file extension that identifies the type of the image data. This method looks for an `NSImageRep` subclass that handles that data type from among those registered with `NSImage`.

## See Also

### Creating Images from Resource Files

- [initByReferencingFile:](init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [initByReferencingURL:](init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.
- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes and returns an image object with the contents of the specified URL.
