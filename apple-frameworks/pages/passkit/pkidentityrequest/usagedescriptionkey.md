> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityrequest/usagedescriptionkey](https://developer.apple.com/documentation/passkit/pkidentityrequest/usagedescriptionkey)

# usageDescriptionKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

A key in the NSIdentityUsageDescriptionDictionary field of the app’s Info.plist file.

## Declaration

```swift
var usageDescriptionKey: String? { get set }
```

<a id="discussion"></a>

## Discussion

The value for this key is an app-provided string that describes the reason for requesting identity information.

# usageDescriptionKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

A key in the NSIdentityUsageDescriptionDictionary field of the app’s Info.plist file.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * usageDescriptionKey;
```

<a id="discussion"></a>

## Discussion

The value for this key is an app-provided string that describes the reason for requesting identity information.
