> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/launchoptions-swift.class](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/launchoptions-swift.class)

# UIDocumentViewController.LaunchOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Options for customizing the document launch view.

## Declaration

```swift
@MainActor class LaunchOptions
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md)

<a id="overview"></a>

## Overview

When your app launches, the document view controller displays a view that contains a title and buttons to create new documents. It also displays the document browser as a sheet over the title view. For more information, see [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md).

## Topics

### Configuring the appearance

- [title](launchoptions-swift.class/title.md): The title that appears in the title view.
- [background](launchoptions-swift.class/background.md): A configuration that describes the launch scene’s background.
- [documentTargetView](launchoptions-swift.class/documenttargetview.md): The document target view.
- [browserViewController](launchoptions-swift.class/browserviewcontroller.md): The document browser view controller.

### Adding accessory views

- [backgroundAccessoryView](launchoptions-swift.class/backgroundaccessoryview.md): A view that appears behind the title view in the launch scene.
- [foregroundAccessoryView](launchoptions-swift.class/foregroundaccessoryview.md): A view that appears in front of the title view in the launch scene.

### Adding actions

- [primaryAction](launchoptions-swift.class/primaryaction.md): The launch scene’s primary action.
- [secondaryAction](launchoptions-swift.class/secondaryaction.md): The launch scene’s secondary action.

### Creating documents

- [createDocumentAction(withIntent:)](launchoptions-swift.class/createdocumentaction%28withintent_%29.md): Creates an action that uses the specified intent.

### Instance Properties

- [subtitle](launchoptions-swift.class/subtitle.md): The subtitle of the launch view. Default is `nil`. If `nil`, no subtitle will be displayed.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Customizing the launch experience

- [launchOptions](launchoptions-swift.property.md): Options that customize a document-based app’s launch view.

# UIDocumentViewControllerLaunchOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Options for customizing the document launch view.

## Declaration

```objectivec
@interface UIDocumentViewControllerLaunchOptions : NSObject
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md)

<a id="overview"></a>

## Overview

When your app launches, the document view controller displays a view that contains a title and buttons to create new documents. It also displays the document browser as a sheet over the title view. For more information, see [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md).

## Topics

### Configuring the appearance

- [title](launchoptions-swift.class/title.md): The title that appears in the title view.
- [background](../uidocumentviewcontrollerlaunchoptions/background.md): A configuration that describes the launch scene’s background.
- [documentTargetView](launchoptions-swift.class/documenttargetview.md): The document target view.
- [browserViewController](launchoptions-swift.class/browserviewcontroller.md): The document browser view controller.

### Adding accessory views

- [backgroundAccessoryView](launchoptions-swift.class/backgroundaccessoryview.md): A view that appears behind the title view in the launch scene.
- [foregroundAccessoryView](launchoptions-swift.class/foregroundaccessoryview.md): A view that appears in front of the title view in the launch scene.

### Adding actions

- [primaryAction](launchoptions-swift.class/primaryaction.md): The launch scene’s primary action.
- [secondaryAction](launchoptions-swift.class/secondaryaction.md): The launch scene’s secondary action.

### Creating documents

- [createDocumentActionWithIntent:](launchoptions-swift.class/createdocumentaction%28withintent_%29.md): Creates an action that uses the specified intent.

### Instance Properties

- [subtitle](launchoptions-swift.class/subtitle.md): The subtitle of the launch view. Default is `nil`. If `nil`, no subtitle will be displayed.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Customizing the launch experience

- [launchOptions](launchoptions-swift.property.md): Options that customize a document-based app’s launch view.
