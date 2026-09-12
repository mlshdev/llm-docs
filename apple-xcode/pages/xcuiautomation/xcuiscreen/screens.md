> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiscreen/screens](https://developer.apple.com/documentation/xcuiautomation/xcuiscreen/screens)

# screens (Swift)

**Framework:** XCUIAutomation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The current device’s active screens.

## Declaration

```swift
class var screens: [XCUIScreen] { get }
```

<a id="Discussion"></a>

## Discussion

The first screen in the array represents the main screen.

## See Also

### Device screens

- [main](main.md): The current device’s main screen.

# screens (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The current device’s active screens.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<XCUIScreen *> * screens;
```

<a id="Discussion"></a>

## Discussion

The first screen in the array represents the main screen.

## See Also

### Device screens

- [mainScreen](main.md): The current device’s main screen.
