> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcadvertiserassistantdelegate/advertiserassistantdiddismissinvitation(_:)](https://developer.apple.com/documentation/multipeerconnectivity/mcadvertiserassistantdelegate/advertiserassistantdiddismissinvitation(_:))

# advertiserAssistantDidDismissInvitation(\_:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the advertiser assistant finished showing the invitation to the user.

> Use Network Framework instead

## Declaration

```swift
optional func advertiserAssistantDidDismissInvitation(_ advertiserAssistant: MCAdvertiserAssistant)
```

## Parameters

- `advertiserAssistant`: The advertiser assistant that finished showing an invitation.

<a id="Discussion"></a>

## Discussion

This call tells your app to resume any activity that it stopped doing while the invitation was onscreen. For example, it might resume computationally intensive UI updates for views that are no longer hidden by the invitation.

## See Also

### Advertiser Assistant Delegate Methods

- [advertiserAssistantWillPresentInvitation(\_:)](advertiserassistantwillpresentinvitation%28__%29.md): Deprecated. Indicates that the advertiser assistant is about to present an invitation to the user.

# advertiserAssistantDidDismissInvitation: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the advertiser assistant finished showing the invitation to the user.

> Use Network Framework instead

## Declaration

```objectivec
- (void) advertiserAssistantDidDismissInvitation:(MCAdvertiserAssistant *) advertiserAssistant;
```

## Parameters

- `advertiserAssistant`: The advertiser assistant that finished showing an invitation.

<a id="Discussion"></a>

## Discussion

This call tells your app to resume any activity that it stopped doing while the invitation was onscreen. For example, it might resume computationally intensive UI updates for views that are no longer hidden by the invitation.

## See Also

### Advertiser Assistant Delegate Methods

- [advertiserAssistantWillPresentInvitation:](advertiserassistantwillpresentinvitation%28__%29.md): Deprecated. Indicates that the advertiser assistant is about to present an invitation to the user.
