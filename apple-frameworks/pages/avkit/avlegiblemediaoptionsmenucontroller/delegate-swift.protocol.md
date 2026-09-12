> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.protocol](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.protocol)

# AVLegibleMediaOptionsMenuController.Delegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
protocol Delegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegate protocol for AVLegibleMediaOptionsMenuController

Provides callbacks for caption preview display and enablement state changes.

## Topics

### Responding to menu changes

- [legibleMenuController(\_:didChange:)](delegate-swift.protocol/legiblemenucontroller%28__didchange_%29.md)
- [legibleMenuController(\_:didRequestCaptionPreviewForProfileID:)](delegate-swift.protocol/legiblemenucontroller%28__didrequestcaptionpreviewforprofileid_%29.md)
- [legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview(\_:)](delegate-swift.protocol/legiblemenucontrollerdidrequeststoppingsubtitlecaptionpreview%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a delegate

- [delegate](delegate-swift.property.md)

# AVLegibleMediaOptionsMenuControllerDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
@protocol AVLegibleMediaOptionsMenuControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegate protocol for AVLegibleMediaOptionsMenuController

Provides callbacks for caption preview display and enablement state changes.

## Topics

### Responding to menu changes

- [legibleMenuController:didChangeMenuState:](delegate-swift.protocol/legiblemenucontroller%28__didchange_%29.md)
- [legibleMenuController:didRequestCaptionPreviewForProfileID:](delegate-swift.protocol/legiblemenucontroller%28__didrequestcaptionpreviewforprofileid_%29.md)
- [legibleMenuControllerDidRequestStoppingSubtitleCaptionPreview:](delegate-swift.protocol/legiblemenucontrollerdidrequeststoppingsubtitlecaptionpreview%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a delegate

- [delegate](delegate-swift.property.md)
