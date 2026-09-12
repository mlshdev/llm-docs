> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/mssetupsession/start()](https://developer.apple.com/documentation/mediasetup/mssetupsession/start())

# start() (Swift)

**Framework:** Media Setup  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Initiates the service configuration process and sends the account details of the streaming media service to the user’s HomePod speakers.

## Declaration

```swift
func start() throws
```

## See Also

### Presenting the Configuration View

- [presentationContext](presentationcontext.md): A delegate that provides media setup display information to the system.
- [MSAuthenticationPresentationContext](../msauthenticationpresentationcontext.md): A protocol that provides media setup display information to the system.

# startWithError: (Objective-C)

**Framework:** Media Setup  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Initiates the service configuration process and sends the account details of the streaming media service to the user’s HomePod speakers.

## Declaration

```objectivec
- (BOOL) startWithError:(NSError **) error;
```

## See Also

### Presenting the Configuration View

- [presentationContext](presentationcontext.md): A delegate that provides media setup display information to the system.
- [MSAuthenticationPresentationContext](../msauthenticationpresentationcontext.md): A protocol that provides media setup display information to the system.
