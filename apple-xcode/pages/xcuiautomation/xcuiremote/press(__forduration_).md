> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiremote/press(_:forduration:)](https://developer.apple.com/documentation/xcuiautomation/xcuiremote/press(_:forduration:))

# press(\_:forDuration:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** tvOS · Xcode 16.3+

Sends a press and hold of a button on a physical remote control, holding for the specified duration.

## Declaration

```swift
func press(_ remoteButton: XCUIRemote.Button, forDuration duration: TimeInterval)
```

## Parameters

- `remoteButton`: The button on the physical remote control that you want to press and hold.
- `duration`: The duration of the button press and hold in seconds.

## See Also

### Pressing remote buttons

- [press(\_:)](press%28__%29.md): Sends a momentary press of a button on a physical remote control.
- [XCUIRemoteButton](button.md): A button on a physical remote control.

# pressButton:forDuration: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** tvOS · Xcode 16.3+

Sends a press and hold of a button on a physical remote control, holding for the specified duration.

## Declaration

```objectivec
- (void) pressButton:(XCUIRemoteButton) remoteButton forDuration:(NSTimeInterval) duration;
```

## Parameters

- `remoteButton`: The button on the physical remote control that you want to press and hold.
- `duration`: The duration of the button press and hold in seconds.

## See Also

### Pressing remote buttons

- [pressButton:](press%28__%29.md): Sends a momentary press of a button on a physical remote control.
- [XCUIRemoteButton](button.md): A button on a physical remote control.
