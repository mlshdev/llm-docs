> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/tabbingmode-swift.property](https://developer.apple.com/documentation/appkit/nswindow/tabbingmode-swift.property)

# tabbingMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A value that indicates when a window displays tabs.

## Declaration

```swift
var tabbingMode: NSWindow.TabbingMode { get set }
```

<a id="Discussion"></a>

## Discussion

Set this to the desired tabbing mode before displaying a window. The default value is [NSWindow.TabbingMode.automatic](tabbingmode-swift.enum/automatic.md). When the value is [NSWindow.TabbingMode.automatic](tabbingmode-swift.enum/automatic.md), the system uses [userTabbingPreference](usertabbingpreference-swift.type.property.md) to determine tabbing behavior.

For a list of possible values, see [NSWindow.TabbingMode](tabbingmode-swift.enum.md).

## See Also

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](tab.md): An object that represents information about a window when it displays as a tab.
- [tabbingIdentifier](tabbingidentifier-swift.property.md): A value that allows a group of related windows.
- [NSWindow.TabbingIdentifier](tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow(\_:ordered:)](addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbedWindows](tabbedwindows.md): An array of windows that display as tabs.
- [mergeAllWindows(\_:)](mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectNextTab(\_:)](selectnexttab%28__%29.md): Selects the next tab in the tab group in the trailing direction.
- [selectPreviousTab(\_:)](selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow(\_:)](movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar(\_:)](toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview(\_:)](toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](tabgroup.md): A group of windows that display together as a tab group.

# tabbingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A value that indicates when a window displays tabs.

## Declaration

```objectivec
@property NSWindowTabbingMode tabbingMode;
```

<a id="Discussion"></a>

## Discussion

Set this to the desired tabbing mode before displaying a window. The default value is [NSWindowTabbingModeAutomatic](tabbingmode-swift.enum/automatic.md). When the value is [NSWindowTabbingModeAutomatic](tabbingmode-swift.enum/automatic.md), the system uses [userTabbingPreference](usertabbingpreference-swift.type.property.md) to determine tabbing behavior.

For a list of possible values, see [NSWindowTabbingMode](tabbingmode-swift.enum.md).

## See Also

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](tab.md): An object that represents information about a window when it displays as a tab.
- [tabbingIdentifier](tabbingidentifier-swift.property.md): A value that allows a group of related windows.
- [NSWindowTabbingIdentifier](tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow:ordered:](addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbedWindows](tabbedwindows.md): An array of windows that display as tabs.
- [mergeAllWindows:](mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectNextTab:](selectnexttab%28__%29.md): Selects the next tab in the tab group in the trailing direction.
- [selectPreviousTab:](selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow:](movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar:](toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview:](toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](tabgroup.md): A group of windows that display together as a tab group.
