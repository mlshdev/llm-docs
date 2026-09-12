> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/context/identifier](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/context/identifier)

# identifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The unique identifier of the context object.

## Declaration

```swift
var identifier: UUID { get }
```

<a id="discussion"></a>

## Discussion

The [NSWritingToolsCoordinator.Context](../context.md) object initializes the value of this property at creation time. Use this value to identify the context object within your app.

# identifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 15.2+

The unique identifier of the context object.

## Declaration

```objectivec
@property (strong, readonly) NSUUID * identifier;
```

<a id="discussion"></a>

## Discussion

The [NSWritingToolsCoordinatorContext](../context.md) object initializes the value of this property at creation time. Use this value to identify the context object within your app.
