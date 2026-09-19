> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymanager/shared

# shared (Swift)

**Framework:** Accessory Access  
**Kind:** Type Property  
**Availability:** macOS 27.0+

Returns the shared USB accessory manager object for this process.

## Declaration

```swift
class var shared: AAUSBAccessoryManager { get }
```

<a id="Discussion"></a>

## Discussion

Don’t instantiate a `AAUSBAccessoryManager` directly, instead obtain the manager through this class property.

# sharedManager (Objective-C)

**Framework:** Accessory Access  
**Kind:** Type Property  
**Availability:** macOS 27.0+

Returns the shared USB accessory manager object for this process.

## Declaration

```objectivec
@property (class, strong, readonly) AAUSBAccessoryManager * sharedManager;
```

<a id="Discussion"></a>

## Discussion

Don’t instantiate a `AAUSBAccessoryManager` directly, instead obtain the manager through this class property.
