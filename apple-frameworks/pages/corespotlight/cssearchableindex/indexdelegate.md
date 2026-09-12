> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/indexdelegate](https://developer.apple.com/documentation/corespotlight/cssearchableindex/indexdelegate)

# indexDelegate (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The delegate object that can handle index-management tasks.

## Declaration

```swift
weak var indexDelegate: (any CSSearchableIndexDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate should conform to the [CSSearchableIndexDelegate](../cssearchableindexdelegate.md) protocol. Set this property to handle communication with the index and perform index-management tasks for your app. In particular, long-running apps should set a delegate so that the index can be updated while the app is in the background. Alternatively, you can create an extension with a request handler that conforms to the [CSSearchableIndexDelegate](../cssearchableindexdelegate.md) protocol and let the extension perform index updates when your app isn’t running.

## See Also

### Responding to index-related changes

- [CSSearchableIndexDelegate](../cssearchableindexdelegate.md): A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.

# indexDelegate (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The delegate object that can handle index-management tasks.

## Declaration

```objectivec
@property (weak, nullable) id<CSSearchableIndexDelegate> indexDelegate;
```

<a id="Discussion"></a>

## Discussion

The delegate should conform to the [CSSearchableIndexDelegate](../cssearchableindexdelegate.md) protocol. Set this property to handle communication with the index and perform index-management tasks for your app. In particular, long-running apps should set a delegate so that the index can be updated while the app is in the background. Alternatively, you can create an extension with a request handler that conforms to the [CSSearchableIndexDelegate](../cssearchableindexdelegate.md) protocol and let the extension perform index updates when your app isn’t running.

## See Also

### Responding to index-related changes

- [CSSearchableIndexDelegate](../cssearchableindexdelegate.md): A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.
