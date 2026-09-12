> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsource/ignoremodifierkeys(for:)](https://developer.apple.com/documentation/appkit/nsdraggingsource/ignoremodifierkeys(for:))

# ignoreModifierKeys(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns whether the modifier keys will be ignored for this dragging session.

## Declaration

```swift
@MainActor optional func ignoreModifierKeys(for session: NSDraggingSession) -> Bool
```

## Parameters

- `session`: The dragging session.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the modifier keys will be ignored, [false](https://developer.apple.com/documentation/swift/false) otherwise.

# ignoreModifierKeysForDraggingSession: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the modifier keys will be ignored for this dragging session.

## Declaration

```objectivec
- (BOOL) ignoreModifierKeysForDraggingSession:(NSDraggingSession *) session;
```

## Parameters

- `session`: The dragging session.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the modifier keys will be ignored, [false](https://developer.apple.com/documentation/swift/false) otherwise.
