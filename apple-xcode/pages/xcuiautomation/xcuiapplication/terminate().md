> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/terminate()

# terminate() (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Terminates any running instance of the application.

## Declaration

```swift
func terminate()
```

<a id="Discussion"></a>

## Discussion

If the application has an existing debug session via Xcode, the debugger sends a command to terminate the application. Otherwise, an appropriate platform-specific mechanism terminates the process.

# terminate (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Terminates any running instance of the application.

## Declaration

```objectivec
- (void) terminate;
```

<a id="Discussion"></a>

## Discussion

If the application has an existing debug session via Xcode, the debugger sends a command to terminate the application. Otherwise, an appropriate platform-specific mechanism terminates the process.
