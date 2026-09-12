> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromisereceiver/filetypes](https://developer.apple.com/documentation/appkit/nsfilepromisereceiver/filetypes)

# fileTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

An array containing types of the promised files being written to the destination location.

## Declaration

```swift
var fileTypes: [String] { get }
```

<a id="Discussion"></a>

## Discussion

[NSFilePromiseProvider](../nsfilepromiseprovider.md) promises one file type per item. The `count` of `fileTypes` should tell you the number of promised files in this item, but that’s not always guaranteed. Some legacy file promisers  list each unique `fileType` only once.

## See Also

### Instance Properties

- [fileNames](filenames.md): An array containing names of the promised files being written to the destination location.

# fileTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

An array containing types of the promised files being written to the destination location.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * fileTypes;
```

<a id="Discussion"></a>

## Discussion

[NSFilePromiseProvider](../nsfilepromiseprovider.md) promises one file type per item. The `count` of `fileTypes` should tell you the number of promised files in this item, but that’s not always guaranteed. Some legacy file promisers  list each unique `fileType` only once.

## See Also

### Instance Properties

- [fileNames](filenames.md): An array containing names of the promised files being written to the destination location.
