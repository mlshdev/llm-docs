> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/authorizationviewdidhide(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewdidhide(_:))

# authorizationViewDidHide(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sent to the delegate to indicate that the view’s visibility has changed.

## Declaration

```swift
func authorizationViewDidHide(_ view: SFAuthorizationView!)
```

<a id="Discussion"></a>

## Discussion

This delegate method, if present, is called whenever the [isHidden](https://developer.apple.com/documentation/appkit/nsview/ishidden) method is called to show or hide the view.

# authorizationViewDidHide: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sent to the delegate to indicate that the view’s visibility has changed.

## Declaration

```objectivec
- (void) authorizationViewDidHide:(SFAuthorizationView *) view;
```

<a id="Discussion"></a>

## Discussion

This delegate method, if present, is called whenever the [hidden](https://developer.apple.com/documentation/appkit/nsview/ishidden) method is called to show or hide the view.
