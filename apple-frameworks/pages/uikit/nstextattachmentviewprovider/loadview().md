> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentviewprovider/loadview()](https://developer.apple.com/documentation/uikit/nstextattachmentviewprovider/loadview())

# loadView() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Draws the custom view hierarchy that text attachment view subclasses implement.

## Declaration

```swift
func loadView()
```

<a id="Discussion"></a>

## Discussion

Use this method to create a custom view hierarchy. Don’t call this method directly, the framework calls it at the appropriate time.

# loadView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Draws the custom view hierarchy that text attachment view subclasses implement.

## Declaration

```objectivec
- (void) loadView;
```

<a id="Discussion"></a>

## Discussion

Use this method to create a custom view hierarchy. Don’t call this method directly, the framework calls it at the appropriate time.
