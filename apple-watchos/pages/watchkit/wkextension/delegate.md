> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/delegate](https://developer.apple.com/documentation/watchkit/wkextension/delegate)

# delegate (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

The delegate of the WatchKit extension object.

## Declaration

```swift
weak var delegate: (any WKExtensionDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

The delegate object is an object that conforms to the [WKExtensionDelegate](../wkextensiondelegate.md) protocol. You provide the delegate object and use it to manage lifecycle events in your extension. Providing a delegate object is required if your extension supports actionable notifications or Handoff behaviors.

For more information about the methods of the delegate object, see [WKExtensionDelegate](../wkextensiondelegate.md).

## See Also

### Accessing the extension delegate

- [WKExtensionDelegate](../wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.

# delegate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

The delegate of the WatchKit extension object.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<WKExtensionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object is an object that conforms to the [WKExtensionDelegate](../wkextensiondelegate.md) protocol. You provide the delegate object and use it to manage lifecycle events in your extension. Providing a delegate object is required if your extension supports actionable notifications or Handoff behaviors.

For more information about the methods of the delegate object, see [WKExtensionDelegate](../wkextensiondelegate.md).

## See Also

### Accessing the extension delegate

- [WKExtensionDelegate](../wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
