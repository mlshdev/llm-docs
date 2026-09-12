> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:constrainsplitposition:ofsubviewat:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:constrainsplitposition:ofsubviewat:))

# splitView(\_:constrainSplitPosition:ofSubviewAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Allows the delegate to constrain the divider to certain positions.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, constrainSplitPosition proposedPosition: CGFloat, ofSubviewAt dividerIndex: Int) -> CGFloat
```

## Parameters

- `splitView`: The split view that sends the message.
- `proposedPosition`: The cursor’s current position, and the proposed position of the divider.
- `dividerIndex`: The index of the divider the user is moving, with the first divider being `0` and increasing from top to bottom (or left to right).

<a id="return-value"></a>

## Return Value

The position for constraining the divider.

<a id="Discussion"></a>

## Discussion

If the delegate implements this method, the split view calls it repeatedly as the user moves the divider.

If a subview’s height must be a multiple of a certain number, use this method to return the multiple nearest to `proposedPosition`.

# splitView:constrainSplitPosition:ofSubviewAt: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to constrain the divider to certain positions.

## Declaration

```objectivec
- (CGFloat) splitView:(NSSplitView *) splitView constrainSplitPosition:(CGFloat) proposedPosition ofSubviewAt:(NSInteger) dividerIndex;
```

## Parameters

- `splitView`: The split view that sends the message.
- `proposedPosition`: The cursor’s current position, and the proposed position of the divider.
- `dividerIndex`: The index of the divider the user is moving, with the first divider being `0` and increasing from top to bottom (or left to right).

<a id="return-value"></a>

## Return Value

The position for constraining the divider.

<a id="Discussion"></a>

## Discussion

If the delegate implements this method, the split view calls it repeatedly as the user moves the divider.

If a subview’s height must be a multiple of a certain number, use this method to return the multiple nearest to `proposedPosition`.
