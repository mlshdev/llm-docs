> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/storefront](https://developer.apple.com/documentation/storekittest/sktestsession/storefront)

# storefront (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The three-letter code that represents the region associated with the App Store storefront.

## Declaration

```swift
var storefront: String { get set }
```

<a id="discussion"></a>

## Discussion

This property uses the ISO 3166-1 alpha-3 region code representation. The default value is `USA`.

In the testing environment, this variable determines the value of the [storefront](https://developer.apple.com/documentation/storekit/skpaymentqueue/storefront) variable on your app’s payment queue, and affects the currency type displayed in the payment sheet.

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState()](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Configuring the test environment

- [locale](locale.md): The value that determines the localization metadata the test environment uses.
- [disableDialogs](disabledialogs.md): A Boolean value that determines whether the testing environment disables dialogs during automated testing.

# storefront (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The three-letter code that represents the region associated with the App Store storefront.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * storefront;
```

<a id="discussion"></a>

## Discussion

This property uses the ISO 3166-1 alpha-3 region code representation. The default value is `USA`.

In the testing environment, this variable determines the value of the [storefront](https://developer.apple.com/documentation/storekit/skpaymentqueue/storefront) variable on your app’s payment queue, and affects the currency type displayed in the payment sheet.

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Configuring the test environment

- [locale](locale.md): The value that determines the localization metadata the test environment uses.
- [disableDialogs](disabledialogs.md): A Boolean value that determines whether the testing environment disables dialogs during automated testing.
