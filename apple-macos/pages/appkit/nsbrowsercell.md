> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowsercell](https://developer.apple.com/documentation/appkit/nsbrowsercell)

# NSBrowserCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The user interface of a browser.

## Declaration

```swift
class NSBrowserCell
```

<a id="overview"></a>

## Overview

The [NSBrowserCell](nsbrowsercell.md) class is the subclass of [NSCell](nscell.md) used by default to display data in the columns of an [NSBrowser](nsbrowser.md) object. (Each column contains an [NSMatrix](nsmatrix.md) object filled with [NSBrowserCell](nsbrowsercell.md) objects.)

## Topics

### Getting Browser Cell Information

- [branchImage](nsbrowsercell/branchimage.md): Returns the default image for branch cells in a browser.
- [highlightedBranchImage](nsbrowsercell/highlightedbranchimage.md): Returns the default image for branch browser cells that are highlighted.

### Configuring Browser Cells

- [image](nsbrowsercell/image.md): The browser cell’s image.
- [alternateImage](nsbrowsercell/alternateimage.md): The browser cell’s image for the highlighted state.

### Managing Browser Cell State

- [reset()](nsbrowsercell/reset%28%29.md): Unhighlights the receiver and unsets its state.
- [set()](nsbrowsercell/set%28%29.md): Highlights the receiver and sets its state.
- [isLeaf](nsbrowsercell/isleaf.md): A Boolean that indicates whether the browser cell is a leaf or a branch cell.
- [isLoaded](nsbrowsercell/isloaded.md): A Boolean that indicates whether the cell is ready to display.
- [highlightColor(in:)](nsbrowsercell/highlightcolor%28in_%29.md): Returns the highlight color that the receiver wants to display.

### Initializers

- [init(coder:)](nsbrowsercell/init%28coder_%29.md)
- [init(imageCell:)](nsbrowsercell/init%28imagecell_%29.md)
- [init(textCell:)](nsbrowsercell/init%28textcell_%29.md)

## Relationships

### Inherits From

- [NSCell](nscell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSBrowserCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The user interface of a browser.

## Declaration

```objectivec
@interface NSBrowserCell : NSCell
```

<a id="overview"></a>

## Overview

The [NSBrowserCell](nsbrowsercell.md) class is the subclass of [NSCell](nscell.md) used by default to display data in the columns of an [NSBrowser](nsbrowser.md) object. (Each column contains an [NSMatrix](nsmatrix.md) object filled with [NSBrowserCell](nsbrowsercell.md) objects.)

## Topics

### Getting Browser Cell Information

- [branchImage](nsbrowsercell/branchimage.md): Returns the default image for branch cells in a browser.
- [highlightedBranchImage](nsbrowsercell/highlightedbranchimage.md): Returns the default image for branch browser cells that are highlighted.

### Configuring Browser Cells

- [image](nsbrowsercell/image.md): The browser cell’s image.
- [alternateImage](nsbrowsercell/alternateimage.md): The browser cell’s image for the highlighted state.

### Managing Browser Cell State

- [reset](nsbrowsercell/reset%28%29.md): Unhighlights the receiver and unsets its state.
- [set](nsbrowsercell/set%28%29.md): Highlights the receiver and sets its state.
- [leaf](nsbrowsercell/isleaf.md): A Boolean that indicates whether the browser cell is a leaf or a branch cell.
- [loaded](nsbrowsercell/isloaded.md): A Boolean that indicates whether the cell is ready to display.
- [highlightColorInView:](nsbrowsercell/highlightcolor%28in_%29.md): Returns the highlight color that the receiver wants to display.

### Initializers

- [initWithCoder:](nsbrowsercell/init%28coder_%29.md)
- [initImageCell:](nsbrowsercell/init%28imagecell_%29.md)
- [initTextCell:](nsbrowsercell/init%28textcell_%29.md)

## Relationships

### Inherits From

- [NSCell](nscell.md)
