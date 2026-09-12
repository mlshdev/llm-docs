> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication/wait(for:timeout:)](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/wait(for:timeout:))

# wait(for:timeout:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Waits for the application to reach the specified state or timeout.

## Declaration

```swift
func wait(for state: XCUIApplication.State, timeout: TimeInterval) -> Bool
```

## Parameters

- `state`: The requested application state.
- `timeout`: The amount of time to wait, in seconds, for the application to reach the requested application state.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the app is in the specified state, or can reach the specified state before the timeout.

# waitForState:timeout: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Waits for the application to reach the specified state or timeout.

## Declaration

```objectivec
- (BOOL) waitForState:(XCUIApplicationState) state timeout:(NSTimeInterval) timeout;
```

## Parameters

- `state`: The requested application state.
- `timeout`: The amount of time to wait, in seconds, for the application to reach the requested application state.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the app is in the specified state, or can reach the specified state before the timeout.
