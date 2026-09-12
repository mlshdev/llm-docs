> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/aucustomviewpersistentdata](https://developer.apple.com/documentation/coreaudiokit/aucustomviewpersistentdata)

# AUCustomViewPersistentData (Swift)

**Framework:** CoreAudioKit  
**Kind:** Protocol  
**Availability:** macOS 10.6+

A protocol that defines the methods an Audio Unit host calls to manage view data.

## Declaration

```swift
protocol AUCustomViewPersistentData
```

## Topics

### Accessing View State

- [customViewPersistentData](aucustomviewpersistentdata/customviewpersistentdata.md): Called by the host application to obtain view state data from a custom Cocoa view.

## Relationships

### Conforming Types

- [AUGenericView](augenericview.md)

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.

# AUCustomViewPersistentData (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Protocol  
**Availability:** macOS 10.6+

A protocol that defines the methods an Audio Unit host calls to manage view data.

## Declaration

```objectivec
@protocol AUCustomViewPersistentData
```

## Topics

### Accessing View State

- [customViewPersistentData](aucustomviewpersistentdata/customviewpersistentdata.md): Called by the host application to obtain view state data from a custom Cocoa view.

## Relationships

### Conforming Types

- [AUGenericView](augenericview.md)

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUViewControllerBase](auviewcontrollerbase.md): A type definition that indicates the the platform’s Audio Unit view controller base class.
- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
