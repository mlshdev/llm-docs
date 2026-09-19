> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/hideoverlaytemplate(animated:completion:)

# hideOverlayTemplate(animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Dismiss the current overlay template, optionally animating the dismissal.

## Declaration

```swift
func hideOverlayTemplate(animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func hideOverlayTemplate(animated: Bool) async throws -> Bool
```

<a id="discussion"></a>

## Discussion

> **Note**

> If there is no current overlay template, this method will have no effect.

The completion block will be called after the template has been dismissed. If the template was dismissed successfully, the boolean parameter will be YES. Otherwise, the boolean parameter will be NO and an @c NSError will be provided describing the failure.

# hideOverlayTemplateAnimated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Dismiss the current overlay template, optionally animating the dismissal.

## Declaration

```objectivec
- (void) hideOverlayTemplateAnimated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

> **Note**

> If there is no current overlay template, this method will have no effect.

The completion block will be called after the template has been dismissed. If the template was dismissed successfully, the boolean parameter will be YES. Otherwise, the boolean parameter will be NO and an @c NSError will be provided describing the failure.
