> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicommandtagshare](https://developer.apple.com/documentation/uikit/uicommandtagshare)

# UICommandTagShare (Swift)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A value that identifies a command as a Share menu.

## Declaration

```swift
let UICommandTagShare: String
```

<a id="Discussion"></a>

## Discussion

To create a Share menu, add [UICommandTagShare](uicommandtagshare.md) to the `propertyList` of a [UICommand](uicommand.md) or [UIKeyCommand](uikeycommand.md) object.

```swift
// Ensure that the builder is modifying the menu bar system.
guard builder.system == UIMenuSystem.main else { return }

let shareCommand = UICommand(title: "Share",
                             action: #selector(share(_:)),
                             propertyList: UICommandTagShare)

let shareMenu = UIMenu(title: "", options: .displayInline, children: [shareCommand])

// Insert the menu into the File menu before the Close menu.
builder.insertSibling(shareMenu, beforeMenu: .close)
```

## See Also

### Associating data

- [propertyList](uicommand/propertylist.md): An object that contains data to associate with the command.

# UICommandTagShare (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A value that identifies a command as a Share menu.

## Declaration

```objectivec
extern NSString * const UICommandTagShare;
```

<a id="Discussion"></a>

## Discussion

To create a Share menu, add [UICommandTagShare](uicommandtagshare.md) to the `propertyList` of a [UICommand](uicommand.md) or [UIKeyCommand](uikeycommand.md) object.

```swift
// Ensure that the builder is modifying the menu bar system.
guard builder.system == UIMenuSystem.main else { return }

let shareCommand = UICommand(title: "Share",
                             action: #selector(share(_:)),
                             propertyList: UICommandTagShare)

let shareMenu = UIMenu(title: "", options: .displayInline, children: [shareCommand])

// Insert the menu into the File menu before the Close menu.
builder.insertSibling(shareMenu, beforeMenu: .close)
```

## See Also

### Associating data

- [propertyList](uicommand/propertylist.md): An object that contains data to associate with the command.
