> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfauthenticationsession/start()](https://developer.apple.com/documentation/safariservices/sfauthenticationsession/start())

# start() (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Starts the session after initializing an instance of SFAuthenticationSession. This will trigger the consent dialog.

## Declaration

```swift
func start() -> Bool
```

## See Also

### Instance Methods

- [cancel()](cancel%28%29.md): Deprecated. Cancels the currently running session when the consent dialog is up or when the webpage is up. This is how applications stop the login process.

# start (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Starts the session after initializing an instance of SFAuthenticationSession. This will trigger the consent dialog.

## Declaration

```objectivec
- (BOOL) start;
```

## See Also

### Instance Methods

- [cancel](cancel%28%29.md): Deprecated. Cancels the currently running session when the consent dialog is up or when the webpage is up. This is how applications stop the login process.
