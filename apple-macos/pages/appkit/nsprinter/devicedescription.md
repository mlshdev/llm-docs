> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsprinter/devicedescription

# deviceDescription (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A dictionary of keys and values that describe the device.

## Declaration

```swift
var deviceDescription: [NSDeviceDescriptionKey : Any] { get }
```

<a id="return-value"></a>

## Return Value

A dictionary of the device properties. See `NSGraphics.h` for possible keys. The only key guaranteed to exist is `NSDeviceIsPrinter`.

# deviceDescription (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A dictionary of keys and values that describe the device.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * deviceDescription;
```

<a id="return-value"></a>

## Return Value

A dictionary of the device properties. See `NSGraphics.h` for possible keys. The only key guaranteed to exist is `NSDeviceIsPrinter`.
