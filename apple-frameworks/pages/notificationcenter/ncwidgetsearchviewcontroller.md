> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetsearchviewcontroller](https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewcontroller)

# NCWidgetSearchViewController (Swift)

**Framework:** Notification Center  
**Kind:** Class  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An object that provides a default search view within a macOS Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```swift
class NCWidgetSearchViewController
```

<a id="overview"></a>

## Overview

The `NCWidgetSearchViewController` class provides a default search view within a Today widget. A search view controller works together with its delegate to perform searches on the user’s input and display results from which a user can choose. To learn about the search view controller delegate methods, see [NCWidgetSearchViewDelegate](ncwidgetsearchviewdelegate.md).

When a widget is in editing mode, it can enable search for new content by instantiating an `NCWidgetSearchViewController` object and presenting it using [present(inWidget:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/present%28inwidget:%29). The search view controller displays the default search field and a list of results. It uses its [delegate](ncwidgetsearchviewcontroller/delegate.md) to perform the search itself.

## Topics

### Enabling Search

- [delegate](ncwidgetsearchviewcontroller/delegate.md): Deprecated. The search view controller’s delegate or `nil` if the receiver doesn’t have a delegate.
- [NCWidgetSearchViewDelegate](ncwidgetsearchviewdelegate.md): Deprecated. The interface for enabling user searches in the search view controller of a macOS Today widget.

### Displaying the Search Interface

- [searchDescription](ncwidgetsearchviewcontroller/searchdescription.md): Deprecated. A localized description of the nature of the search.
- [searchResultsPlaceholderString](ncwidgetsearchviewcontroller/searchresultsplaceholderstring.md): Deprecated. A localized phrase displayed in the results list when no search results are available.

### Displaying Search Results

- [searchResultKeyPath](ncwidgetsearchviewcontroller/searchresultkeypath.md): Deprecated. A key path for the string property to display for each object in the search results array.
- [searchResults](ncwidgetsearchviewcontroller/searchresults.md): Deprecated. An array of search results.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Search View

- [NCWidgetSearchViewDelegate](ncwidgetsearchviewdelegate.md): Deprecated. The interface for enabling user searches in the search view controller of a macOS Today widget.

# NCWidgetSearchViewController (Objective-C)

**Framework:** Notification Center  
**Kind:** Class  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An object that provides a default search view within a macOS Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```objectivec
@interface NCWidgetSearchViewController : NSViewController
```

<a id="overview"></a>

## Overview

The `NCWidgetSearchViewController` class provides a default search view within a Today widget. A search view controller works together with its delegate to perform searches on the user’s input and display results from which a user can choose. To learn about the search view controller delegate methods, see [NCWidgetSearchViewDelegate](ncwidgetsearchviewdelegate.md).

When a widget is in editing mode, it can enable search for new content by instantiating an `NCWidgetSearchViewController` object and presenting it using [presentViewControllerInWidget:](https://developer.apple.com/documentation/appkit/nsviewcontroller/present%28inwidget:%29). The search view controller displays the default search field and a list of results. It uses its [delegate](ncwidgetsearchviewcontroller/delegate.md) to perform the search itself.

## Topics

### Enabling Search

- [delegate](ncwidgetsearchviewcontroller/delegate.md): Deprecated. The search view controller’s delegate or `nil` if the receiver doesn’t have a delegate.
- [NCWidgetSearchViewDelegate](ncwidgetsearchviewdelegate.md): Deprecated. The interface for enabling user searches in the search view controller of a macOS Today widget.

### Displaying the Search Interface

- [searchDescription](ncwidgetsearchviewcontroller/searchdescription.md): Deprecated. A localized description of the nature of the search.
- [searchResultsPlaceholderString](ncwidgetsearchviewcontroller/searchresultsplaceholderstring.md): Deprecated. A localized phrase displayed in the results list when no search results are available.

### Displaying Search Results

- [searchResultKeyPath](ncwidgetsearchviewcontroller/searchresultkeypath.md): Deprecated. A key path for the string property to display for each object in the search results array.
- [searchResults](ncwidgetsearchviewcontroller/searchresults.md): Deprecated. An array of search results.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)

## See Also

### Search View

- [NCWidgetSearchViewDelegate](ncwidgetsearchviewdelegate.md): Deprecated. The interface for enabling user searches in the search view controller of a macOS Today widget.
