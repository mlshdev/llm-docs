> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xcuiautomation/xcuilocation/debugdescription

# debugDescription (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A textual description of the location suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access debugging information about this object and the underlying [CLLocation](https://developer.apple.com/documentation/corelocation/cllocation) this object wraps.

## See Also

### Determining the location

- [location](location.md): Returns the object that contains the latitude, longitude, and course information this proxy simulates for the device.

# debugDescription (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A textual description of the location suitable for debugging.

## Declaration

```objectivec
@property (copy, readonly) NSString * debugDescription;
```

<a id="Discussion"></a>

## Discussion

Use this property to access debugging information about this object and the underlying [CLLocation](https://developer.apple.com/documentation/corelocation/cllocation) this object wraps.

## See Also

### Determining the location

- [location](location.md): Returns the object that contains the latitude, longitude, and course information this proxy simulates for the device.
