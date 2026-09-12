> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrendererformat/documentinfo](https://developer.apple.com/documentation/uikit/uigraphicspdfrendererformat/documentinfo)

# documentInfo (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A dictionary that specifies additional information to be associated with the PDFs created by the PDF renderer.

## Declaration

```swift
var documentInfo: [String : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

You can use these keys to specify additional metadata and security information for the PDF, such as the author or the password for accessing it.

The keys used in this dictionary are described in  [Auxiliary Dictionary Keys](../../coregraphics/auxiliary-dictionary-keys.md).

# documentInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A dictionary that specifies additional information to be associated with the PDFs created by the PDF renderer.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,id> * documentInfo;
```

<a id="Discussion"></a>

## Discussion

You can use these keys to specify additional metadata and security information for the PDF, such as the author or the password for accessing it.

The keys used in this dictionary are described in  [Auxiliary Dictionary Keys](../../coregraphics/auxiliary-dictionary-keys.md).
