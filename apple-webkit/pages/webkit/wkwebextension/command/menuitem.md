> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/command/menuitem](https://developer.apple.com/documentation/webkit/wkwebextension/command/menuitem)

# menuItem (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A menu item representation of the web extension command for use in menus.

## Declaration

```swift
@NSCopying var menuItem: UIMenuElement { get }
```

```swift
@NSCopying var menuItem: NSMenuItem { get }
```

<a id="discussion"></a>

## Discussion

Provides a representation of the web extension command as a menu item to display in the app.

Selecting the menu item will perform the command, offering a convenient and visual way for users to execute this web extension command.

# menuItem (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A menu item representation of the web extension command for use in menus.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UIMenuElement * menuItem;
```

```objectivec
@property (nonatomic, copy, readonly) NSMenuItem * menuItem;
```

<a id="discussion"></a>

## Discussion

Provides a representation of the web extension command as a menu item to display in the app.

Selecting the menu item will perform the command, offering a convenient and visual way for users to execute this web extension command.
