> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderbarcontainer](https://developer.apple.com/documentation/appkit/nstextfinderbarcontainer)

# NSTextFinderBarContainer (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that provides a container in which the find bar is displayed.

## Declaration

```swift
protocol NSTextFinderBarContainer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To display the find bar, a container for the find bar must be specified. You specify a find bar container using the [findBarContainer](nstextfinder/findbarcontainer.md) of the [NSTextFinder](nstextfinder.md) class.

See [NSTextFinder](nstextfinder.md) for more information.

## Topics

### Find Bar View

- [findBarView](nstextfinderbarcontainer/findbarview.md): The view assigned by the text bar as the find bar view for the container.
- [contentView()](nstextfinderbarcontainer/contentview%28%29.md): A view hierarchy that contains all the views which display the contents being searched.
- [isFindBarVisible](nstextfinderbarcontainer/isfindbarvisible.md): Returns whether the container should display its find bar.

### Find Bar Height

- [findBarViewDidChangeHeight()](nstextfinderbarcontainer/findbarviewdidchangeheight%28%29.md): Notifies the find bar container that the find bar has changed its height.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSScrollView](nsscrollview.md)

## See Also

### Search and Replace

- [NSTextFinder](nstextfinder.md): An optional search-and-replace find interface inside a view, usually a scroll view.
- [NSTextFinderClient](nstextfinderclient.md): A set of methods implemented by objects that support searching using the [NSTextFinder](nstextfinder.md) class and the in-window text find bar.

# NSTextFinderBarContainer (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that provides a container in which the find bar is displayed.

## Declaration

```objectivec
@protocol NSTextFinderBarContainer <NSObject>
```

<a id="overview"></a>

## Overview

To display the find bar, a container for the find bar must be specified. You specify a find bar container using the [findBarContainer](nstextfinder/findbarcontainer.md) of the [NSTextFinder](nstextfinder.md) class.

See [NSTextFinder](nstextfinder.md) for more information.

## Topics

### Find Bar View

- [findBarView](nstextfinderbarcontainer/findbarview.md): The view assigned by the text bar as the find bar view for the container.
- [contentView](nstextfinderbarcontainer/contentview%28%29.md): A view hierarchy that contains all the views which display the contents being searched.
- [findBarVisible](nstextfinderbarcontainer/isfindbarvisible.md): Returns whether the container should display its find bar.

### Find Bar Height

- [findBarViewDidChangeHeight](nstextfinderbarcontainer/findbarviewdidchangeheight%28%29.md): Notifies the find bar container that the find bar has changed its height.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSScrollView](nsscrollview.md)

## See Also

### Search and Replace

- [NSTextFinder](nstextfinder.md): An optional search-and-replace find interface inside a view, usually a scroll view.
- [NSTextFinderClient](nstextfinderclient.md): A set of methods implemented by objects that support searching using the [NSTextFinder](nstextfinder.md) class and the in-window text find bar.
