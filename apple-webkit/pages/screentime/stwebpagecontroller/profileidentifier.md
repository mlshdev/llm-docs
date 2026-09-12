> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebpagecontroller/profileidentifier](https://developer.apple.com/documentation/screentime/stwebpagecontroller/profileidentifier)

# profileIdentifier (Swift)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

An optional identifier for the current browsing profile.

## Declaration

```swift
var profileIdentifier: STWebHistory.ProfileIdentifier? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. This identifier represents a profile and allows you to keep your browsing separate for topics like work, personal, or school. Using `nil` will report web history without a profile identifier. Web browsers with a “default” profile may want to use `nil` in order to match any web history reported prior to this API.

# profileIdentifier (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

An optional identifier for the current browsing profile.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) STWebHistoryProfileIdentifier profileIdentifier;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. This identifier represents a profile and allows you to keep your browsing separate for topics like work, personal, or school. Using `nil` will report web history without a profile identifier. Web browsers with a “default” profile may want to use `nil` in order to match any web history reported prior to this API.
