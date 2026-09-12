> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/progress](https://developer.apple.com/documentation/uikit/uidocument/progress)

# progress (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The upload or download progress of a document.

## Declaration

```swift
var progress: Progress? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is valid while [progressAvailable](state/progressavailable.md) is set.

## See Also

### Accessing document attributes

- [fileURL](fileurl.md): The file URL you use to initialize the document.
- [localizedName](localizedname.md): The localized name of the document.
- [fileType](filetype.md): The file type of the document.
- [fileModificationDate](filemodificationdate.md): The date and time your app last modified the document file.
- [documentState](documentstate.md): The current state of the document.

# progress (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The upload or download progress of a document.

## Declaration

```objectivec
@property (readonly, nullable) NSProgress * progress;
```

<a id="Discussion"></a>

## Discussion

The value of this property is valid while [UIDocumentStateProgressAvailable](state/progressavailable.md) is set.

## See Also

### Accessing document attributes

- [fileURL](fileurl.md): The file URL you use to initialize the document.
- [localizedName](localizedname.md): The localized name of the document.
- [fileType](filetype.md): The file type of the document.
- [fileModificationDate](filemodificationdate.md): The date and time your app last modified the document file.
- [documentState](documentstate.md): The current state of the document.
