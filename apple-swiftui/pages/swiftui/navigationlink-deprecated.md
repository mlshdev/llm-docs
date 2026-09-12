> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink-deprecated](https://developer.apple.com/documentation/swiftui/navigationlink-deprecated)

# Deprecated symbols

**Framework:** SwiftUI  
**Kind:** API Collection

Review deprecated navigation link initializers.

<a id="Overview"></a>

## Overview

For information about updating your use of navigation symbols, see [Migrating to new navigation types](migrating-to-new-navigation-types.md).

## Topics

### Creating links with content builders

- [init(\_:isActive:destination:)](navigationlink/init%28__isactive_destination_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when active, with a text label that the link generates from a localized string key.
- [init(isActive:destination:label:)](navigationlink/init%28isactive_destination_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when active.
- [init(\_:tag:selection:destination:)](navigationlink/init%28__tag_selection_destination_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when a bound selection variable matches a value you provide, using a text label that the link generates from a title string.
- [init(tag:selection:destination:label:)](navigationlink/init%28tag_selection_destination_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when a bound selection variable equals a given tag value.

### Creating links for WatchKit

- [init(destinationName:isActive:label:)](navigationlink/init%28destinationname_isactive_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard when active.
- [init(destinationName:tag:selection:label:)](navigationlink/init%28destinationname_tag_selection_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard when a bound selection variable matches a value you provide.
- [init(destinationName:label:)](navigationlink/init%28destinationname_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard.

### Creating links with view arguments

- [init(\_:destination:isActive:)](navigationlink/init%28__destination_isactive_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when active, with a text label that the link generates from a localized string key.
- [init(destination:isActive:label:)](navigationlink/init%28destination_isactive_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when active.
- [init(\_:destination:tag:selection:)](navigationlink/init%28__destination_tag_selection_%29.md): Deprecated. Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view when a bound selection variable matches a value you provide, using a text label that the link generates from a title string.
- [init(destination:tag:selection:label:)](navigationlink/init%28destination_tag_selection_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` conforms to `View`. Creates a navigation link that presents the destination view when a bound selection variable equals a given tag value.
