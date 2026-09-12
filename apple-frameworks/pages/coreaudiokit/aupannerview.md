> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/aupannerview](https://developer.apple.com/documentation/coreaudiokit/aupannerview)

# AUPannerView (Swift)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A view that provides a specialized user interface for a Cocoa-based panner audio unit.

## Declaration

```swift
class AUPannerView
```

## Topics

### Creating a Panner View

- [init(audioUnit:)](aupannerview/init%28audiounit_%29.md): Creates a panner view for an audio unit.

### Accessing the Audio Unit

- [audioUnit](aupannerview/audiounit.md): The panner audio unit associated with the generic panner view.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.

# AUPannerView (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A view that provides a specialized user interface for a Cocoa-based panner audio unit.

## Declaration

```objectivec
@interface AUPannerView : NSView
```

## Topics

### Creating a Panner View

- [AUPannerViewWithAudioUnit:](aupannerview/init%28audiounit_%29.md): Creates a panner view for an audio unit.

### Accessing the Audio Unit

- [audioUnit](aupannerview/audiounit.md): The panner audio unit associated with the generic panner view.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUViewControllerBase](auviewcontrollerbase.md): A type definition that indicates the the platform’s Audio Unit view controller base class.
- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.
