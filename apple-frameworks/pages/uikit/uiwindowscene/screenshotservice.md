> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/screenshotservice](https://developer.apple.com/documentation/uikit/uiwindowscene/screenshotservice)

# screenshotService (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

An object that generates a high-fidelity version of your app’s content.

## Declaration

```swift
var screenshotService: UIScreenshotService? { get }
```

<a id="Discussion"></a>

## Discussion

When you want to make your scene content available in PDF format, supply a delegate to the [UIScreenshotService](../uiscreenshotservice.md) object in this property. When the user takes a screenshot involving your scene, the screenshot service asks your delegate to provide the associated PDF data. Your delegate object must conform to the [UIScreenshotServiceDelegate](../uiscreenshotservicedelegate.md) protocol.

Provide PDF data for your app’s content whenever possible. Providing the data makes it easier and faster for the user to mark up that data later.

## See Also

### Providing a PDF version of your scene

- [UIScreenshotService](../uiscreenshotservice.md): An object that coordinates the creation of PDF screenshots of an app’s content.

# screenshotService (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · watchOS 6.0+

An object that generates a high-fidelity version of your app’s content.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIScreenshotService * screenshotService;
```

<a id="Discussion"></a>

## Discussion

When you want to make your scene content available in PDF format, supply a delegate to the [UIScreenshotService](../uiscreenshotservice.md) object in this property. When the user takes a screenshot involving your scene, the screenshot service asks your delegate to provide the associated PDF data. Your delegate object must conform to the [UIScreenshotServiceDelegate](../uiscreenshotservicedelegate.md) protocol.

Provide PDF data for your app’s content whenever possible. Providing the data makes it easier and faster for the user to mark up that data later.

## See Also

### Providing a PDF version of your scene

- [UIScreenshotService](../uiscreenshotservice.md): An object that coordinates the creation of PDF screenshots of an app’s content.
