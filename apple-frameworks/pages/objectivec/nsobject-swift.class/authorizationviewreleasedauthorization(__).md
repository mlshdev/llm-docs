> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/authorizationviewreleasedauthorization(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewreleasedauthorization(_:))

# authorizationViewReleasedAuthorization(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sent to the delegate to indicate that deauthorization is about to occur.

## Declaration

```swift
func authorizationViewReleasedAuthorization(_ view: SFAuthorizationView!)
```

<a id="Discussion"></a>

## Discussion

This method is called after deauthorization has been approved (either you called the [deauthorize(\_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize%28_:%29) method, or the user clicked an open lock icon and the [authorizationViewShouldDeauthorize(\_:)](authorizationviewshoulddeauthorize%28__%29.md) delegate method did not cancel the operation), and before the user is deauthorized (that is, before the [authorizationViewDidDeauthorize(\_:)](authorizationviewdiddeauthorize%28__%29.md) delegate method is called).

## See Also

### Related Documentation

- [deauthorize(\_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize%28_:%29): Sets the authorization state to unauthorized and locks the lock icon in the view.

# authorizationViewReleasedAuthorization: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sent to the delegate to indicate that deauthorization is about to occur.

## Declaration

```objectivec
- (void) authorizationViewReleasedAuthorization:(SFAuthorizationView *) view;
```

<a id="Discussion"></a>

## Discussion

This method is called after deauthorization has been approved (either you called the [deauthorize:](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize%28_:%29) method, or the user clicked an open lock icon and the [authorizationViewShouldDeauthorize:](authorizationviewshoulddeauthorize%28__%29.md) delegate method did not cancel the operation), and before the user is deauthorized (that is, before the [authorizationViewDidDeauthorize:](authorizationviewdiddeauthorize%28__%29.md) delegate method is called).

## See Also

### Related Documentation

- [deauthorize:](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize%28_:%29): Sets the authorization state to unauthorized and locks the lock icon in the view.
