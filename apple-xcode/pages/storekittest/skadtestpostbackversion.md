> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostbackversion](https://developer.apple.com/documentation/storekittest/skadtestpostbackversion)

# SKAdTestPostbackVersion (Swift)

**Framework:** StoreKit Test  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A constant that indicates the postback version.

## Declaration

```swift
struct SKAdTestPostbackVersion
```

<a id="overview"></a>

## Overview

This postback version number corresponds to a version of SKAdNetwork. All versions of [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) have specific instructions for signing ads and validating postbacks. The testing environment supports testing the versions indicated by the constants listed in the Getting SKAdNetwork Versions section below.

For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).

## Topics

### Getting SKAdNetwork Versions

- [version4_0](skadtestpostbackversion/version4_0.md): A constant that represents SKAdNetwork version 4.0.
- [version3_0](skadtestpostbackversion/version3_0.md): A constant that represents SKAdNetwork version 3.0.
- [version2_2](skadtestpostbackversion/version2_2.md): A constant that represents SKAdNetwork version 2.2.
- [version2_1](skadtestpostbackversion/version2_1.md): A constant that represents SKAdNetwork version 2.1.

### Initializing the Postback Version

- [init(rawValue:)](skadtestpostbackversion/init%28rawvalue_%29.md): Initialize a version object with the supplied raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Ad impression and postback testing

- [Testing and validating ad impression signatures and postbacks for SKAdNetwork](testing-and-validating-ad-impression-signatures-and-postbacks-for-skadnetwork.md): Validate your ad impressions and test your postbacks by creating unit tests using the StoreKit Test framework.
- [SKAdTestSession](skadtestsession.md): The class you use to test ad impressions and postbacks in Xcode.
- [SKAdTestPostback](skadtestpostback.md): A test postback that contains ad conversion information in the testing environment.
- [SKAdTestPostbackResponse](skadtestpostbackresponse.md): The status and error information for a postback that the system sends in the testing environment.

# SKAdTestPostbackVersion (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Type Alias  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A constant that indicates the postback version.

## Declaration

```objectivec
typedef NSString * SKAdTestPostbackVersion;
```

<a id="overview"></a>

## Overview

This postback version number corresponds to a version of SKAdNetwork. All versions of [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) have specific instructions for signing ads and validating postbacks. The testing environment supports testing the versions indicated by the constants listed in the Getting SKAdNetwork Versions section below.

For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).

## Topics

### Getting SKAdNetwork Versions

- [SKAdTestPostbackVersion4_0](skadtestpostbackversion/version4_0.md): A constant that represents SKAdNetwork version 4.0.
- [SKAdTestPostbackVersion3_0](skadtestpostbackversion/version3_0.md): A constant that represents SKAdNetwork version 3.0.
- [SKAdTestPostbackVersion2_2](skadtestpostbackversion/version2_2.md): A constant that represents SKAdNetwork version 2.2.
- [SKAdTestPostbackVersion2_1](skadtestpostbackversion/version2_1.md): A constant that represents SKAdNetwork version 2.1.

## See Also

### Ad impression and postback testing

- [SKAdTestSession](skadtestsession.md): The class you use to test ad impressions and postbacks in Xcode.
- [SKAdTestPostback](skadtestpostback.md): A test postback that contains ad conversion information in the testing environment.
- [SKAdTestPostbackResponse](skadtestpostbackresponse.md): The status and error information for a postback that the system sends in the testing environment.
