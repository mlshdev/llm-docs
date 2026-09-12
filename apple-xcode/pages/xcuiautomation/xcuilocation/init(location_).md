> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuilocation/init(location:)](https://developer.apple.com/documentation/xcuiautomation/xcuilocation/init(location:))

# init(location:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Initializes a proxy that simulates latitude, longitude, and course information based on the location object you provide.

## Declaration

```swift
init(location: CLLocation)
```

## Parameters

- `location`: The [CLLocation](https://developer.apple.com/documentation/corelocation/cllocation) object that contains the latitude, longitude, and course information for this proxy.

# initWithLocation: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Initializes a proxy that simulates latitude, longitude, and course information based on the location object you provide.

## Declaration

```objectivec
- (instancetype) initWithLocation:(CLLocation *) location;
```

## Parameters

- `location`: The [CLLocation](https://developer.apple.com/documentation/corelocation/cllocation) object that contains the latitude, longitude, and course information for this proxy.
