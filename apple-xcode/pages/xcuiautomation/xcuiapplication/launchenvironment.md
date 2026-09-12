> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication/launchenvironment](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/launchenvironment)

# launchEnvironment (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The environment variables that pass to the application on launch.

## Declaration

```swift
var launchEnvironment: [String : String] { get set }
```

<a id="Discussion"></a>

## Discussion

If not modified, these are the environment variables that Xcode passes to the application on launch. You can change, add to, or remove the environment variables. Unlike with [Process](https://developer.apple.com/documentation/foundation/process), you can modify the environment variables after the application launches. Such changes don’t affect the current launch session, but do take effect the next time the application launches.

## See Also

### Launching the application

- [launch()](launch%28%29.md): Launches the application.
- [launchArguments](launcharguments.md): The arguments that pass to the application on launch.
- [open(\_:)](open%28__%29.md): Launches the application by URL.

# launchEnvironment (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The environment variables that pass to the application on launch.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,NSString *> * launchEnvironment;
```

<a id="Discussion"></a>

## Discussion

If not modified, these are the environment variables that Xcode passes to the application on launch. You can change, add to, or remove the environment variables. Unlike with [NSTask](https://developer.apple.com/documentation/foundation/process), you can modify the environment variables after the application launches. Such changes don’t affect the current launch session, but do take effect the next time the application launches.

## See Also

### Launching the application

- [launch](launch%28%29.md): Launches the application.
- [launchArguments](launcharguments.md): The arguments that pass to the application on launch.
- [openURL:](open%28__%29.md): Launches the application by URL.
