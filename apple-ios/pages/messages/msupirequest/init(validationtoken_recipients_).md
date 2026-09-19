> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messages/msupirequest/init(validationtoken:recipients:)

# init(validationToken:recipients:) (Swift)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
init(validationToken: String, recipients: [String])
```

## Parameters

- `validationToken`: The validation token to be sent.
- `recipients`: The SMS recipients who will receive the UPI validation message.

<a id="discussion"></a>

## Discussion

Creates a new UPI request with the specified validation token and recipients.

# initWithValidationToken:recipients: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
- (instancetype) initWithValidationToken:(NSString *) validationToken recipients:(NSArray<NSString *> *) recipients;
```

## Parameters

- `validationToken`: The validation token to be sent.
- `recipients`: The SMS recipients who will receive the UPI validation message.

<a id="discussion"></a>

## Discussion

Creates a new UPI request with the specified validation token and recipients.
