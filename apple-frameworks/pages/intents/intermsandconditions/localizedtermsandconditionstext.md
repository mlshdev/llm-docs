> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/intermsandconditions/localizedtermsandconditionstext

# localizedTermsAndConditionsText (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A localized, user-readable string that summarizes the terms and conditions of your company’s services.

## Declaration

```swift
var localizedTermsAndConditionsText: String { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Terms and Conditions

- [privacyPolicyURL](privacypolicyurl.md): The URL to your company’s privacy policy web page.
- [termsAndConditionsURL](termsandconditionsurl.md): The URL to your company’s terms and conditions web page.

# localizedTermsAndConditionsText (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A localized, user-readable string that summarizes the terms and conditions of your company’s services.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * localizedTermsAndConditionsText;
```

```objectivec
@property (atomic, readonly) NSString * localizedTermsAndConditionsText;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Terms and Conditions

- [privacyPolicyURL](privacypolicyurl.md): The URL to your company’s privacy policy web page.
- [termsAndConditionsURL](termsandconditionsurl.md): The URL to your company’s terms and conditions web page.
