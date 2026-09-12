> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentviewprovider/loadview()](https://developer.apple.com/documentation/appkit/nstextattachmentviewprovider/loadview())

# loadView() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Draws the custom view hierarchy that text attachment view subclasses implement.

## Declaration

```swift
func loadView()
```

<a id="Discussion"></a>

## Discussion

Use this method to create a custom view hierarchy. Don’t call this method directly, the framework calls it at the appropriate time.

# loadView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Draws the custom view hierarchy that text attachment view subclasses implement.

## Declaration

```objectivec
- (void) loadView;
```

<a id="Discussion"></a>

## Discussion

Use this method to create a custom view hierarchy. Don’t call this method directly, the framework calls it at the appropriate time.
