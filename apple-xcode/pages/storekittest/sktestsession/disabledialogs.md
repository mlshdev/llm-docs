> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/disabledialogs](https://developer.apple.com/documentation/storekittest/sktestsession/disabledialogs)

# disableDialogs (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that determines whether the testing environment disables dialogs during automated testing.

## Declaration

```swift
var disableDialogs: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `false`. Set this value to `true` when you run automated tests and want to suppress interactive dialogs.

## See Also

### Configuring the test environment

- [storefront](storefront.md): The three-letter code that represents the region associated with the App Store storefront.
- [locale](locale.md): The value that determines the localization metadata the test environment uses.

# disableDialogs (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that determines whether the testing environment disables dialogs during automated testing.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL disableDialogs;
```

<a id="discussion"></a>

## Discussion

The default value is `false`. Set this value to `true` when you run automated tests and want to suppress interactive dialogs.

## See Also

### Configuring the test environment

- [storefront](storefront.md): The three-letter code that represents the region associated with the App Store storefront.
- [locale](locale.md): The value that determines the localization metadata the test environment uses.
