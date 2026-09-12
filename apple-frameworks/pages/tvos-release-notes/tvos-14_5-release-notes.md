> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvos-release-notes/tvos-14_5-release-notes](https://developer.apple.com/documentation/tvos-release-notes/tvos-14_5-release-notes)

# tvOS 14.5 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The tvOS 14.5 SDK provides support to develop tvOS apps for Apple TV devices running tvOS 14.5. The SDK comes bundled with Xcode 12.5, available from the Mac App Store. For information on the compatibility requirements for Xcode 12.5, see [Xcode 12.5 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-12_5-release-notes).

<a id="Accessibility"></a>

### Accessibility

<a id="New-Features"></a>

#### New Features

- Many SF Symbols now have default accessibility labels. (70305995)

<a id="Combine"></a>

### Combine

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Using [Published](../combine/published.md) in a subclass of a type conforming to [ObservableObject](../combine/observableobject.md) now correctly publishes changes. (70305995)

<a id="SwiftUI"></a>

### SwiftUI

<a id="New-Features"></a>

#### New Features

- Added [TitleAndIconLabelStyle](https://developer.apple.com/documentation/swiftui/titleandiconlabelstyle), a new style for [Label](https://developer.apple.com/documentation/swiftui/label) views that shows both the title and icon of the label using a system-standard layout. In most cases, labels show both title and icon by default. However, some containers might apply a different default label style to their content, such as only showing icons within toolbars on macOS and iOS. To opt in to showing both the title and the icon, apply the title and icon label style: `Label("Lightning", systemImage: "bolt.fill").labelStyle(TitleAndIconLabelStyle())`. (64646578)
- Types conforming to any style protocol, such as [ButtonStyle](https://developer.apple.com/documentation/swiftui/buttonstyle) or [ToggleStyle](https://developer.apple.com/documentation/swiftui/togglestyle), are now enforced to be value types. Styles must be structures or enumerations, not classes, and conforming a class to a style protocol may trigger an assertion. This is the same restriction that the system has always enforced on types conforming to [View](https://developer.apple.com/documentation/swiftui/view). (62886135)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- You can now apply multiple [sheet(isPresented:onDismiss:content:)](https://developer.apple.com/documentation/swiftui/view/sheet%28ispresented:ondismiss:content:%29) and [fullScreenCover(item:onDismiss:content:)](https://developer.apple.com/documentation/swiftui/view/fullscreencover%28item:ondismiss:content:%29) modifiers in the same view hierarchy. (74246633)
- Dynamic properties such as [State](https://developer.apple.com/documentation/swiftui/state), [Environment](https://developer.apple.com/documentation/swiftui/environment), and others now work correctly in [ButtonStyle](https://developer.apple.com/documentation/swiftui/buttonstyle) instances. (62886135)
- [ProgressView](https://developer.apple.com/documentation/swiftui/progressview) instances initialized with a [Progress](../foundation/progress.md) object now correctly track updates to the `Progress` object from background threads, and no longer issue a “not allowed” console warning. (69999449)
- [InlinePickerStyle](https://developer.apple.com/documentation/swiftui/inlinepickerstyle) now resolves as an in-line section if applied to a [Picker](https://developer.apple.com/documentation/swiftui/picker) within a [List](https://developer.apple.com/documentation/swiftui/list) on iOS, watchOS, and tvOS, using a checkmark to indicate the selected option. (71383311)
- [AppStorage](https://developer.apple.com/documentation/swiftui/appstorage) property wrappers now work as expected when contained inside an [ObservableObject](../combine/observableobject.md), causing the system to emit the `objectWillChange` publisher. (65562845)
- Using [scrollTo(\_:anchor:)](https://developer.apple.com/documentation/swiftui/scrollviewproxy/scrollto%28_:anchor:%29) without specifying an anchor now scrolls the [List](https://developer.apple.com/documentation/swiftui/list) the minimum amount to make it visible. (70184639)

<a id="UIKit"></a>

### UIKit

<a id="Resolved-Issues"></a>

#### Resolved Issues

- [leadingAccessoryView](../uikit/uitabbar/leadingaccessoryview.md) and [trailingAccessoryView](../uikit/uitabbar/trailingaccessoryview.md) in [UITabBar](../uikit/uitabbar.md) now appear correctly with right-to-left languages. (66755869)
- In a [UICollectionView](../uikit/uicollectionview.md), the focusability of a cell no longer depends on the delegate returning `YES` from the [collectionView(\_:shouldHighlightItemAt:)](../uikit/uicollectionviewdelegate/collectionview%28__shouldhighlightitemat_%29.md) and [collectionView(\_:shouldSelectItemAt:)](../uikit/uicollectionviewdelegate/collectionview%28__shouldselectitemat_%29.md) methods if they are implemented and [collectionView(\_:canFocusItemAt:)](../uikit/uicollectionviewdelegate/collectionview%28__canfocusitemat_%29.md) method is not implemented. (70245159)

<a id="Xcode"></a>

### Xcode

<a id="Resolved-Issues"></a>

#### Resolved Issues

- The View Debugger no longer crashes when viewing an app that includes custom Shapes. (72300793)

## See Also

### tvOS 14

- [tvOS 14.7 Release Notes](tvos-14_7-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 14.6 Release Notes](tvos-14_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 14.4 Release Notes](tvos-14_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 14.3 Release Notes](tvos-14_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 14.2 Release Notes](tvos-14_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 14 Release Notes](tvos-14-release-notes.md): Update your apps to use new features, and test your apps against API changes.
