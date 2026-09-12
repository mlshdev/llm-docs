> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuilocation/location](https://developer.apple.com/documentation/xcuiautomation/xcuilocation/location)

# location (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns the object that contains the latitude, longitude, and course information this proxy simulates for the device.

## Declaration

```swift
@NSCopying var location: CLLocation { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the underlying [CLLocation](https://developer.apple.com/documentation/corelocation/cllocation) this object wraps.

## See Also

### Determining the location

- [debugDescription](debugdescription.md): A textual description of the location suitable for debugging.

# location (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns the object that contains the latitude, longitude, and course information this proxy simulates for the device.

## Declaration

```objectivec
@property (copy, readonly) CLLocation * location;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the underlying [CLLocation](https://developer.apple.com/documentation/corelocation/cllocation) this object wraps.

## See Also

### Determining the location

- [debugDescription](debugdescription.md): A textual description of the location suitable for debugging.
