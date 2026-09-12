> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/location(in:)](https://developer.apple.com/documentation/appkit/nsevent/location(in:))

# location(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the location of the receiver in the coordinate system of the given node.

## Declaration

```swift
func location(in node: SKNode) -> CGPoint
```

## Parameters

- `node`: A node that is a descendant of a scene presented in the window that received the mouse event.

<a id="return-value"></a>

## Return Value

The location of the event in the node’s coordinate system.

# locationInNode: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the location of the receiver in the coordinate system of the given node.

## Declaration

```objectivec
- (CGPoint) locationInNode:(SKNode *) node;
```

## Parameters

- `node`: A node that is a descendant of a scene presented in the window that received the mouse event.

<a id="return-value"></a>

## Return Value

The location of the event in the node’s coordinate system.
