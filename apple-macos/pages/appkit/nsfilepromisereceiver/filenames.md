> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromisereceiver/filenames](https://developer.apple.com/documentation/appkit/nsfilepromisereceiver/filenames)

# fileNames (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

An array containing names of the promised files being written to the destination location.

## Declaration

```swift
var fileNames: [String] { get }
```

<a id="Discussion"></a>

## Discussion

This property returns an empty array until the file promise is called using [receivePromisedFiles(atDestination:options:operationQueue:reader:)](receivepromisedfiles%28atdestination_options_operationqueue_reader_%29.md).

## See Also

### Instance Properties

- [fileTypes](filetypes.md): An array containing types of the promised files being written to the destination location.

# fileNames (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

An array containing names of the promised files being written to the destination location.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * fileNames;
```

<a id="Discussion"></a>

## Discussion

This property returns an empty array until the file promise is called using [receivePromisedFilesAtDestination:options:operationQueue:reader:](receivepromisedfiles%28atdestination_options_operationqueue_reader_%29.md).

## See Also

### Instance Properties

- [fileTypes](filetypes.md): An array containing types of the promised files being written to the destination location.
