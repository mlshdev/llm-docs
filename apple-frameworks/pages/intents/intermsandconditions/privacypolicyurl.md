> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intermsandconditions/privacypolicyurl](https://developer.apple.com/documentation/intents/intermsandconditions/privacypolicyurl)

# privacyPolicyURL (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The URL to your company’s privacy policy web page.

## Declaration

```swift
var privacyPolicyURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Terms and Conditions

- [localizedTermsAndConditionsText](localizedtermsandconditionstext.md): A localized, user-readable string that summarizes the terms and conditions of your company’s services.
- [termsAndConditionsURL](termsandconditionsurl.md): The URL to your company’s terms and conditions web page.

# privacyPolicyURL (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The URL to your company’s privacy policy web page.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * privacyPolicyURL;
```

```objectivec
@property (atomic, readonly, nullable) NSURL * privacyPolicyURL;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Terms and Conditions

- [localizedTermsAndConditionsText](localizedtermsandconditionstext.md): A localized, user-readable string that summarizes the terms and conditions of your company’s services.
- [termsAndConditionsURL](termsandconditionsurl.md): The URL to your company’s terms and conditions web page.
