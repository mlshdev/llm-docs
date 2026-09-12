> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowsertransitioncontroller](https://developer.apple.com/documentation/uikit/uidocumentbrowsertransitioncontroller)

# UIDocumentBrowserTransitionController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that implements the standard loading and transition animations for a document browser.

## Declaration

```swift
@MainActor class UIDocumentBrowserTransitionController
```

<a id="overview"></a>

## Overview

Each transition controller is associated with a document in the document browser. The transition controller can provide two separate animation sequences for this document:

- If you set the [loadingProgress](uidocumentbrowsertransitioncontroller/loadingprogress.md) property, the document browser shows the loading progress in the document’s thumbnail.
- If you set the [targetView](uidocumentbrowsertransitioncontroller/targetview.md) property, the transition controller acts as a [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) object, providing a custom transition between the document’s thumbnail and the target view. This transitioning object can be used both when presenting and when dismissing the document.

You don’t instantiate instances of [UIDocumentBrowserTransitionController](uidocumentbrowsertransitioncontroller.md) yourself. Instead, call the document browser’s [transitionController(forDocumentURL:)](uidocumentbrowserviewcontroller/transitioncontroller%28fordocumenturl_%29.md) method to get a transition controller for the specified document.

> **Note**

>  In Mac apps built with Mac Catalyst, the transition controller doesn’t trigger animations because the macOS design doesn’t use animations for opening or closing documents.

## Topics

### Animating transitions

- [loadingProgress](uidocumentbrowsertransitioncontroller/loadingprogress.md): A progress object that tracks a document as it loads.
- [targetView](uidocumentbrowsertransitioncontroller/targetview.md): The target view for transition animations when presenting or dismissing the transition controller’s document.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md)

## See Also

### Related Documentation

- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.

### Animating transitions

- [transitionController(forDocumentAt:)](uidocumentbrowserviewcontroller/transitioncontroller%28fordocumentat_%29.md): Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

# UIDocumentBrowserTransitionController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that implements the standard loading and transition animations for a document browser.

## Declaration

```objectivec
@interface UIDocumentBrowserTransitionController : NSObject
```

<a id="overview"></a>

## Overview

Each transition controller is associated with a document in the document browser. The transition controller can provide two separate animation sequences for this document:

- If you set the [loadingProgress](uidocumentbrowsertransitioncontroller/loadingprogress.md) property, the document browser shows the loading progress in the document’s thumbnail.
- If you set the [targetView](uidocumentbrowsertransitioncontroller/targetview.md) property, the transition controller acts as a [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) object, providing a custom transition between the document’s thumbnail and the target view. This transitioning object can be used both when presenting and when dismissing the document.

You don’t instantiate instances of [UIDocumentBrowserTransitionController](uidocumentbrowsertransitioncontroller.md) yourself. Instead, call the document browser’s [transitionControllerForDocumentURL:](uidocumentbrowserviewcontroller/transitioncontroller%28fordocumenturl_%29.md) method to get a transition controller for the specified document.

> **Note**

>  In Mac apps built with Mac Catalyst, the transition controller doesn’t trigger animations because the macOS design doesn’t use animations for opening or closing documents.

## Topics

### Animating transitions

- [loadingProgress](uidocumentbrowsertransitioncontroller/loadingprogress.md): A progress object that tracks a document as it loads.
- [targetView](uidocumentbrowsertransitioncontroller/targetview.md): The target view for transition animations when presenting or dismissing the transition controller’s document.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md)

## See Also

### Related Documentation

- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.

### Animating transitions

- [transitionControllerForDocumentAtURL:](uidocumentbrowserviewcontroller/transitioncontroller%28fordocumentat_%29.md): Creates a transition controller that provides the standard system-loading and segue animations for the document browser.
