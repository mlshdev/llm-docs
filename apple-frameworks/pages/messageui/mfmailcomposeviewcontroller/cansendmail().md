> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontroller/cansendmail()](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/cansendmail())

# canSendMail() (Swift)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean that indicates whether the current device is able to send email.

## Declaration

```swift
class func canSendMail() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device is configured for sending email or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

You should call this method before attempting to display the mail composition interface. If it returns [false](https://developer.apple.com/documentation/swift/false), you must not display the mail composition interface.

# canSendMail (Objective-C)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean that indicates whether the current device is able to send email.

## Declaration

```objectivec
+ (BOOL) canSendMail;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device is configured for sending email or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

You should call this method before attempting to display the mail composition interface. If it returns [false](https://developer.apple.com/documentation/swift/false), you must not display the mail composition interface.
