> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspathcontrol/url

# url (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The path value displayed by the receiver.

## Declaration

```swift
var url: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

When setting, an array of `NSPathComponentCell` objects is automatically set based on the path in `url`. If `url` is a file URL (returns [true](https://developer.apple.com/documentation/swift/true) from [isFileURL](https://developer.apple.com/documentation/foundation/nsurl/isfileurl)), the images are automatically filled with file icons, if the path exists. The URL value itself is stored in the `objectValue` property of the cell.

# URL (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The path value displayed by the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

When setting, an array of `NSPathComponentCell` objects is automatically set based on the path in `url`. If `url` is a file URL (returns [true](https://developer.apple.com/documentation/swift/true) from [fileURL](https://developer.apple.com/documentation/foundation/nsurl/isfileurl)), the images are automatically filled with file icons, if the path exists. The URL value itself is stored in the `objectValue` property of the cell.
