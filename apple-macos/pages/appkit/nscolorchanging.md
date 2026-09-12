> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorchanging](https://developer.apple.com/documentation/appkit/nscolorchanging)

# NSColorChanging (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol NSColorChanging : NSObjectProtocol
```

<a id="Overview"></a>

## Overview

When the user selects a color in an [NSColorPanel](nscolorpanel.md) object, the panel tries to call this method on the first responder. You can override this method in any responder that needs to respond to a color change.

## Topics

### Responding to a Color Change

- [changeColor(\_:)](nscolorchanging/changecolor%28__%29.md): Sent to the first responder when the user selects a color in an NSColorPanel object.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Responding to a color change

- [colorDidChangeNotification](nscolorpanel/colordidchangenotification.md): Posted when the color of the `NSColorPanel` is set, as when [NSColorPanel](nscolorpanel.md) is invoked.

# NSColorChanging (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol NSColorChanging <NSObject>
```

<a id="Overview"></a>

## Overview

When the user selects a color in an [NSColorPanel](nscolorpanel.md) object, the panel tries to call this method on the first responder. You can override this method in any responder that needs to respond to a color change.

## Topics

### Responding to a Color Change

- [changeColor:](nscolorchanging/changecolor%28__%29.md): Sent to the first responder when the user selects a color in an NSColorPanel object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Responding to a color change

- [changeColor:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changecolor:): Deprecated. Sent to the first responder when the user selects a color in an `NSColorPanel` object.
- [NSColorPanelColorDidChangeNotification](nscolorpanel/colordidchangenotification.md): Posted when the color of the `NSColorPanel` is set, as when [NSColorPanel](nscolorpanel.md) is invoked.
