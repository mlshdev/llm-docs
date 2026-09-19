> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/context/identifier

# identifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The unique identifier of the context object.

## Declaration

```swift
var identifier: UUID { get }
```

<a id="discussion"></a>

## Discussion

The [UIWritingToolsCoordinator.Context](../context.md) object initializes the value of this property at creation time. Use this value to identify the context object within your app.

# identifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The unique identifier of the context object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSUUID * identifier;
```

<a id="discussion"></a>

## Discussion

The [UIWritingToolsCoordinatorContext](../context.md) object initializes the value of this property at creation time. Use this value to identify the context object within your app.
