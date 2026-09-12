> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fimenukind](https://developer.apple.com/documentation/findersync/fimenukind)

# FIMenuKind (Swift)

**Framework:** Finder Sync  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

The different kinds of custom menus that the Finder Sync extension can provide.

## Declaration

```swift
enum FIMenuKind
```

## Topics

### Constants

- [FIMenuKind.contextualMenuForItems](fimenukind/contextualmenuforitems.md): A shortcut menu created when the user control-clicks on an item or a group of selected items inside the Finder window.
- [FIMenuKind.contextualMenuForContainer](fimenukind/contextualmenuforcontainer.md): A shortcut menu created when the user control-clicks on the Finder window’s background.
- [FIMenuKind.contextualMenuForSidebar](fimenukind/contextualmenuforsidebar.md): A shortcut menu created when the user control-clicks on an item in the sidebar.
- [FIMenuKind.toolbarItemMenu](fimenukind/toolbaritemmenu.md): A menu created when the user clicks on the extension’s toolbar button.

### Initializers

- [init(rawValue:)](fimenukind/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# FIMenuKind (Objective-C)

**Framework:** Finder Sync  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

The different kinds of custom menus that the Finder Sync extension can provide.

## Declaration

```objectivec
enum FIMenuKind : NSUInteger;
```

## Topics

### Constants

- [FIMenuKindContextualMenuForItems](fimenukind/contextualmenuforitems.md): A shortcut menu created when the user control-clicks on an item or a group of selected items inside the Finder window.
- [FIMenuKindContextualMenuForContainer](fimenukind/contextualmenuforcontainer.md): A shortcut menu created when the user control-clicks on the Finder window’s background.
- [FIMenuKindContextualMenuForSidebar](fimenukind/contextualmenuforsidebar.md): A shortcut menu created when the user control-clicks on an item in the sidebar.
- [FIMenuKindToolbarItemMenu](fimenukind/toolbaritemmenu.md): A menu created when the user clicks on the extension’s toolbar button.
