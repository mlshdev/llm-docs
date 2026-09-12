> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowseraction/availability-swift.struct/navigationbar](https://developer.apple.com/documentation/uikit/uidocumentbrowseraction/availability-swift.struct/navigationbar)

# navigationBar (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An action that appears in the navigation bar when the user puts the document browser in Select mode.

## Declaration

```swift
static var navigationBar: UIDocumentBrowserAction.Availability { get }
```

<a id="Discussion"></a>

## Discussion

The system enables this action as soon as the user makes a valid selection, as determined by the [supportedContentTypes](../supportedcontenttypes.md) and [supportsMultipleItems](../supportsmultipleitems.md) properties.

> **Note**

>  In Mac apps built with Mac Catalyst, the system shows [navigationBar](navigationbar.md) actions as [menu](menu.md) actions.

## See Also

### Constants

- [menu](menu.md): An action that appears in the Edit Menu when the user long presses a supported document.

# UIDocumentBrowserActionAvailabilityNavigationBar (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An action that appears in the navigation bar when the user puts the document browser in Select mode.

## Declaration

```objectivec
UIDocumentBrowserActionAvailabilityNavigationBar
```

<a id="Discussion"></a>

## Discussion

The system enables this action as soon as the user makes a valid selection, as determined by the [supportedContentTypes](../supportedcontenttypes.md) and [supportsMultipleItems](../supportsmultipleitems.md) properties.

> **Note**

>  In Mac apps built with Mac Catalyst, the system shows [UIDocumentBrowserActionAvailabilityNavigationBar](navigationbar.md) actions as [UIDocumentBrowserActionAvailabilityMenu](menu.md) actions.

## See Also

### Constants

- [UIDocumentBrowserActionAvailabilityMenu](menu.md): An action that appears in the Edit Menu when the user long presses a supported document.
