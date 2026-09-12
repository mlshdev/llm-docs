> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbardelegate](https://developer.apple.com/documentation/appkit/nstouchbardelegate)

# NSTouchBarDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A protocol that allows you to provide the items for a bar dynamically.

## Declaration

```swift
protocol NSTouchBarDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use a bar delegate, according to the needs of your app, to dynamically create items ([NSTouchBarItem](nstouchbaritem.md) instances). For more information, see [Item objects](nstouchbar.md#Item-objects).

## Topics

### Providing bar items

- [touchBar(\_:makeItemForIdentifier:)](nstouchbardelegate/touchbar%28__makeitemforidentifier_%29.md): Asks the delegate object for the bar item for the specified bar and item identifier.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Essentials

- [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.
- [Creating and Customizing the Touch Bar](creating-and-customizing-the-touch-bar.md): Adopt Touch Bar support by displaying interactive content and controls for your macOS apps.
- [NSTouchBar](nstouchbar.md): An object that provides dynamic contextual controls in the Touch Bar of supported models of MacBook Pro.
- [NSTouchBarProvider](nstouchbarprovider.md): A protocol that an object adopts to create a bar object in your app.

# NSTouchBarDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.1+ · macOS

A protocol that allows you to provide the items for a bar dynamically.

## Declaration

```objectivec
@protocol NSTouchBarDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use a bar delegate, according to the needs of your app, to dynamically create items ([NSTouchBarItem](nstouchbaritem.md) instances). For more information, see [Item objects](nstouchbar.md#Item-objects).

## Topics

### Providing bar items

- [touchBar:makeItemForIdentifier:](nstouchbardelegate/touchbar%28__makeitemforidentifier_%29.md): Asks the delegate object for the bar item for the specified bar and item identifier.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Essentials

- [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.
- [Creating and Customizing the Touch Bar](creating-and-customizing-the-touch-bar.md): Adopt Touch Bar support by displaying interactive content and controls for your macOS apps.
- [NSTouchBar](nstouchbar.md): An object that provides dynamic contextual controls in the Touch Bar of supported models of MacBook Pro.
- [NSTouchBarProvider](nstouchbarprovider.md): A protocol that an object adopts to create a bar object in your app.
