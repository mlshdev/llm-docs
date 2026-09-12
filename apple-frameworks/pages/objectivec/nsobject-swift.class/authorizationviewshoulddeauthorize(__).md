> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/authorizationviewshoulddeauthorize(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewshoulddeauthorize(_:))

# authorizationViewShouldDeauthorize(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sent to the delegate when a user clicks the open lock icon.

## Declaration

```swift
func authorizationViewShouldDeauthorize(_ view: SFAuthorizationView!) -> Bool
```

<a id="Discussion"></a>

## Discussion

The delegate can react to this before deauthorization happens and avoid it by returning [NO](../no.md). This delegate method is not called when you call the [deauthorize(\_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize%28_:%29) method.

## See Also

### Related Documentation

- [deauthorize(\_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize%28_:%29): Sets the authorization state to unauthorized and locks the lock icon in the view.

# authorizationViewShouldDeauthorize: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sent to the delegate when a user clicks the open lock icon.

## Declaration

```objectivec
- (BOOL) authorizationViewShouldDeauthorize:(SFAuthorizationView *) view;
```

<a id="Discussion"></a>

## Discussion

The delegate can react to this before deauthorization happens and avoid it by returning [NO](../no.md). This delegate method is not called when you call the [deauthorize:](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize%28_:%29) method.

## See Also

### Related Documentation

- [deauthorize:](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/deauthorize%28_:%29): Sets the authorization state to unauthorized and locks the lock icon in the view.
