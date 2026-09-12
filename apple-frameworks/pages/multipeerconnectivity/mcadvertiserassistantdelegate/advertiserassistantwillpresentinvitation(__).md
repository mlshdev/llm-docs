> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcadvertiserassistantdelegate/advertiserassistantwillpresentinvitation(_:)](https://developer.apple.com/documentation/multipeerconnectivity/mcadvertiserassistantdelegate/advertiserassistantwillpresentinvitation(_:))

# advertiserAssistantWillPresentInvitation(\_:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the advertiser assistant is about to present an invitation to the user.

> Use Network Framework instead

## Declaration

```swift
optional func advertiserAssistantWillPresentInvitation(_ advertiserAssistant: MCAdvertiserAssistant)
```

## Parameters

- `advertiserAssistant`: The advertiser assistant that is about to present an invitation to the user.

<a id="discussion"></a>

## Discussion

This call is intended to allow your app to prepare for an invitation that will be presented to the user. For example, your app might stop performing computationally intensive UI updates for views that will be hidden by the invitation.

## See Also

### Advertiser Assistant Delegate Methods

- [advertiserAssistantDidDismissInvitation(\_:)](advertiserassistantdiddismissinvitation%28__%29.md): Deprecated. Indicates that the advertiser assistant finished showing the invitation to the user.

# advertiserAssistantWillPresentInvitation: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the advertiser assistant is about to present an invitation to the user.

> Use Network Framework instead

## Declaration

```objectivec
- (void) advertiserAssistantWillPresentInvitation:(MCAdvertiserAssistant *) advertiserAssistant;
```

## Parameters

- `advertiserAssistant`: The advertiser assistant that is about to present an invitation to the user.

<a id="discussion"></a>

## Discussion

This call is intended to allow your app to prepare for an invitation that will be presented to the user. For example, your app might stop performing computationally intensive UI updates for views that will be hidden by the invitation.

## See Also

### Advertiser Assistant Delegate Methods

- [advertiserAssistantDidDismissInvitation:](advertiserassistantdiddismissinvitation%28__%29.md): Deprecated. Indicates that the advertiser assistant finished showing the invitation to the user.
