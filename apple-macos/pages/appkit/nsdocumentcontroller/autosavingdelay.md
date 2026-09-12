> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/autosavingdelay](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/autosavingdelay)

# autosavingDelay (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The time interval (in seconds) for periodic autosaving.

## Declaration

```swift
var autosavingDelay: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

A value of 0 indicates that periodic autosaving should not be done at all. The `NSDocumentController` object uses this number as the amount of time to wait between detecting that a document has unautosaved changes and sending the document an [autosave(withDelegate:didAutosave:contextInfo:)](../nsdocument/autosave%28withdelegate_didautosave_contextinfo_%29.md) message. The default value is `0`.

# autosavingDelay (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The time interval (in seconds) for periodic autosaving.

## Declaration

```objectivec
@property NSTimeInterval autosavingDelay;
```

<a id="Discussion"></a>

## Discussion

A value of 0 indicates that periodic autosaving should not be done at all. The `NSDocumentController` object uses this number as the amount of time to wait between detecting that a document has unautosaved changes and sending the document an [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](../nsdocument/autosave%28withdelegate_didautosave_contextinfo_%29.md) message. The default value is `0`.
