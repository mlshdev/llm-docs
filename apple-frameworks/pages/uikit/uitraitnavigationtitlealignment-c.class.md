> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitraitnavigationtitlealignment-c.class

# UITraitNavigationTitleAlignment

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

A trait that reports the alignment the navigation bar resolved for its title.

## Declaration

```objectivec
@interface UITraitNavigationTitleAlignment : NSObject
```

<a id="overview"></a>

## Overview

Read this trait from a custom navigation bar title view to discover the alignment the system chose, so the view can lay out its content to match. When the system has resolved an alignment the trait reports it, Leading or Center; otherwise it is Automatic.

Use the trait to align content within the size your view already reported, not to decide that size. Overriding this trait’s value will not change the actual alignment in the navigation bar. That is controlled by `UINavigationItem.titleAlignment`.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UINSIntegerTraitDefinition](uinsintegertraitdefinition.md)
