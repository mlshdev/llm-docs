> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/nstoolbarsection](https://developer.apple.com/documentation/uikit/uinavigationbar/nstoolbarsection)

# UINavigationBar.NSToolbarSection (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that determine how the system hosts the navigation bar in an AppKit toolbar.

## Declaration

```swift
enum NSToolbarSection
```

## Topics

### Constants

- [UINavigationBar.NSToolbarSection.none](nstoolbarsection/none.md): A constant that disables hosting the navigation bar in the toolbar.
- [UINavigationBar.NSToolbarSection.sidebar](nstoolbarsection/sidebar.md): A constant that hosts the navigation bar in the toolbar’s sidebar column.
- [UINavigationBar.NSToolbarSection.supplementary](nstoolbarsection/supplementary.md): A constant that hosts the navigation bar in the toolbar’s supplementary column.
- [UINavigationBar.NSToolbarSection.content](nstoolbarsection/content.md): A constant that hosts the navigation bar in the toolbar’s content column.

### Initializers

- [init(rawValue:)](nstoolbarsection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Building with Mac Catalyst

- [behavioralStyle](behavioralstyle.md): The behavioral style of the navigation bar.
- [preferredBehavioralStyle](preferredbehavioralstyle.md): The preferred behavioral style of the navigation bar.
- [currentNSToolbarSection](currentnstoolbarsection.md): The toolbar section that the navigation bar is currently using.

# UINavigationBarNSToolbarSection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that determine how the system hosts the navigation bar in an AppKit toolbar.

## Declaration

```objectivec
enum UINavigationBarNSToolbarSection : NSInteger;
```

## Topics

### Constants

- [UINavigationBarNSToolbarSectionNone](nstoolbarsection/none.md): A constant that disables hosting the navigation bar in the toolbar.
- [UINavigationBarNSToolbarSectionSidebar](nstoolbarsection/sidebar.md): A constant that hosts the navigation bar in the toolbar’s sidebar column.
- [UINavigationBarNSToolbarSectionSupplementary](nstoolbarsection/supplementary.md): A constant that hosts the navigation bar in the toolbar’s supplementary column.
- [UINavigationBarNSToolbarSectionContent](nstoolbarsection/content.md): A constant that hosts the navigation bar in the toolbar’s content column.

## See Also

### Building with Mac Catalyst

- [behavioralStyle](behavioralstyle.md): The behavioral style of the navigation bar.
- [preferredBehavioralStyle](preferredbehavioralstyle.md): The preferred behavioral style of the navigation bar.
- [currentNSToolbarSection](currentnstoolbarsection.md): The toolbar section that the navigation bar is currently using.
