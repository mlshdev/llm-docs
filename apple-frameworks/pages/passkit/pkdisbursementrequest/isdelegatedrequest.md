> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/isdelegatedrequest](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/isdelegatedrequest)

# isDelegatedRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

A Boolean value that indicates whether this disbursement request is being made by a delegated entity on behalf of a merchant.

## Declaration

```swift
var isDelegatedRequest: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to YES when your application is acting as an Apple Pay delegate and presenting the payment sheet on behalf of another merchant. The default value is NO.

> **Note**

> This property requires your application to be registered as an Apple Pay delegate and to have the com.apple.developer.in-app-payments-delegate entitlement.

# isDelegatedRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

A Boolean value that indicates whether this disbursement request is being made by a delegated entity on behalf of a merchant.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL isDelegatedRequest;
```

<a id="discussion"></a>

## Discussion

Set this property to YES when your application is acting as an Apple Pay delegate and presenting the payment sheet on behalf of another merchant. The default value is NO.

> **Note**

> This property requires your application to be registered as an Apple Pay delegate and to have the com.apple.developer.in-app-payments-delegate entitlement.
