> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/testing-your-source-editor-extension](https://developer.apple.com/documentation/xcodekit/testing-your-source-editor-extension)

# Testing Your Source Editor Extension (Swift)

**Framework:** XcodeKit  
**Kind:** Article

Launch a special instance of Xcode to test your source editor extension.

<a id="overview"></a>

## Overview

Source editor extensions run in a separate instance of Xcode to help prevent mistakes in your in-progress extension from interfering with your development environment.

<a id="Test-the-Source-Editor-Extension"></a>

### Test the Source Editor Extension

Test a source editor extension you’re developing by running your project when your extension’s scheme is selected. A dialog appears, asking you to choose an app to run.

![Screenshot showing an Xcode dialog with a list of apps to run. The selected app is Xcode.](https://developer.apple.com/images/com.apple.xcodekit/media-2902155@2x.png)

Choose Xcode, and your source editor extension is initialized inside the second instance of Xcode. You can tell the two instances of Xcode apart based on the background color of the app icons. The instance of Xcode that’s running your source editor extension has a black background rather than the lighter blue background of the first instance.

![The app icon for Xcode with a black background instead of the usual blue background.](https://developer.apple.com/images/com.apple.xcodekit/media-2902156@2x.png)

To test commands defined by your extension, open a source file in the test instance of Xcode. All of the commands defined by your extension appear in the Editor menu, nested under your extension’s name.  Selecting a command causes the [perform(with:completionHandler:)](xcsourceeditorcommand/perform%28with_completionhandler_%29.md) method defined in your extension to be called with a command invocation that specifies a command identifier corresponding to that command.

While you test your source editor extension, the original instance of Xcode continues running. Use it to debug or to view console output from the extension you’re testing.

## See Also

### Related Documentation

- [XCSourceEditorCommandInvocation](xcsourceeditorcommandinvocation.md): An object that identifies the command issued to your extension and provides the contents of the active source editor.

### Essentials

- [Creating a Source Editor Extension](creating-a-source-editor-extension.md): Add and configure a source editor extension in your Xcode project.
- [XCSourceEditorExtension](xcsourceeditorextension.md): The protocol you implement to create Xcode source editor extensions.

# Testing Your Source Editor Extension (Objective-C)

**Framework:** XcodeKit  
**Kind:** Article

Launch a special instance of Xcode to test your source editor extension.

<a id="overview"></a>

## Overview

Source editor extensions run in a separate instance of Xcode to help prevent mistakes in your in-progress extension from interfering with your development environment.

<a id="Test-the-Source-Editor-Extension"></a>

### Test the Source Editor Extension

Test a source editor extension you’re developing by running your project when your extension’s scheme is selected. A dialog appears, asking you to choose an app to run.

![Screenshot showing an Xcode dialog with a list of apps to run. The selected app is Xcode.](https://developer.apple.com/images/com.apple.xcodekit/media-2902155@2x.png)

Choose Xcode, and your source editor extension is initialized inside the second instance of Xcode. You can tell the two instances of Xcode apart based on the background color of the app icons. The instance of Xcode that’s running your source editor extension has a black background rather than the lighter blue background of the first instance.

![The app icon for Xcode with a black background instead of the usual blue background.](https://developer.apple.com/images/com.apple.xcodekit/media-2902156@2x.png)

To test commands defined by your extension, open a source file in the test instance of Xcode. All of the commands defined by your extension appear in the Editor menu, nested under your extension’s name.  Selecting a command causes the [performCommandWithInvocation:completionHandler:](xcsourceeditorcommand/perform%28with_completionhandler_%29.md) method defined in your extension to be called with a command invocation that specifies a command identifier corresponding to that command.

While you test your source editor extension, the original instance of Xcode continues running. Use it to debug or to view console output from the extension you’re testing.

## See Also

### Related Documentation

- [XCSourceEditorCommandInvocation](xcsourceeditorcommandinvocation.md): An object that identifies the command issued to your extension and provides the contents of the active source editor.

### Essentials

- [Creating a Source Editor Extension](creating-a-source-editor-extension.md): Add and configure a source editor extension in your Xcode project.
- [XCSourceEditorExtension](xcsourceeditorextension.md): The protocol you implement to create Xcode source editor extensions.
