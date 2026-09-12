> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteraction](https://developer.apple.com/documentation/uikit/uifindinteraction)

# UIFindInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An interaction that provides text finding and replacing operations using a system find panel.

## Declaration

```swift
@MainActor class UIFindInteraction
```

## Mentioned In

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

Use a find interaction to add text-finding capabilities to your view.

When invoking the interaction, the system displays a find panel for entering a string to search, with buttons for navigating between results. When supporting replacement, this also includes a field for the text replacing matches. The find panel presents as a part of the onscreen keyboard when visible, or inline as part of the receiver’s view hierarchy.

Input from a hardware keyboard triggers a find interaction using standard system shortcuts such as Command+F for find, Command+G for find next, and Command+Shift+G for find previous. Adding the interaction also enables these commands in the menu bar on macOS when your view becomes first responder. You can also trigger the interaction by calling the [presentFindNavigator(showingReplace:)](uifindinteraction/presentfindnavigator%28showingreplace_%29.md) method on the interaction object, providing access to find and replace operations programatically.

Some classes, such as [UITextView](uitextview.md), [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview), and [PDFView](../pdfkit/pdfview.md), support built-in find interactions. To enable the interaction on these views, set [isFindInteractionEnabled](uitextview/isfindinteractionenabled.md) to `true`.

```swift
textView.isFindInteractionEnabled = true
```

To add find and replace operations to other views:

1. Create the find interaction object, passing a delegate into the default initializer.
2. Add the interaction by calling the [addInteraction(\_:)](uiview/addinteraction%28__%29.md) method on the view.
3. Provide a [UIFindSession](uifindsession.md) object to manage the search performed on the content displayed in the view. You return this object through the [findInteraction(\_:sessionFor:)](uifindinteractiondelegate/findinteraction%28__sessionfor_%29.md) method on the delegate.

The following example creates a find interaction for a view that presents searchable content for a document.

```swift
let document = Document(string: "")
lazy var interactionView = InteractionView(document: document)

lazy var findInteraction = UIFindInteraction(sessionDelegate: self)

override func viewDidLoad() {
    super.viewDidLoad()

    // Add the find interaction.
    interactionView.addInteraction(findInteraction)
}

func findInteraction(_ interaction: UIFindInteraction, sessionFor view: UIView) -> UIFindSession? {
    // Return a searchable object.
    return UITextSearchingFindSession(searchableObject: document)
}
```

Implement the [UITextSearching](uitextsearching-53wjq.md) protocol on the class that encapsulates the searchable content for your view to use an instance of [UITextSearchingFindSession](uitextsearchingfindsession.md) as the session object. Alternatively, you can subclass [UIFindSession](uifindsession.md) when you want to manage the details of the session using a custom class.

> **Related Sessions from WWDC22**

>  Session 10071: [Adopt desktop-class editing interactions](https://developer.apple.com/wwdc22/10071)

## Topics

### Creating a find interaction

- [init(sessionDelegate:)](uifindinteraction/init%28sessiondelegate_%29.md): Initializes a find interaction object with the delegate object you specify.

### Managing find interactions

- [delegate](uifindinteraction/delegate.md): An object that updates your app’s presentation and provides the session object for managing the interaction’s search.
- [presentFindNavigator(showingReplace:)](uifindinteraction/presentfindnavigator%28showingreplace_%29.md): Begins a search, displaying the find panel.
- [dismissFindNavigator()](uifindinteraction/dismissfindnavigator%28%29.md): Dismisses the find panel, if present.
- [findNext()](uifindinteraction/findnext%28%29.md): Highlights the next found result in the content, relative to the currently highlighted result.
- [findPrevious()](uifindinteraction/findprevious%28%29.md): Highlights the previously found result in the document, relative to the currently highlighted result.

### Configuring the find panel

- [isFindNavigatorVisible](uifindinteraction/isfindnavigatorvisible.md): A Boolean value that indicates when the find panel displays onscreen.
- [searchText](uifindinteraction/searchtext.md): The search query with which to prepopulate the find panel’s search text field.
- [replacementText](uifindinteraction/replacementtext.md): The replacement string with which to prepopulate the find panel’s replace text field.
- [optionsMenuProvider](uifindinteraction/optionsmenuprovider.md): A closure that populates the search options for a find interaction.

### Managing the search

- [activeFindSession](uifindinteraction/activefindsession.md): The object that manages the state, presentation, and behavior of an active search.
- [updateResultCount()](uifindinteraction/updateresultcount%28%29.md): Updates the results the interface displays for the active search.

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
- [UIInteraction](uiinteraction.md)

## See Also

### Related Documentation

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md): Optimize your iPad app’s user experience by adopting desktop-class enhancements for multitasking with Stage Manager, document interactions, text editing, search, and more.

### Find and replace

- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-3wkjv.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchOptions.WordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSession.SearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# UIFindInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An interaction that provides text finding and replacing operations using a system find panel.

## Declaration

```objectivec
@interface UIFindInteraction : NSObject
```

## Mentioned In

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

Use a find interaction to add text-finding capabilities to your view.

When invoking the interaction, the system displays a find panel for entering a string to search, with buttons for navigating between results. When supporting replacement, this also includes a field for the text replacing matches. The find panel presents as a part of the onscreen keyboard when visible, or inline as part of the receiver’s view hierarchy.

Input from a hardware keyboard triggers a find interaction using standard system shortcuts such as Command+F for find, Command+G for find next, and Command+Shift+G for find previous. Adding the interaction also enables these commands in the menu bar on macOS when your view becomes first responder. You can also trigger the interaction by calling the [presentFindNavigatorShowingReplace:](uifindinteraction/presentfindnavigator%28showingreplace_%29.md) method on the interaction object, providing access to find and replace operations programatically.

Some classes, such as [UITextView](uitextview.md), [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview), and [PDFView](../pdfkit/pdfview.md), support built-in find interactions. To enable the interaction on these views, set [findInteractionEnabled](uitextview/isfindinteractionenabled.md) to `true`.

```swift
textView.isFindInteractionEnabled = true
```

To add find and replace operations to other views:

1. Create the find interaction object, passing a delegate into the default initializer.
2. Add the interaction by calling the [addInteraction:](uiview/addinteraction%28__%29.md) method on the view.
3. Provide a [UIFindSession](uifindsession.md) object to manage the search performed on the content displayed in the view. You return this object through the [findInteraction:sessionForView:](uifindinteractiondelegate/findinteraction%28__sessionfor_%29.md) method on the delegate.

The following example creates a find interaction for a view that presents searchable content for a document.

```swift
let document = Document(string: "")
lazy var interactionView = InteractionView(document: document)

lazy var findInteraction = UIFindInteraction(sessionDelegate: self)

override func viewDidLoad() {
    super.viewDidLoad()

    // Add the find interaction.
    interactionView.addInteraction(findInteraction)
}

func findInteraction(_ interaction: UIFindInteraction, sessionFor view: UIView) -> UIFindSession? {
    // Return a searchable object.
    return UITextSearchingFindSession(searchableObject: document)
}
```

Implement the [UITextSearching](uitextsearching-53wjq.md) protocol on the class that encapsulates the searchable content for your view to use an instance of [UITextSearchingFindSession](uitextsearchingfindsession.md) as the session object. Alternatively, you can subclass [UIFindSession](uifindsession.md) when you want to manage the details of the session using a custom class.

> **Related Sessions from WWDC22**

>  Session 10071: [Adopt desktop-class editing interactions](https://developer.apple.com/wwdc22/10071)

## Topics

### Creating a find interaction

- [initWithSessionDelegate:](uifindinteraction/init%28sessiondelegate_%29.md): Initializes a find interaction object with the delegate object you specify.

### Managing find interactions

- [delegate](uifindinteraction/delegate.md): An object that updates your app’s presentation and provides the session object for managing the interaction’s search.
- [presentFindNavigatorShowingReplace:](uifindinteraction/presentfindnavigator%28showingreplace_%29.md): Begins a search, displaying the find panel.
- [dismissFindNavigator](uifindinteraction/dismissfindnavigator%28%29.md): Dismisses the find panel, if present.
- [findNext](uifindinteraction/findnext%28%29.md): Highlights the next found result in the content, relative to the currently highlighted result.
- [findPrevious](uifindinteraction/findprevious%28%29.md): Highlights the previously found result in the document, relative to the currently highlighted result.

### Configuring the find panel

- [findNavigatorVisible](uifindinteraction/isfindnavigatorvisible.md): A Boolean value that indicates when the find panel displays onscreen.
- [searchText](uifindinteraction/searchtext.md): The search query with which to prepopulate the find panel’s search text field.
- [replacementText](uifindinteraction/replacementtext.md): The replacement string with which to prepopulate the find panel’s replace text field.
- [optionsMenuProvider](uifindinteraction/optionsmenuprovider.md): A closure that populates the search options for a find interaction.

### Managing the search

- [activeFindSession](uifindinteraction/activefindsession.md): The object that manages the state, presentation, and behavior of an active search.
- [updateResultCount](uifindinteraction/updateresultcount%28%29.md): Updates the results the interface displays for the active search.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Related Documentation

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md): Optimize your iPad app’s user experience by adopting desktop-class enhancements for multitasking with Stage Manager, document interactions, text editing, search, and more.

### Find and replace

- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-53wjq.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSessionSearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
