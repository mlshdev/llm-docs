> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/augenericview](https://developer.apple.com/documentation/coreaudiokit/augenericview)

# AUGenericView (Swift)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** macOS 10.4+

A view that provides a generic user interface for a Cocoa audio unit.

## Declaration

```swift
class AUGenericView
```

## Topics

### Creating a Generic View

- [init(audioUnit:)](augenericview/init%28audiounit_%29.md): Creates a generic view for an audio unit, setting all display flags.
- [init(audioUnit:displayFlags:)](augenericview/init%28audiounit_displayflags_%29.md): Initializes a generic view for an audio unit, setting specific display flags.

### Configuring a View

- [showsExpertParameters](augenericview/showsexpertparameters.md): Indicates whether or not controls for expert audio unit parameters are displayed in the generic view.

### Accessing the Audio Unit

- [audioUnit](augenericview/audiounit.md): The audio unit associated with the generic view.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [AUCustomViewPersistentData](aucustomviewpersistentdata.md)
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

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.

# AUGenericView (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** macOS 10.4+

A view that provides a generic user interface for a Cocoa audio unit.

## Declaration

```objectivec
@interface AUGenericView : NSView
```

## Topics

### Creating a Generic View

- [initWithAudioUnit:](augenericview/init%28audiounit_%29.md): Creates a generic view for an audio unit, setting all display flags.
- [initWithAudioUnit:displayFlags:](augenericview/init%28audiounit_displayflags_%29.md): Initializes a generic view for an audio unit, setting specific display flags.

### Configuring a View

- [showsExpertParameters](augenericview/showsexpertparameters.md): Indicates whether or not controls for expert audio unit parameters are displayed in the generic view.

### Accessing the Audio Unit

- [audioUnit](augenericview/audiounit.md): The audio unit associated with the generic view.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [AUCustomViewPersistentData](aucustomviewpersistentdata.md)

## See Also

### Audio Units

- [AUViewController](auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUViewControllerBase](auviewcontrollerbase.md): A type definition that indicates the the platform’s Audio Unit view controller base class.
- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.
