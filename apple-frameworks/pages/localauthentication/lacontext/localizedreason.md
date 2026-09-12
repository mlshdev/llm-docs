> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext/localizedreason](https://developer.apple.com/documentation/localauthentication/lacontext/localizedreason)

# localizedReason (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The localized explanation for authentication shown in the dialog presented to the user.

## Declaration

```swift
var localizedReason: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property is overwritten if an authentication reason is provided in [evaluatePolicy(\_:localizedReason:reply:)](evaluatepolicy%28__localizedreason_reply_%29.md).

The localized string you present to the user should provide a clear reason for why you are requesting they authenticate themselves, and what action you will be taking based on that authentication. This string should be provided in the user’s current language and should be short and clear. It should not contain the app name, because that appears elsewhere in the authentication dialog. In macOS this appears in the dialog title, and in iOS this appears in the dialog subtitle.

## See Also

### Customizing authentication prompts

- [localizedFallbackTitle](localizedfallbacktitle.md): The localized title for the fallback button in the dialog presented to the user during authentication.
- [localizedCancelTitle](localizedcanceltitle.md): The localized title for the cancel button in the dialog presented to the user during authentication.

# localizedReason (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The localized explanation for authentication shown in the dialog presented to the user.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * localizedReason;
```

<a id="Discussion"></a>

## Discussion

This property is overwritten if an authentication reason is provided in [evaluatePolicy:localizedReason:reply:](evaluatepolicy%28__localizedreason_reply_%29.md).

The localized string you present to the user should provide a clear reason for why you are requesting they authenticate themselves, and what action you will be taking based on that authentication. This string should be provided in the user’s current language and should be short and clear. It should not contain the app name, because that appears elsewhere in the authentication dialog. In macOS this appears in the dialog title, and in iOS this appears in the dialog subtitle.

## See Also

### Customizing authentication prompts

- [localizedFallbackTitle](localizedfallbacktitle.md): The localized title for the fallback button in the dialog presented to the user during authentication.
- [localizedCancelTitle](localizedcanceltitle.md): The localized title for the cancel button in the dialog presented to the user during authentication.
