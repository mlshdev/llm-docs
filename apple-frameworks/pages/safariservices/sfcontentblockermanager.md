> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfcontentblockermanager](https://developer.apple.com/documentation/safariservices/sfcontentblockermanager)

# SFContentBlockerManager (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

A class that your app uses to interact with a content blocker extension.

## Declaration

```swift
class SFContentBlockerManager
```

<a id="overview"></a>

## Overview

Use this class to determine the state of your content blocker and reload the content-blocking rules used by Safari.

## Topics

### Acting Based on the State of Your Content Blocker

- [getStateOfContentBlocker(withIdentifier:completionHandler:)](sfcontentblockermanager/getstateofcontentblocker%28withidentifier_completionhandler_%29.md): Determines the state of your content blocker.

### Reloading Your Content-Blocking Rules

- [reloadContentBlocker(withIdentifier:completionHandler:)](sfcontentblockermanager/reloadcontentblocker%28withidentifier_completionhandler_%29.md): Tells Safari to reload the specified extension’s content-blocking rules.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Content blockers

- [Creating a content blocker](creating-a-content-blocker.md): Create a content blocker for Safari in Xcode.
- [SFContentBlockerState](sfcontentblockerstate.md): The state of a content blocker extension.

# SFContentBlockerManager (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

A class that your app uses to interact with a content blocker extension.

## Declaration

```objectivec
@interface SFContentBlockerManager : NSObject
```

<a id="overview"></a>

## Overview

Use this class to determine the state of your content blocker and reload the content-blocking rules used by Safari.

## Topics

### Acting Based on the State of Your Content Blocker

- [getStateOfContentBlockerWithIdentifier:completionHandler:](sfcontentblockermanager/getstateofcontentblocker%28withidentifier_completionhandler_%29.md): Determines the state of your content blocker.

### Reloading Your Content-Blocking Rules

- [reloadContentBlockerWithIdentifier:completionHandler:](sfcontentblockermanager/reloadcontentblocker%28withidentifier_completionhandler_%29.md): Tells Safari to reload the specified extension’s content-blocking rules.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content blockers

- [Creating a content blocker](creating-a-content-blocker.md): Create a content blocker for Safari in Xcode.
- [SFContentBlockerState](sfcontentblockerstate.md): The state of a content blocker extension.
