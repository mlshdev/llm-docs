> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompression](https://developer.apple.com/documentation/appkit/nsuserinterfacecompression)

# NSUserInterfaceCompression (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that describes how a UI control should redisplay when space is restricted.

## Declaration

```swift
protocol NSUserInterfaceCompression
```

<a id="overview"></a>

## Overview

A control that adopts this protocol has the ability to resize itself when space is at a premium.

## Topics

### Compressing the UI

- [compress(withPrioritizedCompressionOptions:)](nsuserinterfacecompression/compress%28withprioritizedcompressionoptions_%29.md): Compress the view by applying the specified compression options.

### Querying Compression Status

- [minimumSize(withPrioritizedCompressionOptions:)](nsuserinterfacecompression/minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size a view can achieve by applying the supplied compression options.
- [activeCompressionOptions](nsuserinterfacecompression/activecompressionoptions.md): The compression options that are currently applied to the view.

## Relationships

### Conforming Types

- [NSButton](nsbutton.md)
- [NSPopUpButton](nspopupbutton.md)
- [NSSegmentedControl](nssegmentedcontrol.md)
- [NSStatusBarButton](nsstatusbarbutton.md)

# NSUserInterfaceCompression (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that describes how a UI control should redisplay when space is restricted.

## Declaration

```objectivec
@protocol NSUserInterfaceCompression
```

<a id="overview"></a>

## Overview

A control that adopts this protocol has the ability to resize itself when space is at a premium.

## Topics

### Compressing the UI

- [compressWithPrioritizedCompressionOptions:](nsuserinterfacecompression/compress%28withprioritizedcompressionoptions_%29.md): Compress the view by applying the specified compression options.

### Querying Compression Status

- [minimumSizeWithPrioritizedCompressionOptions:](nsuserinterfacecompression/minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size a view can achieve by applying the supplied compression options.
- [activeCompressionOptions](nsuserinterfacecompression/activecompressionoptions.md): The compression options that are currently applied to the view.

## Relationships

### Conforming Types

- [NSButton](nsbutton.md)
- [NSSegmentedControl](nssegmentedcontrol.md)

## See Also

### View Compression

- [NSDictionaryOfVariableBindings](nsdictionaryofvariablebindings.md): Creates a dictionary wherein the keys are string representations of the corresponding values’ variable names.
