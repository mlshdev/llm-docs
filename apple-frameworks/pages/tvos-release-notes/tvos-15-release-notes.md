> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvos-release-notes/tvos-15-release-notes](https://developer.apple.com/documentation/tvos-release-notes/tvos-15-release-notes)

# tvOS 15 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="Overview"></a>

## Overview

The tvOS 15 SDK provides support to develop tvOS apps for Apple TV devices running tvOS 15. The SDK comes bundled with Xcode 13, available from the Mac App Store. For information on the compatibility requirements for Xcode 13, see [Xcode 13 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-13-release-notes).

<a id="App-Store"></a>

### App Store

<a id="New-Features"></a>

#### New Features

- The `request(with:)` type method on [Product](../storekit/product.md) is now renamed to [products(for:)](../storekit/product/products%28for_%29.md). (79410910)

- The [Transaction](../storekit/transaction.md) `listener` type properties on [Product.SubscriptionInfo.Status](../storekit/product/subscriptioninfo/status-swift.struct.md) and [Storefront](../storekit/storefront.md) are now [updates](../storekit/transaction/updates.md) and [updates](../storekit/storefront/updates.md), respectively. The nested [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) conforming structures are now [Transaction.Transactions](../storekit/transaction/transactions.md), [Product.SubscriptionInfo.Status.Statuses](../storekit/product/subscriptioninfo/status-swift.struct/statuses.md), and [Storefront.Storefronts](../storekit/storefront/storefronts.md). Both `TransactionSequence` and `TransactionListener` are now [Transaction.Transactions](../storekit/transaction/transactions.md). (79034347)

- `StoreKitError.userDidNotAuthenticate` is no longer available; use [StoreKitError.userCancelled](../storekit/storekiterror/usercancelled.md) instead. (78270199)

- You can now access [Product](../storekit/product.md) raw JSON data for custom decoding:

  - Multiple [Product.PurchaseOption](../storekit/product/purchaseoption.md) methods are now allowed. `.custom(_:)` is replaced with several new type methods, namely [custom(key:value:)](../storekit/product/purchaseoption/custom%28key_value_%29-80cvh.md), [custom(key:value:)](../storekit/product/purchaseoption/custom%28key_value_%29-3g3nc.md), [custom(key:value:)](../storekit/product/purchaseoption/custom%28key_value_%29-8tjim.md), and [custom(key:value:)](../storekit/product/purchaseoption/custom%28key_value_%29-7rju9.md).
  - Subscript operators on [Product](../storekit/product.md), [Transaction](../storekit/transaction.md), and [renewalInfo](../storekit/product/subscriptioninfo/status-swift.struct/renewalinfo.md) are removed, along with the nested `Key` enumerations.
  - `BackingValue` and extensions adding initializers from `BackingValue` are removed. (79101606)

- A new type property [unfinished](../storekit/transaction/unfinished.md) is now available on [Transaction](../storekit/transaction.md) that returns signed information for any transactions where the app still needs to deliver content to the user. (79620896)

- A new [onStorefrontChange(shouldContinuePurchase:)](../storekit/product/purchaseoption/onstorefrontchange%28shouldcontinuepurchase_%29.md) is available in StoreKit 2. You can use this purchase option to determine whether the transaction continues if the App Store storefront changes during a transaction. The default is `true` if this option isn’t added. (70757789)

- `VerificationResult.unverified(SignedType)` is now `VerificationResult.unverified(SignedType, VerificationError)` to provide a reason for unverified signed values. [jsonRepresentation](../storekit/transaction/jsonrepresentation.md) is available on [Transaction](../storekit/transaction.md) and [jsonRepresentation](../storekit/product/subscriptioninfo/renewalinfo/jsonrepresentation.md) is available on [renewalInfo](../storekit/product/subscriptioninfo/status-swift.struct/renewalinfo.md); both properties provide the payload JSON as `Data`. [payloadValue](../storekit/verificationresult/payloadvalue.md) and [unsafePayloadValue](../storekit/verificationresult/unsafepayloadvalue.md) properties are available on [VerificationResult](../storekit/verificationresult.md) as a convenience to access the signed value. (80701792)

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed an issue where purchases performed in the Sandbox environment returned `VerificationResult.unverified(_:_:)`. (71949674)

<a id="Known-Issues"></a>

#### Known Issues

- The [unfinished](../storekit/transaction/unfinished.md) property might return `VerificationResult<Transaction>` for transactions that have already finished. (81346114)

<a id="Logging"></a>

### Logging

<a id="Deprecations"></a>

#### Deprecations

- Support for cleartext HTTP URL schemes for Proxy Automatic Configuration (PAC) is now deprecated. Use only HTTPS URL schemes for PAC. This affects all PAC configurations, including, but not limited to, configurations set via Settings, System Preferences, profiles, and `URLSession` APIs such as [connectionProxyDictionary](../foundation/urlsessionconfiguration/connectionproxydictionary.md) and [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](../cfnetwork/cfnetworkexecuteproxyautoconfigurationurl%28________%29.md). If you configure a cleartext HTTP PAC URL, the system may upgrade it to HTTPS during PAC file loads. Web Proxy Auto-Discovery (WPAD) Protocol via DNS isn’t affected. Dynamic Host Configuration Protocol (DHCP) Option 252 WPAD may attempt to upgrade cleartext HTTP URLs to HTTPS during PAC file loads. (61981845)

<a id="MapKit"></a>

### MapKit

<a id="Deprecations"></a>

#### Deprecations

- [MKPinAnnotationView](../mapkit/mkpinannotationview.md) and [MapPin](../mapkit/mappin.md) are deprecated in this beta. (78536295)

<a id="Networking"></a>

### Networking

<a id="New-Features"></a>

#### New Features

- The default `Accept-Language` header that [URLSession](../foundation/urlsession.md) sends has an updated format and corrected values for multiple locales. In addition to the preferred language, the header also includes the current system language as a fallback if it differs from the preferred language. This behavior affects apps that link against macOS 12, iOS 15, tvOS 15, and watchOS 8 SDKs. (38772422)

<a id="SharePlay"></a>

### SharePlay

<a id="Deprecations"></a>

#### Deprecations

- SharePlay development in beta 7 and upcoming beta releases requires the installation of an updated [SharePlay Development Profile](https://developer.apple.com/download/). This profile enables successful creation and reception of GroupSessions via the Group Activities API in iOS 15, iPadOS 15 and tvOS 15 beta 7, as well as macOS Monterey beta 6. (81816137)

<a id="StoreKit"></a>

### StoreKit

<a id="New-Features"></a>

#### New Features

- [StoreKit](../storekit.md) 2 introduces a modern Swift-based API that takes advantage of new language features like Swift concurrency. Use this API to load product information, display in-app purchases in your store, allow customers to make purchases, manage access to content and subscriptions, and receive transaction information signed by the App Store in JSON Web Signature (JWS) format. (66587964)

<a id="SwiftUI"></a>

### SwiftUI

<a id="New-Features"></a>

#### New Features

- [LocalizedStringKey](https://developer.apple.com/documentation/swiftui/localizedstringkey) can now contain Markdown syntax. The system parses Markdown strings when you create a [Text](https://developer.apple.com/documentation/swiftui/text) view from a `LocalizedStringKey`, including `Text` views created with a string literal. The system styles `Text` according to Markdown constructs. (74515884)

- You can create [Text](https://developer.apple.com/documentation/swiftui/text) from an [AttributedString](../foundation/attributedstring.md) structure. `Text` respects the styles you provide through attributes within the SwiftUI attribute scope; these styles take precedence over styles you provide through view modifiers. (74841755)

- Specific kinds of animations now execute off the main thread, so there are new thread-safety requirements. (70524799) Ensure the following functions and types are thread-safe:

  - All methods and accessors of types conforming to these protocols: [AlignmentID](https://developer.apple.com/documentation/swiftui/alignmentid), [Animatable](https://developer.apple.com/documentation/swiftui/animatable), [EnvironmentKey](https://developer.apple.com/documentation/swiftui/environmentkey), [EnvironmentValues](https://developer.apple.com/documentation/swiftui/environmentvalues), [Equatable](https://developer.apple.com/documentation/swift/equatable), [GeometryEffect](https://developer.apple.com/documentation/swiftui/geometryeffect), [Hashable](https://developer.apple.com/documentation/swift/hashable), [Identifiable](https://developer.apple.com/documentation/swift/identifiable), [PreferenceKey](https://developer.apple.com/documentation/swiftui/preferencekey), [Shape](https://developer.apple.com/documentation/swiftui/shape), [VectorArithmetic](https://developer.apple.com/documentation/swiftui/vectorarithmetic).
  - Any closures you pass to the following types and functions, but only if the views that created them don’t have references to [ObservableObject](../combine/observableobject.md) types: [ForEach](https://developer.apple.com/documentation/swiftui/foreach), [GeometryReader](https://developer.apple.com/documentation/swiftui/geometryreader), `backgroundPreferenceValue(_:_:)`, `overlayPreferenceValue(_:_:)`, `transformPreference(_:_:)`, `anchorPreference(key:value:transform:)`, `transformAnchorPreference(key:value:transform:)`, `transformEnvironment(_:transform:)`, `transaction(_:)`.

- A [TextField](https://developer.apple.com/documentation/swiftui/textfield) provided an [Formatter](../foundation/formatter.md) now updates its binding as the user types. `NSFormatter` formats the text of the field when the user submits the field, or when focus moves away from the field. (67899823)

- You can now initialize [Text](https://developer.apple.com/documentation/swiftui/text) with a [FormatStyle](../foundation/formatstyle.md). (72159423)

- While searching, if you tap a suggestion that uses the `searchCompletion(_:)` modifier, the suggestion list now disappears rather than displaying the single suggestion you selected. (76965399)

- Added `buttonBorderShape`, which can be used to control the shape of bordered buttons. (79456465)

- New [AttributedString](../foundation/attributedstring.md) attributes [underlineStyle](../foundation/attributescopes/swiftuiattributes/underlinestyle.md) and [strikethroughStyle](../foundation/attributescopes/swiftuiattributes/strikethroughstyle.md) were added to [AttributeScopes.SwiftUIAttributes](../foundation/attributescopes/swiftuiattributes.md). (78437803)

- Types conforming to the [Animatable](https://developer.apple.com/documentation/swiftui/animatable) protocol and also conforming to either the [View](https://developer.apple.com/documentation/swiftui/view) or [ViewModifier](https://developer.apple.com/documentation/swiftui/viewmodifier) protocols now apply animations when their values change. Consequently, the [AnimatableModifier](https://developer.apple.com/documentation/swiftui/animatablemodifier) protocol is soft-deprecated. Use `Animatable` directly when targeting the latest OS versions; for example, use `struct CustomModifier: ViewModifer, Animatable` rather than `struct CustomModifier: AnimatableModifier`. (76971100)

- The [contentShape(\_:eoFill:)](https://developer.apple.com/documentation/swiftui/view/contentshape%28_:eofill:%29) modifier now allows fine-grained control over different kinds of shapes. For drag previews, hover effects, and context menus, the matching `ContentShapeKinds` is required to affect the shape of previews when linked on iOS 15.0 or newer. The default behavior is to set the `interaction` kind. (60792377)

The [openURL](https://developer.apple.com/documentation/swiftui/environmentvalues/openurl) environment value can now be set and used to customize URL handling in the view hierarchy, including URL handling in [Link](https://developer.apple.com/documentation/swiftui/link) views and links embedded in [Text](https://developer.apple.com/documentation/swiftui/text) views. (78551237)

- [Task](https://developer.apple.com/documentation/swift/task) allows you to pass the priority to be used when spawning a new `Task`. (80599258)

- [Text](https://developer.apple.com/documentation/swiftui/text) views that contain excessive line height characters now have a larger default size to avoid clipping or overlapping of oversized characters. (80665315)

<a id="Deprecations"></a>

#### Deprecations

- `controlProminence` is deprecated. Use the new `.borderedProminent` [ButtonStyle](https://developer.apple.com/documentation/swiftui/buttonstyle) instead. (78908460)

<a id="Xcode"></a>

### Xcode

<a id="Known-Issues"></a>

#### Known Issues

- [MusicKit](../musickit.md) functionality, such as loading content with music requests, doesn’t work in simulated devices. (78559381)

  **Workaround**: Test your app’s `MusicKit` functionality on a physical device.

## See Also

### tvOS 15

- [tvOS 15.6 Release Notes](tvos-15_6-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.5 Release Notes](tvos-15_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.4 Release Notes](tvos-15_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.3 Release Notes](tvos-15_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.2 Release Notes](tvos-15_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 15.1 Release Notes](tvos-15_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
