> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputmode/activeinputmodes](https://developer.apple.com/documentation/uikit/uitextinputmode/activeinputmodes)

# activeInputModes (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The active text-input modes.

## Declaration

```swift
class var activeInputModes: [UITextInputMode] { get }
```

<a id="Discussion"></a>

## Discussion

Each element in the array is an instance of [UITextInputMode](../uitextinputmode.md). Returns an empty array if no such instances have been set by the text input system.

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

# activeInputModes (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The active text-input modes.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSArray<UITextInputMode *> * activeInputModes;
```

<a id="Discussion"></a>

## Discussion

Each element in the array is an instance of [UITextInputMode](../uitextinputmode.md). Returns an empty array if no such instances have been set by the text input system.

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Related Documentation

- [currentInputMode](currentinputmode.md): Deprecated. Returns an instance representing the current text-input mode.

### Getting the current and active text-input modes

- [currentInputMode](currentinputmode.md): Deprecated. Returns an instance representing the current text-input mode.
