> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationcontroller/delegate](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontroller/delegate)

# delegate (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that receives notifications about the request’s status.

## Declaration

```swift
weak var delegate: (any ASAccountAuthenticationModificationControllerDelegate)? { get set }
```

## See Also

### Configuring Requests

- [presentationContextProvider](presentationcontextprovider.md): An object that provides a presentation context for the account modification request’s user interface.

# delegate (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that receives notifications about the request’s status.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<ASAccountAuthenticationModificationControllerDelegate> delegate;
```

## See Also

### Configuring Requests

- [presentationContextProvider](presentationcontextprovider.md): An object that provides a presentation context for the account modification request’s user interface.
