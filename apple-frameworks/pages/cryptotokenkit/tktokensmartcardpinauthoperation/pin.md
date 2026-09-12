> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensmartcardpinauthoperation/pin](https://developer.apple.com/documentation/cryptotokenkit/tktokensmartcardpinauthoperation/pin)

# pin (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The PIN value resulting from performing the operation.

## Declaration

```swift
var pin: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is set to the result of the operation after `finishWithError:` is called.

> **Note**

>  If the [apduTemplate](apdutemplate.md) property has a set value, this property is not set, as the PIN is automatically sent to the Smart Card using the specified template.

# PIN (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The PIN value resulting from performing the operation.

## Declaration

```objectivec
@property (copy, nullable) NSString * PIN;
```

<a id="Discussion"></a>

## Discussion

This property is set to the result of the operation after `finishWithError:` is called.

> **Note**

>  If the [APDUTemplate](apdutemplate.md) property has a set value, this property is not set, as the PIN is automatically sent to the Smart Card using the specified template.
