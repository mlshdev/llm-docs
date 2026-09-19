> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asonetimecodecredential/init(code:)

# init(code:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Creates a one-time passcode (OTP) credential.

## Declaration

```swift
init(code: String)
```

## Parameters

- `code`: The OTP.

# initWithCode: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Creates a one-time passcode (OTP) credential.

## Declaration

```objectivec
- (instancetype) initWithCode:(NSString *) code;
```

## Parameters

- `code`: The OTP.
