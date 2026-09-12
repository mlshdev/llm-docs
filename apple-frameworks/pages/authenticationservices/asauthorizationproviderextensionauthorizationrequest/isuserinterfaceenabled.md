> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/isuserinterfaceenabled](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/isuserinterfaceenabled)

# isUserInterfaceEnabled (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · visionOS 1.0+

Determines if user interface is available for the current request.

## Declaration

```swift
var isUserInterfaceEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is `false`, then calls to [presentAuthorizationViewController(completion:)](presentauthorizationviewcontroller%28completion_%29.md) fail and the system cancels the request.

## See Also

### Interacting with the User

- [presentAuthorizationViewController(completion:)](presentauthorizationviewcontroller%28completion_%29.md): Asks the authorization service to show the extension’s view controller to the user.

# userInterfaceEnabled (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · visionOS 1.0+

Determines if user interface is available for the current request.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isUserInterfaceEnabled) BOOL userInterfaceEnabled;
```

<a id="Discussion"></a>

## Discussion

If this value is `false`, then calls to [presentAuthorizationViewControllerWithCompletion:](presentauthorizationviewcontroller%28completion_%29.md) fail and the system cancels the request.

## See Also

### Interacting with the User

- [presentAuthorizationViewControllerWithCompletion:](presentauthorizationviewcontroller%28completion_%29.md): Asks the authorization service to show the extension’s view controller to the user.
