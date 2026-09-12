> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboardnamefind](https://developer.apple.com/documentation/uikit/uipasteboardnamefind)

# UIPasteboardNameFind (Swift)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ (deprecated in 10.0) · iPadOS 3.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A name that identifies the Find pasteboard.

> The Find pasteboard is no longer available.

## Declaration

```swift
let UIPasteboardNameFind: String
```

<a id="discussion"></a>

## Discussion

The Find pasteboard is unavailable starting in iOS 10.

The name identifying the Find pasteboard, which, prior to iOS 10, was used in search operations. In such operations, the most recent search string in the search bar was put in the Find pasteboard.

## See Also

### Constants

- [general](uipasteboard/name-swift.struct/general.md): The name identifying the general pasteboard, which you use for general copy-cut-paste operations.

# UIPasteboardNameFind (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ (deprecated in 10.0) · iPadOS 3.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A name that identifies the Find pasteboard.

> The Find pasteboard is no longer available.

## Declaration

```objectivec
extern NSString * const UIPasteboardNameFind;
```

<a id="discussion"></a>

## Discussion

The Find pasteboard is unavailable starting in iOS 10.

The name identifying the Find pasteboard, which, prior to iOS 10, was used in search operations. In such operations, the most recent search string in the search bar was put in the Find pasteboard.

## See Also

### Constants

- [UIPasteboardNameGeneral](uipasteboard/name-swift.struct/general.md): The name identifying the general pasteboard, which you use for general copy-cut-paste operations.
