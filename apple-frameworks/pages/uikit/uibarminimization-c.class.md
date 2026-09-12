> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarminimization-c.class](https://developer.apple.com/documentation/uikit/uibarminimization-c.class)

# UIBarMinimization

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

A configuration that controls how a navigation bar minimizes in response to scrolling.

## Declaration

```objectivec
@interface UIBarMinimization : NSObject
```

<a id="overview"></a>

## Overview

Access this configuration through `UINavigationItem/navigationBarMinimization` and set its properties to customize minimization.

## Topics

### Instance Properties

- [minimizationBehavior](uibarminimization-c.class/minimizationbehavior.md): The minimization behavior.
- [restorationBehavior](uibarminimization-c.class/restorationbehavior.md): The restoration behavior.
- [safeAreaAdjustment](uibarminimization-c.class/safeareaadjustment.md): The safe area adjustment during minimization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
