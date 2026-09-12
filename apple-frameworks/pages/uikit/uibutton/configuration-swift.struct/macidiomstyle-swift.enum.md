> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/macidiomstyle-swift.enum](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/macidiomstyle-swift.enum)

# UIButton.Configuration.MacIdiomStyle

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The button style your app uses when running in macOS.

## Declaration

```swift
enum MacIdiomStyle
```

<a id="overview"></a>

## Overview

If you build your app with [Mac Catalyst](../../mac-catalyst.md), you can use these styles to configure how your app displays a button when running on a Mac. To opt in to these styles, choose Optimize Interface for Mac in you project’s general settings.

If you’re configuring your button in Interface Builder, you can choose a style from the Mac Style pop-up menu in the Attributes inspector.

## Topics

### Button styles

- [UIButton.Configuration.MacIdiomStyle.automatic](macidiomstyle-swift.enum/automatic.md): The button has a style that matches other content in the button configuration.
- [UIButton.Configuration.MacIdiomStyle.bordered](macidiomstyle-swift.enum/bordered.md): The button has a bordered style.
- [UIButton.Configuration.MacIdiomStyle.borderless](macidiomstyle-swift.enum/borderless.md): The button has a borderless style.
- [UIButton.Configuration.MacIdiomStyle.borderlessTinted](macidiomstyle-swift.enum/borderlesstinted.md): The button has a tinted, borderless style.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring the appearance on macOS

- [macIdiomStyle](macidiomstyle-swift.property.md): The style to use when this button appears in macOS.
