> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplicationdelegate](https://developer.apple.com/documentation/scriptingbridge/sbapplicationdelegate)

# SBApplicationDelegate (Swift)

**Framework:** Scripting Bridge  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

This informal protocol defines a delegation method for handling Apple event errors that are sent from a target application to an [SBApplication](sbapplication.md) object.

## Declaration

```swift
protocol SBApplicationDelegate
```

<a id="overview"></a>

## Overview

You must set a delegate for the [SBApplication](sbapplication.md) object using the [delegate](sbapplication/delegate.md) method. If you do not set a delegate and have the delegate handle the error in some way, [SBApplication](sbapplication.md) raises an exception.

## Topics

### Handling Errors

- [eventDidFail(\_:withError:)](sbapplicationdelegate/eventdidfail%28__witherror_%29.md): Sent by an `SBApplication` object when a target application returns an error Apple event.

# SBApplicationDelegate (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

This informal protocol defines a delegation method for handling Apple event errors that are sent from a target application to an [SBApplication](sbapplication.md) object.

## Declaration

```objectivec
@protocol SBApplicationDelegate
```

<a id="overview"></a>

## Overview

You must set a delegate for the [SBApplication](sbapplication.md) object using the [delegate](sbapplication/delegate.md) method. If you do not set a delegate and have the delegate handle the error in some way, [SBApplication](sbapplication.md) raises an exception.

## Topics

### Handling Errors

- [eventDidFail:withError:](sbapplicationdelegate/eventdidfail%28__witherror_%29.md): Sent by an `SBApplication` object when a target application returns an error Apple event.
