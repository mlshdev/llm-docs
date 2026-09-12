> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanstatus/gettokenwithcompletion(_:)](https://developer.apple.com/documentation/coretelephony/ctcellularplanstatus/gettokenwithcompletion(_:))

# getTokenWithCompletion(\_:) (Swift)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Retrieves and stores the token associated with your app.

## Declaration

```swift
class func getTokenWithCompletion(_ completionHandler: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
class func token() async throws -> String
```

## Parameters

- `completionHandler`: A closure the framework calls with the retrieved token and any error that occurs.

<a id="discussion"></a>

## Discussion

Your app has 30 seconds to call this method after the system generates the token before the system invalidates it. The framework maps the token to the ICCID associated with the original [MFMessageComposeViewController](../../messageui/mfmessagecomposeviewcontroller.md) instance used for UPI device validation.

# getTokenWithCompletion: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Retrieves and stores the token associated with your app.

## Declaration

```objectivec
+ (void) getTokenWithCompletion:(void (^)(NSString *token, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A closure the framework calls with the retrieved token and any error that occurs.

<a id="discussion"></a>

## Discussion

Your app has 30 seconds to call this method after the system generates the token before the system invalidates it. The framework maps the token to the ICCID associated with the original [MFMessageComposeViewController](../../messageui/mfmessagecomposeviewcontroller.md) instance used for UPI device validation.
