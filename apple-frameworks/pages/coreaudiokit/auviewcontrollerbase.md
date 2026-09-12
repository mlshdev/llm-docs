> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/auviewcontrollerbase](https://developer.apple.com/documentation/coreaudiokit/auviewcontrollerbase)

# AUViewControllerBase

**Interface language:** Objective-C

**Framework:** CoreAudioKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A type definition that indicates the the platform’s Audio Unit view controller base class.

## Declaration

```objectivec
typedef UIViewController AUViewControllerBase;
```

```objectivec
typedef NSViewController AUViewControllerBase;
```

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.
