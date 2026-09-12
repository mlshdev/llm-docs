> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/tabbingidentifier-swift.property](https://developer.apple.com/documentation/appkit/nswindow/tabbingidentifier-swift.property)

# tabbingIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A value that allows a group of related windows.

## Declaration

```swift
var tabbingIdentifier: NSWindow.TabbingIdentifier { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a window generates a tabbing identifier from inherent window properties, such as the window class name, the delegate class name, the window controller class name, and some additional state. Group windows together by using the same tabbing identifier.

## See Also

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](tab.md): An object that represents information about a window when it displays as a tab.
- [NSWindow.TabbingIdentifier](tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow(\_:ordered:)](addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbingMode](tabbingmode-swift.property.md): A value that indicates when a window displays tabs.
- [tabbedWindows](tabbedwindows.md): An array of windows that display as tabs.
- [mergeAllWindows(\_:)](mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectNextTab(\_:)](selectnexttab%28__%29.md): Selects the next tab in the tab group in the trailing direction.
- [selectPreviousTab(\_:)](selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow(\_:)](movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar(\_:)](toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview(\_:)](toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](tabgroup.md): A group of windows that display together as a tab group.

# tabbingIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A value that allows a group of related windows.

## Declaration

```objectivec
@property (copy) NSWindowTabbingIdentifier tabbingIdentifier;
```

<a id="Discussion"></a>

## Discussion

By default, a window generates a tabbing identifier from inherent window properties, such as the window class name, the delegate class name, the window controller class name, and some additional state. Group windows together by using the same tabbing identifier.

## See Also

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](tab.md): An object that represents information about a window when it displays as a tab.
- [NSWindowTabbingIdentifier](tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow:ordered:](addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbingMode](tabbingmode-swift.property.md): A value that indicates when a window displays tabs.
- [tabbedWindows](tabbedwindows.md): An array of windows that display as tabs.
- [mergeAllWindows:](mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectNextTab:](selectnexttab%28__%29.md): Selects the next tab in the tab group in the trailing direction.
- [selectPreviousTab:](selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow:](movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar:](toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview:](toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](tabgroup.md): A group of windows that display together as a tab group.
