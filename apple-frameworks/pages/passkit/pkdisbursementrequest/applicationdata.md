> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/applicationdata](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/applicationdata)

# applicationData (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Optional merchant-supplied information about the disbursement request.

## Declaration

```swift
var applicationData: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The system hashes the data and includes it in the resulting [PKPaymentToken](../pkpaymenttoken.md).

# applicationData (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Optional merchant-supplied information about the disbursement request.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * applicationData;
```

<a id="Discussion"></a>

## Discussion

The system hashes the data and includes it in the resulting [PKPaymentToken](../pkpaymenttoken.md).
