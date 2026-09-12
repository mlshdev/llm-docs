> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication)

# XCUIApplication (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A proxy that can launch, monitor, and terminate a test application.

## Declaration

```swift
@MainActor class XCUIApplication
```

## Mentioned In

- [Recording UI automation for testing](recording-ui-automation-for-testing.md)

<a id="overview"></a>

## Overview

Use this class to launch, monitor, and terminate your app in a UI test. Use [wait(for:timeout:)](xcuiapplication/wait%28for_timeout_%29.md) to launch your app and wait for it to reach an expected state before you check test conditions.

## Topics

### Creating an application proxy

- [init()](xcuiapplication/init%28%29.md): Creates a proxy for the application that’s configured as the Target Application in Xcode’s target settings.
- [init(bundleIdentifier:)](xcuiapplication/init%28bundleidentifier_%29.md): Creates a proxy for an application for the specified bundle identifier.
- [init(url:)](xcuiapplication/init%28url_%29-90e7z.md): Creates a proxy for the application at the specified file system URL.

### Launching the application

- [launch()](xcuiapplication/launch%28%29.md): Launches the application.
- [launchArguments](xcuiapplication/launcharguments.md): The arguments that pass to the application on launch.
- [launchEnvironment](xcuiapplication/launchenvironment.md): The environment variables that pass to the application on launch.
- [open(\_:)](xcuiapplication/open%28__%29.md): Launches the application by URL.

### Activating the application

- [activate()](xcuiapplication/activate%28%29.md): Activates the application.

### Terminating the application

- [terminate()](xcuiapplication/terminate%28%29.md): Terminates any running instance of the application.

### Determining application state

- [state](xcuiapplication/state-swift.property.md): The most recent state of the application.
- [XCUIApplication.State](xcuiapplication/state-swift.enum.md): The possible states of an application during UI testing.

### Waiting for an application state

- [wait(for:timeout:)](xcuiapplication/wait%28for_timeout_%29.md): Waits for the application to reach the specified state or timeout.

### Resetting authorization status

- [resetAuthorizationStatus(for:)](xcuiapplication/resetauthorizationstatus%28for_%29.md): Resets the authorization status for a protected resource.
- [XCUIProtectedResource](xcuiprotectedresource.md): A system resource that requires user authorization to access.

### Performing an accessibility audit

- [performAccessibilityAudit(for:\_:)](xcuiapplication/performaccessibilityaudit%28for___%29.md)
- [XCUIAccessibilityAuditType](xcuiaccessibilityaudittype.md)
- [XCUIAccessibilityAuditIssue](xcuiaccessibilityauditissue.md)

### Initializers

- [init(URL:)](xcuiapplication/init%28url_%29-6ga10.md)

## Relationships

### Inherits From

- [XCUIElement](xcuielement.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [XCUIElementAttributes](xcuielementattributes.md)
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md)
- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md)
- [XCUIScreenshotProviding](xcuiscreenshotproviding.md)

# XCUIApplication (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A proxy that can launch, monitor, and terminate a test application.

## Declaration

```objectivec
@interface XCUIApplication : XCUIElement
```

## Mentioned In

- [Recording UI automation for testing](recording-ui-automation-for-testing.md)

<a id="overview"></a>

## Overview

Use this class to launch, monitor, and terminate your app in a UI test. Use [waitForState:timeout:](xcuiapplication/wait%28for_timeout_%29.md) to launch your app and wait for it to reach an expected state before you check test conditions.

## Topics

### Creating an application proxy

- [init](xcuiapplication/init%28%29.md): Creates a proxy for the application that’s configured as the Target Application in Xcode’s target settings.
- [new](xcuiapplication/new.md): Creates a proxy for the application specified as the Target Application in Xcode’s target settings.
- [initWithBundleIdentifier:](xcuiapplication/init%28bundleidentifier_%29.md): Creates a proxy for an application for the specified bundle identifier.
- [initWithURL:](xcuiapplication/init%28url_%29-90e7z.md): Creates a proxy for the application at the specified file system URL.

### Launching the application

- [launch](xcuiapplication/launch%28%29.md): Launches the application.
- [launchArguments](xcuiapplication/launcharguments.md): The arguments that pass to the application on launch.
- [launchEnvironment](xcuiapplication/launchenvironment.md): The environment variables that pass to the application on launch.
- [openURL:](xcuiapplication/open%28__%29.md): Launches the application by URL.

### Activating the application

- [activate](xcuiapplication/activate%28%29.md): Activates the application.

### Terminating the application

- [terminate](xcuiapplication/terminate%28%29.md): Terminates any running instance of the application.

### Determining application state

- [state](xcuiapplication/state-swift.property.md): The most recent state of the application.
- [XCUIApplicationState](xcuiapplication/state-swift.enum.md): The possible states of an application during UI testing.

### Waiting for an application state

- [waitForState:timeout:](xcuiapplication/wait%28for_timeout_%29.md): Waits for the application to reach the specified state or timeout.

### Resetting authorization status

- [resetAuthorizationStatusForResource:](xcuiapplication/resetauthorizationstatus%28for_%29.md): Resets the authorization status for a protected resource.
- [XCUIProtectedResource](xcuiprotectedresource.md): A system resource that requires user authorization to access.

### Performing an accessibility audit

- [performAccessibilityAuditWithAuditTypes:issueHandler:error:](xcuiapplication/performaccessibilityauditwithaudittypes_issuehandler_error_.md)
- [XCUIAccessibilityAuditType](xcuiaccessibilityaudittype.md)
- [XCUIAccessibilityAuditIssue](xcuiaccessibilityauditissue.md)

## Relationships

### Inherits From

- [XCUIElement](xcuielement.md)
