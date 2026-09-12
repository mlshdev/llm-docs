> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/selectnexttab(_:)](https://developer.apple.com/documentation/appkit/nswindow/selectnexttab(_:))

# selectNextTab(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Selects the next tab in the tab group in the trailing direction.

## Declaration

```swift
@IBAction func selectNextTab(_ sender: Any?)
```

## Parameters

- `sender`: The object that initiated the action to select the next tab.

## See Also

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](tab.md): An object that represents information about a window when it displays as a tab.
- [tabbingIdentifier](tabbingidentifier-swift.property.md): A value that allows a group of related windows.
- [NSWindow.TabbingIdentifier](tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow(\_:ordered:)](addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbingMode](tabbingmode-swift.property.md): A value that indicates when a window displays tabs.
- [tabbedWindows](tabbedwindows.md): An array of windows that display as tabs.
- [mergeAllWindows(\_:)](mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectPreviousTab(\_:)](selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow(\_:)](movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar(\_:)](toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview(\_:)](toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](tabgroup.md): A group of windows that display together as a tab group.

# selectNextTab: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Selects the next tab in the tab group in the trailing direction.

## Declaration

```objectivec
- (void) selectNextTab:(id) sender;
```

## Parameters

- `sender`: The object that initiated the action to select the next tab.

## See Also

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](tab.md): An object that represents information about a window when it displays as a tab.
- [tabbingIdentifier](tabbingidentifier-swift.property.md): A value that allows a group of related windows.
- [NSWindowTabbingIdentifier](tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow:ordered:](addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbingMode](tabbingmode-swift.property.md): A value that indicates when a window displays tabs.
- [tabbedWindows](tabbedwindows.md): An array of windows that display as tabs.
- [mergeAllWindows:](mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectPreviousTab:](selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow:](movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar:](toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview:](toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](tabgroup.md): A group of windows that display together as a tab group.
