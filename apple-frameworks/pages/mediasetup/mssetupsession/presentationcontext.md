> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/mssetupsession/presentationcontext](https://developer.apple.com/documentation/mediasetup/mssetupsession/presentationcontext)

# presentationContext (Swift)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A delegate that provides media setup display information to the system.

## Declaration

```swift
weak var presentationContext: (any MSAuthenticationPresentationContext)? { get set }
```

## See Also

### Presenting the Configuration View

- [MSAuthenticationPresentationContext](../msauthenticationpresentationcontext.md): A protocol that provides media setup display information to the system.
- [start()](start%28%29.md): Initiates the service configuration process and sends the account details of the streaming media service to the user’s HomePod speakers.

# presentationContext (Objective-C)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A delegate that provides media setup display information to the system.

## Declaration

```objectivec
@property (nonatomic, weak) id<MSAuthenticationPresentationContext> presentationContext;
```

## See Also

### Presenting the Configuration View

- [MSAuthenticationPresentationContext](../msauthenticationpresentationcontext.md): A protocol that provides media setup display information to the system.
- [startWithError:](start%28%29.md): Initiates the service configuration process and sends the account details of the streaming media service to the user’s HomePod speakers.
