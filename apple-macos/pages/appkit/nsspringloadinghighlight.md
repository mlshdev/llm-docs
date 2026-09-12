> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadinghighlight](https://developer.apple.com/documentation/appkit/nsspringloadinghighlight)

# NSSpringLoadingHighlight (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.

## Declaration

```swift
enum NSSpringLoadingHighlight
```

<a id="overview"></a>

## Overview

The [springLoadingHighlight](nsdragginginfo/springloadinghighlight.md) method provides one of these constant values.

Do not use highlighting as a means to determine whether spring-loading has actually been activated or deactivated. The [springLoadingActivated(\_:draggingInfo:)](nsspringloadingdestination/springloadingactivated%28__dragginginfo_%29.md) method alerts your app when spring-loading activation occurs.

## Topics

### Constants

- [NSSpringLoadingHighlight.none](nsspringloadinghighlight/none.md): A constant that indicates no highlighting.
- [NSSpringLoadingHighlight.standard](nsspringloadinghighlight/standard.md): A constant that indicates standard highlighting to show the destination supports spring-loading.
- [NSSpringLoadingHighlight.emphasized](nsspringloadinghighlight/emphasized.md): A constant that indicates emphasized highlighting to show active spring-loading on the destination.

### Initializers

- [init(rawValue:)](nsspringloadinghighlight/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSDragOperation](nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSDraggingItemEnumerationOptions](nsdraggingitemenumerationoptions.md): A group of constants that specify options to use when enumerating dragging items.
- [NSDraggingFormation](nsdraggingformation.md): Constants that control the visual format of multiple dragging items.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.

# NSSpringLoadingHighlight (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.

## Declaration

```objectivec
enum NSSpringLoadingHighlight : NSInteger;
```

<a id="overview"></a>

## Overview

The [springLoadingHighlight](nsdragginginfo/springloadinghighlight.md) method provides one of these constant values.

Do not use highlighting as a means to determine whether spring-loading has actually been activated or deactivated. The [springLoadingActivated:draggingInfo:](nsspringloadingdestination/springloadingactivated%28__dragginginfo_%29.md) method alerts your app when spring-loading activation occurs.

## Topics

### Constants

- [NSSpringLoadingHighlightNone](nsspringloadinghighlight/none.md): A constant that indicates no highlighting.
- [NSSpringLoadingHighlightStandard](nsspringloadinghighlight/standard.md): A constant that indicates standard highlighting to show the destination supports spring-loading.
- [NSSpringLoadingHighlightEmphasized](nsspringloadinghighlight/emphasized.md): A constant that indicates emphasized highlighting to show active spring-loading on the destination.

## See Also

### Constants

- [NSDragOperation](nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSDraggingItemEnumerationOptions](nsdraggingitemenumerationoptions.md): A group of constants that specify options to use when enumerating dragging items.
- [NSDraggingFormation](nsdraggingformation.md): Constants that control the visual format of multiple dragging items.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.
