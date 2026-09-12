> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/locale](https://developer.apple.com/documentation/storekittest/sktestsession/locale)

# locale (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The value that determines the localization metadata the test environment uses.

## Declaration

```swift
var locale: Locale { get set }
```

<a id="discussion"></a>

## Discussion

This value determines the locale the test environment uses when it fetches localized metadata for [SKProductsRequest](https://developer.apple.com/documentation/storekit/skproductsrequest). You provide localized metadata in your StoreKit configuration file.

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState()](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Configuring the test environment

- [storefront](storefront.md): The three-letter code that represents the region associated with the App Store storefront.
- [disableDialogs](disabledialogs.md): A Boolean value that determines whether the testing environment disables dialogs during automated testing.

# locale (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The value that determines the localization metadata the test environment uses.

## Declaration

```objectivec
@property (nonatomic, copy) NSLocale * locale;
```

<a id="discussion"></a>

## Discussion

This value determines the locale the test environment uses when it fetches localized metadata for [SKProductsRequest](https://developer.apple.com/documentation/storekit/skproductsrequest). You provide localized metadata in your StoreKit configuration file.

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Configuring the test environment

- [storefront](storefront.md): The three-letter code that represents the region associated with the App Store storefront.
- [disableDialogs](disabledialogs.md): A Boolean value that determines whether the testing environment disables dialogs during automated testing.
