> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutcontainer](https://developer.apple.com/documentation/appkit/nscollectionlayoutcontainer)

# NSCollectionLayoutContainer (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A protocol used to provide information about the size and content insets of a layout’s container.

## Declaration

```swift
@MainActor protocol NSCollectionLayoutContainer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

In a section provider, you use the [container](nscollectionlayoutenvironment/container.md) property of the layout environment ([NSCollectionLayoutEnvironment](nscollectionlayoutenvironment.md)) to get information about the container of the layout, such as its size and content insets. Knowing about the container’s size while rendering the layout’s sections helps you make decisions about how to display the layout.

## Topics

### Getting content size

- [contentSize](nscollectionlayoutcontainer/contentsize.md): The size of the container before content insets are applied.
- [effectiveContentSize](nscollectionlayoutcontainer/effectivecontentsize.md): The size of the container after content insets are applied.

### Getting content insets

- [contentInsets](nscollectionlayoutcontainer/contentinsets.md): The amount of space added around the content of the container to adjust its final size.
- [effectiveContentInsets](nscollectionlayoutcontainer/effectivecontentinsets.md): The amount of space added around the content of the container to adjust its final size after item content insets are applied.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Size and spacing

- [NSCollectionLayoutDimension](nscollectionlayoutdimension.md): An individual dimension representing an item’s width or height in a collection view.
- [NSCollectionLayoutSize](nscollectionlayoutsize.md): The width and the height of an item in a collection view.
- [NSCollectionLayoutSpacing](nscollectionlayoutspacing.md): An object that defines the space between or around items in a collection view.
- [NSCollectionLayoutEdgeSpacing](nscollectionlayoutedgespacing.md): An object that defines the space around the edges of items in a collection view.

# NSCollectionLayoutContainer (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A protocol used to provide information about the size and content insets of a layout’s container.

## Declaration

```objectivec
@protocol NSCollectionLayoutContainer <NSObject>
```

<a id="overview"></a>

## Overview

In a section provider, you use the [container](nscollectionlayoutenvironment/container.md) property of the layout environment ([NSCollectionLayoutEnvironment](nscollectionlayoutenvironment.md)) to get information about the container of the layout, such as its size and content insets. Knowing about the container’s size while rendering the layout’s sections helps you make decisions about how to display the layout.

## Topics

### Getting content size

- [contentSize](nscollectionlayoutcontainer/contentsize.md): The size of the container before content insets are applied.
- [effectiveContentSize](nscollectionlayoutcontainer/effectivecontentsize.md): The size of the container after content insets are applied.

### Getting content insets

- [contentInsets](nscollectionlayoutcontainer/contentinsets.md): The amount of space added around the content of the container to adjust its final size.
- [effectiveContentInsets](nscollectionlayoutcontainer/effectivecontentinsets.md): The amount of space added around the content of the container to adjust its final size after item content insets are applied.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Size and spacing

- [NSCollectionLayoutDimension](nscollectionlayoutdimension.md): An individual dimension representing an item’s width or height in a collection view.
- [NSCollectionLayoutSize](nscollectionlayoutsize.md): The width and the height of an item in a collection view.
- [NSCollectionLayoutSpacing](nscollectionlayoutspacing.md): An object that defines the space between or around items in a collection view.
- [NSCollectionLayoutEdgeSpacing](nscollectionlayoutedgespacing.md): An object that defines the space around the edges of items in a collection view.
