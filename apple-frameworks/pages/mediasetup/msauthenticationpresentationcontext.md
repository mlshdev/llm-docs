> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/msauthenticationpresentationcontext](https://developer.apple.com/documentation/mediasetup/msauthenticationpresentationcontext)

# MSAuthenticationPresentationContext (Swift)

**Framework:** Media Setup  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 15.4+ · visionOS 1.0+

A protocol that provides media setup display information to the system.

## Declaration

```swift
protocol MSAuthenticationPresentationContext : NSObjectProtocol
```

## Topics

### Displaying the Media Setup View

- [presentationAnchor()](msauthenticationpresentationcontext/presentationanchor%28%29.md): A window that presents the system’s HomePod configuration view to the user.
- [MSPresentationAnchor](mspresentationanchor.md): A window that presents a Media Setup configuration view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Presenting the Configuration View

- [presentationContext](mssetupsession/presentationcontext.md): A delegate that provides media setup display information to the system.
- [start()](mssetupsession/start%28%29.md): Initiates the service configuration process and sends the account details of the streaming media service to the user’s HomePod speakers.

# MSAuthenticationPresentationContext (Objective-C)

**Framework:** Media Setup  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 15.4+ · visionOS 1.0+

A protocol that provides media setup display information to the system.

## Declaration

```objectivec
@protocol MSAuthenticationPresentationContext <NSObject>
```

## Topics

### Displaying the Media Setup View

- [presentationAnchor](msauthenticationpresentationcontext/presentationanchor%28%29.md): A window that presents the system’s HomePod configuration view to the user.
- [MSPresentationAnchor](mspresentationanchor.md): A window that presents a Media Setup configuration view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Presenting the Configuration View

- [presentationContext](mssetupsession/presentationcontext.md): A delegate that provides media setup display information to the system.
- [startWithError:](mssetupsession/start%28%29.md): Initiates the service configuration process and sends the account details of the streaming media service to the user’s HomePod speakers.
