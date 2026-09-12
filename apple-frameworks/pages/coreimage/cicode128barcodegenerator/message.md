> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicode128barcodegenerator/message](https://developer.apple.com/documentation/coreimage/cicode128barcodegenerator/message)

# message (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The message to encode in the Code 128 barcode.

## Declaration

```swift
var message: Data { get set }
```

## See Also

### Instance Properties

- [barcodeHeight](barcodeheight.md): The height, in pixels, of the generated barcode.
- [quietSpace](quietspace.md): The number of empty white pixels that should surround the barcode.

# message (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The message to encode in the Code 128 barcode.

## Declaration

```objectivec
@property (nonatomic, retain) NSData * message;
```

## See Also

### Instance Properties

- [barcodeHeight](barcodeheight.md): The height, in pixels, of the generated barcode.
- [quietSpace](quietspace.md): The number of empty white pixels that should surround the barcode.
