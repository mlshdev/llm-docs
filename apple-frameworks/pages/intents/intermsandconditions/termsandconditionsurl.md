> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intermsandconditions/termsandconditionsurl](https://developer.apple.com/documentation/intents/intermsandconditions/termsandconditionsurl)

# termsAndConditionsURL (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The URL to your company’s terms and conditions web page.

## Declaration

```swift
var termsAndConditionsURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Terms and Conditions

- [localizedTermsAndConditionsText](localizedtermsandconditionstext.md): A localized, user-readable string that summarizes the terms and conditions of your company’s services.
- [privacyPolicyURL](privacypolicyurl.md): The URL to your company’s privacy policy web page.

# termsAndConditionsURL (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The URL to your company’s terms and conditions web page.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * termsAndConditionsURL;
```

```objectivec
@property (atomic, readonly, nullable) NSURL * termsAndConditionsURL;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Terms and Conditions

- [localizedTermsAndConditionsText](localizedtermsandconditionstext.md): A localized, user-readable string that summarizes the terms and conditions of your company’s services.
- [privacyPolicyURL](privacypolicyurl.md): The URL to your company’s privacy policy web page.
