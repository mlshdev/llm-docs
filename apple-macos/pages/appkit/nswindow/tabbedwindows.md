> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/tabbedwindows](https://developer.apple.com/documentation/appkit/nswindow/tabbedwindows)

# tabbedWindows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

An array of windows that display as tabs.

## Declaration

```swift
var tabbedWindows: [NSWindow]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the window is not showing a tab bar.

## See Also

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](tab.md): An object that represents information about a window when it displays as a tab.
- [tabbingIdentifier](tabbingidentifier-swift.property.md): A value that allows a group of related windows.
- [NSWindow.TabbingIdentifier](tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow(\_:ordered:)](addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbingMode](tabbingmode-swift.property.md): A value that indicates when a window displays tabs.
- [mergeAllWindows(\_:)](mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectNextTab(\_:)](selectnexttab%28__%29.md): Selects the next tab in the tab group in the trailing direction.
- [selectPreviousTab(\_:)](selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow(\_:)](movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar(\_:)](toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview(\_:)](toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](tabgroup.md): A group of windows that display together as a tab group.

# tabbedWindows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

An array of windows that display as tabs.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSWindow *> * tabbedWindows;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the window is not showing a tab bar.

## See Also

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](tab.md): An object that represents information about a window when it displays as a tab.
- [tabbingIdentifier](tabbingidentifier-swift.property.md): A value that allows a group of related windows.
- [NSWindowTabbingIdentifier](tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow:ordered:](addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbingMode](tabbingmode-swift.property.md): A value that indicates when a window displays tabs.
- [mergeAllWindows:](mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectNextTab:](selectnexttab%28__%29.md): Selects the next tab in the tab group in the trailing direction.
- [selectPreviousTab:](selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow:](movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar:](toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview:](toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](tabgroup.md): A group of windows that display together as a tab group.
