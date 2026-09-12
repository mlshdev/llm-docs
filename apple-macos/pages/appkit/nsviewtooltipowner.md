> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewtooltipowner](https://developer.apple.com/documentation/appkit/nsviewtooltipowner)

# NSViewToolTipOwner (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods for dynamically associating a tool tip with a view.

## Declaration

```swift
protocol NSViewToolTipOwner : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Tool tips are hints displayed to the user when the mouse hovers over a view. Adopt this protocol in views for which you want to provide tool tips. If the view does not implement this protocol, the system uses the [description](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/description) method instead.

## Topics

### Obtaining Tool Tip Strings

- [view(\_:stringForToolTip:point:userData:)](nsviewtooltipowner/view%28__stringfortooltip_point_userdata_%29.md): Returns the tool tip string to be displayed due to the cursor pausing at location `point` within the tool tip rectangle identified by `tag` in the view `view`.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSForm](nsform.md)
- [NSMatrix](nsmatrix.md)
- [NSTableHeaderView](nstableheaderview.md)

# NSViewToolTipOwner (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods for dynamically associating a tool tip with a view.

## Declaration

```objectivec
@protocol NSViewToolTipOwner <NSObject>
```

<a id="overview"></a>

## Overview

Tool tips are hints displayed to the user when the mouse hovers over a view. Adopt this protocol in views for which you want to provide tool tips. If the view does not implement this protocol, the system uses the [description](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/description) method instead.

## Topics

### Obtaining Tool Tip Strings

- [view:stringForToolTip:point:userData:](nsviewtooltipowner/view%28__stringfortooltip_point_userdata_%29.md): Returns the tool tip string to be displayed due to the cursor pausing at location `point` within the tool tip rectangle identified by `tag` in the view `view`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSMatrix](nsmatrix.md)
- [NSTableHeaderView](nstableheaderview.md)
