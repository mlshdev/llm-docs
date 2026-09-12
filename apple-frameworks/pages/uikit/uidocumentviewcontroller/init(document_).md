> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/init(document:)](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/init(document:))

# init(document:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Creates a document view controller with a document.

## Declaration

```swift
init(document: UIDocument?)
```

## Parameters

- `document`: The document that the view controller presents.

<a id="return-value"></a>

## Return Value

A newly initialized [UIDocumentViewController](../uidocumentviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

The document view controller opens and displays the document that you specify. If you don’t provide custom values, the new view controller gets its title and other information from the document itself.

# initWithDocument: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Creates a document view controller with a document.

## Declaration

```objectivec
- (instancetype) initWithDocument:(UIDocument *) document;
```

## Parameters

- `document`: The document that the view controller presents.

<a id="return-value"></a>

## Return Value

A newly initialized [UIDocumentViewController](../uidocumentviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

The document view controller opens and displays the document that you specify. If you don’t provide custom values, the new view controller gets its title and other information from the document itself.
