> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebhistory/init(profileidentifier:)](https://developer.apple.com/documentation/screentime/stwebhistory/init(profileidentifier:))

# init(profileIdentifier:) (Swift)

**Framework:** Screen Time  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

Creates a web history instance to delete web-usage data associated to the profile identifier you specify.

## Declaration

```swift
init(profileIdentifier: STWebHistory.ProfileIdentifier?)
```

## Parameters

- `profileIdentifier`: The identifier of the current browsing profile.

<a id="discussion"></a>

## Discussion

The default value for `profileIdentifier` is `nil`. This identifier can be used to delete browsing history for a specific profile. Using `nil` will only delete web history reported without a profile identifier.

# initWithProfileIdentifier: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

Creates a web history instance to delete web-usage data associated to the profile identifier you specify.

## Declaration

```objectivec
- (instancetype) initWithProfileIdentifier:(STWebHistoryProfileIdentifier) profileIdentifier;
```

## Parameters

- `profileIdentifier`: The identifier of the current browsing profile.

<a id="discussion"></a>

## Discussion

The default value for `profileIdentifier` is `nil`. This identifier can be used to delete browsing history for a specific profile. Using `nil` will only delete web history reported without a profile identifier.
