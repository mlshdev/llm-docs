> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanager/delegate](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanager/delegate)

# delegate (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The delegate of the account manager object.

## Declaration

```swift
weak var delegate: (any VSAccountManagerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The system notifies the delegate when the app needs to present or dismiss authentication views, or decide whether to authenticate the person with their chosen provider.

The delegate must adopt the [VSAccountManagerDelegate](../vsaccountmanagerdelegate.md) protocol.

## See Also

### Responding to account manager requests

- [VSAccountManagerDelegate](../vsaccountmanagerdelegate.md): The methods you use to respond to authentication view controller requests.

# delegate (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The delegate of the account manager object.

## Declaration

```objectivec
@property (nonatomic, weak) id<VSAccountManagerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The system notifies the delegate when the app needs to present or dismiss authentication views, or decide whether to authenticate the person with their chosen provider.

The delegate must adopt the [VSAccountManagerDelegate](../vsaccountmanagerdelegate.md) protocol.

## See Also

### Responding to account manager requests

- [VSAccountManagerDelegate](../vsaccountmanagerdelegate.md): The methods you use to respond to authentication view controller requests.
