> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiscreen/main](https://developer.apple.com/documentation/xcuiautomation/xcuiscreen/main)

# main (Swift)

**Framework:** XCUIAutomation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The current device’s main screen.

## Declaration

```swift
class var main: XCUIScreen { get }
```

<a id="Discussion"></a>

## Discussion

On macOS, [main](main.md) represents the screen that owns the menu bar. On iOS and tvOS, [main](main.md) represents the primary screen of the device.

## See Also

### Device screens

- [screens](screens.md): The current device’s active screens.

# mainScreen (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The current device’s main screen.

## Declaration

```objectivec
@property (class, strong, readonly) XCUIScreen * mainScreen;
```

<a id="Discussion"></a>

## Discussion

On macOS, [mainScreen](main.md) represents the screen that owns the menu bar. On iOS and tvOS, [mainScreen](main.md) represents the primary screen of the device.

## See Also

### Device screens

- [screens](screens.md): The current device’s active screens.
