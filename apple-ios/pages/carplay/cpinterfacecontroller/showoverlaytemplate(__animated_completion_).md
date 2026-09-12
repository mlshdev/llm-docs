> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/showoverlaytemplate(_:animated:completion:)](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/showoverlaytemplate(_:animated:completion:))

# showOverlayTemplate(\_:animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Show a template as an overlay over the current template hierarchy. Only one overlay template may be shown at a time.

## Declaration

```swift
func showOverlayTemplate(_ templateToShow: CPTemplate, animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func showOverlayTemplate(_ templateToShow: CPTemplate, animated: Bool) async throws -> Bool
```

<a id="discussion"></a>

## Discussion

> **Note**

> Supported template types: @c CPVoiceControlTemplate

The completion block will be called after the template has been shown. If the template was shown successfully, the boolean parameter will be YES. Otherwise, the boolean parameter will be NO and an @c NSError will be provided describing the failure.

> **Note**

> If the template is not successfully shown AND no completion block is specified, an exception will be thrown.

# showOverlayTemplate:animated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Show a template as an overlay over the current template hierarchy. Only one overlay template may be shown at a time.

## Declaration

```objectivec
- (void) showOverlayTemplate:(CPTemplate *) templateToShow animated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

> **Note**

> Supported template types: @c CPVoiceControlTemplate

The completion block will be called after the template has been shown. If the template was shown successfully, the boolean parameter will be YES. Otherwise, the boolean parameter will be NO and an @c NSError will be provided describing the failure.

> **Note**

> If the template is not successfully shown AND no completion block is specified, an exception will be thrown.
