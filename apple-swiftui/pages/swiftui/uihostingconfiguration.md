> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingconfiguration](https://developer.apple.com/documentation/swiftui/uihostingconfiguration)

# UIHostingConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A content configuration suitable for hosting a hierarchy of SwiftUI views.

## Declaration

```swift
struct UIHostingConfiguration<Content, Background> where Content : View, Background : View
```

<a id="overview"></a>

## Overview

Use a value of this type, which conforms to the [UIContentConfiguration](https://developer.apple.com/documentation/uikit/uicontentconfiguration-9eib5) protocol, with a [UICollectionViewCell](https://developer.apple.com/documentation/uikit/uicollectionviewcell) or [UITableViewCell](https://developer.apple.com/documentation/uikit/uitableviewcell) to host a hierarchy of SwiftUI views in a collection or table view, respectively. For example, the following shows a stack with an image and text inside the cell:

```swift
myCell.contentConfiguration = UIHostingConfiguration {
    HStack {
        Image(systemName: "star").foregroundStyle(.purple)
        Text("Favorites")
        Spacer()
    }
}
```

You can also customize the background of the containing cell. The following example draws a blue background:

```swift
myCell.contentConfiguration = UIHostingConfiguration {
    HStack {
        Image(systemName: "star").foregroundStyle(.purple)
        Text("Favorites")
        Spacer()
    }
}
.background {
    Color.blue
}
```

When used in a list layout, certain APIs are bridged automatically, like swipe actions and separator alignment. The following example shows a trailing yellow star swipe action:

```swift
cell.contentConfiguration = UIHostingConfiguration {
    HStack {
        Image(systemName: "airplane")
        Text("Flight 123")
        Spacer()
    }
    .swipeActions {
        Button { ... } label: {
            Label("Favorite", systemImage: "star")
        }
        .tint(.yellow)
    }
}
```

## Topics

### Creating and updating a configuration

- [init(content:)](uihostingconfiguration/init%28content_%29.md): Conforms when `Content` conforms to `View` and `Background` is `EmptyView`. Creates a hosting configuration with the given contents.

### Setting the background

- [background(\_:)](uihostingconfiguration/background%28__%29.md): Sets the background contents for the hosting configuration’s enclosing cell.
- [background(content:)](uihostingconfiguration/background%28content_%29.md): Sets the background contents for the hosting configuration’s enclosing cell.

### Setting margins

- [margins(\_:\_:)](uihostingconfiguration/margins%28____%29.md): Sets the margins around the content of the configuration.

### Setting a size

- [minSize(width:height:)](uihostingconfiguration/minsize%28width_height_%29.md): Sets the minimum size for the configuration.
- [minSize()](uihostingconfiguration/minsize%28%29.md): Deprecated. Sets the minimum size for the configuration.

## Relationships

### Conforms To

- [UIContentConfiguration](https://developer.apple.com/documentation/uikit/uicontentconfiguration-9eib5)

## See Also

### Displaying SwiftUI views in UIKit

- [Using SwiftUI with UIKit](https://developer.apple.com/documentation/uikit/using-swiftui-with-uikit): Learn how to incorporate SwiftUI views into a UIKit app.
- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [UIHostingController](uihostingcontroller.md): A UIKit view controller that manages a SwiftUI view hierarchy.
- [UIHostingControllerSizingOptions](uihostingcontrollersizingoptions.md): Options for how a hosting controller tracks its content’s size.
- [UIHostingSceneDelegate](uihostingscenedelegate.md): Extends `UIKit/UISceneDelegate` to bridge SwiftUI scenes.
