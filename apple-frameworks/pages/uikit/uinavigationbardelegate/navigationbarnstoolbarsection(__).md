> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbardelegate/navigationbarnstoolbarsection(_:)](https://developer.apple.com/documentation/uikit/uinavigationbardelegate/navigationbarnstoolbarsection(_:))

# navigationBarNSToolbarSection(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Asks the delegate which section of the toolbar to host the navigation bar in.

## Declaration

```swift
optional func navigationBarNSToolbarSection(_ navigationBar: UINavigationBar) -> UINavigationBar.NSToolbarSection
```

## Parameters

- `navigationBar`: The navigation bar to host in an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar).

<a id="return-value"></a>

## Return Value

An [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) section that determines which section to place the navigation bar in, and how to present the navigation bar in that section. Return [UINavigationBar.NSToolbarSection.none](../uinavigationbar/nstoolbarsection/none.md) to disable [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) hosting, which is equivalent to setting [preferredBehavioralStyle](../uinavigationbar/preferredbehavioralstyle.md) to [UIBehavioralStyle.pad](../uibehavioralstyle/pad.md).

<a id="Discussion"></a>

## Discussion

The system calls this method to determine how to render your [UINavigationBar](../uinavigationbar.md) when you build your app with Mac Catalyst.

# navigationBarNSToolbarSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Asks the delegate which section of the toolbar to host the navigation bar in.

## Declaration

```objectivec
- (UINavigationBarNSToolbarSection) navigationBarNSToolbarSection:(UINavigationBar *) navigationBar;
```

## Parameters

- `navigationBar`: The navigation bar to host in an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar).

<a id="return-value"></a>

## Return Value

An [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) section that determines which section to place the navigation bar in, and how to present the navigation bar in that section. Return [UINavigationBarNSToolbarSectionNone](../uinavigationbar/nstoolbarsection/none.md) to disable [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) hosting, which is equivalent to setting [preferredBehavioralStyle](../uinavigationbar/preferredbehavioralstyle.md) to [UIBehavioralStylePad](../uibehavioralstyle/pad.md).

<a id="Discussion"></a>

## Discussion

The system calls this method to determine how to render your [UINavigationBar](../uinavigationbar.md) when you build your app with Mac Catalyst.
