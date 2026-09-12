> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intermsandconditions/init(localizedtermsandconditionstext:privacypolicyurl:termsandconditionsurl:)](https://developer.apple.com/documentation/intents/intermsandconditions/init(localizedtermsandconditionstext:privacypolicyurl:termsandconditionsurl:))

# init(localizedTermsAndConditionsText:privacyPolicyURL:termsAndConditionsURL:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the terms and conditions object with the specified information.

## Declaration

```swift
init(localizedTermsAndConditionsText: String, privacyPolicyURL: URL?, termsAndConditionsURL: URL?)
```

## Parameters

- `localizedTermsAndConditionsText`: A localized, user-readable string that summarizes the terms and conditions of your company’s services.
- `privacyPolicyURL`: A URL that links to a more detailed web page describing your company’s privacy policy.
- `termsAndConditionsURL`: A URL that links to a more detailed web page explaining your company’s terms and conditions.

<a id="return-value"></a>

## Return Value

An initialized terms and conditions object or `nil` if the object could not be created.

# initWithLocalizedTermsAndConditionsText:privacyPolicyURL:termsAndConditionsURL: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the terms and conditions object with the specified information.

## Declaration

```objectivec
- (instancetype) initWithLocalizedTermsAndConditionsText:(NSString *) localizedTermsAndConditionsText privacyPolicyURL:(NSURL *) privacyPolicyURL termsAndConditionsURL:(NSURL *) termsAndConditionsURL;
```

## Parameters

- `localizedTermsAndConditionsText`: A localized, user-readable string that summarizes the terms and conditions of your company’s services.
- `privacyPolicyURL`: A URL that links to a more detailed web page describing your company’s privacy policy.
- `termsAndConditionsURL`: A URL that links to a more detailed web page explaining your company’s terms and conditions.

<a id="return-value"></a>

## Return Value

An initialized terms and conditions object or `nil` if the object could not be created.
