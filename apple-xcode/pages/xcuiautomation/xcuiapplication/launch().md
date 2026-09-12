> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication/launch()](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/launch())

# launch() (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Launches the application.

## Declaration

```swift
func launch()
```

<a id="Discussion"></a>

## Discussion

This call is synchronous. When it returns, the application launches and is ready to handle user events. The system reports any failure in the launch sequence as a test failure and halts the test at this point.

If the application is already running, this call terminates the existing instance, to ensure a clean launch state for the newly launched instance.

## See Also

### Launching the application

- [launchArguments](launcharguments.md): The arguments that pass to the application on launch.
- [launchEnvironment](launchenvironment.md): The environment variables that pass to the application on launch.
- [open(\_:)](open%28__%29.md): Launches the application by URL.

# launch (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Launches the application.

## Declaration

```objectivec
- (void) launch;
```

<a id="Discussion"></a>

## Discussion

This call is synchronous. When it returns, the application launches and is ready to handle user events. The system reports any failure in the launch sequence as a test failure and halts the test at this point.

If the application is already running, this call terminates the existing instance, to ensure a clean launch state for the newly launched instance.

## See Also

### Launching the application

- [launchArguments](launcharguments.md): The arguments that pass to the application on launch.
- [launchEnvironment](launchenvironment.md): The environment variables that pass to the application on launch.
- [openURL:](open%28__%29.md): Launches the application by URL.
