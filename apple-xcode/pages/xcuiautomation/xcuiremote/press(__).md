> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiremote/press(_:)](https://developer.apple.com/documentation/xcuiautomation/xcuiremote/press(_:))

# press(\_:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** tvOS · Xcode 16.3+

Sends a momentary press of a button on a physical remote control.

## Declaration

```swift
func press(_ remoteButton: XCUIRemote.Button)
```

## Parameters

- `remoteButton`: The button on the physical remote control that you want to press.

## See Also

### Pressing remote buttons

- [press(\_:forDuration:)](press%28__forduration_%29.md): Sends a press and hold of a button on a physical remote control, holding for the specified duration.
- [XCUIRemoteButton](button.md): A button on a physical remote control.

# pressButton: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** tvOS · Xcode 16.3+

Sends a momentary press of a button on a physical remote control.

## Declaration

```objectivec
- (void) pressButton:(XCUIRemoteButton) remoteButton;
```

## Parameters

- `remoteButton`: The button on the physical remote control that you want to press.

## See Also

### Pressing remote buttons

- [pressButton:forDuration:](press%28__forduration_%29.md): Sends a press and hold of a button on a physical remote control, holding for the specified duration.
- [XCUIRemoteButton](button.md): A button on a physical remote control.
