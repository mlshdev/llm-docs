> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/textformattingconfiguration](https://developer.apple.com/documentation/uikit/uitextview/textformattingconfiguration)

# textFormattingConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 26.0+

For text views that have flag `allowsEditingTextAttributes` set, this configuration will be used for `UITextFormattingViewController` when its presentation is requested.

## Declaration

```swift
@NSCopying var textFormattingConfiguration: UITextFormattingViewController.Configuration? { get set }
```

<a id="discussion"></a>

## Discussion

It has a non-nil default value.

# textFormattingConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

For text views that have flag `allowsEditingTextAttributes` set, this configuration will be used for `UITextFormattingViewController` when its presentation is requested.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UITextFormattingViewControllerConfiguration * textFormattingConfiguration;
```

<a id="discussion"></a>

## Discussion

It has a non-nil default value.
