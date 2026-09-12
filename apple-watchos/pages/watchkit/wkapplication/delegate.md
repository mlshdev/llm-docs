> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/delegate](https://developer.apple.com/documentation/watchkit/wkapplication/delegate)

# delegate (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The delegate of the WatchKit app object.

## Declaration

```swift
weak var delegate: (any WKApplicationDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

The delegate object is an object that conforms to the [WKApplicationDelegate](../wkapplicationdelegate.md) protocol. You provide the delegate object and use it to manage lifecycle events in your extension. Providing a delegate object is required if your extension supports actionable notifications or Handoff behaviors.

For more information about the methods of the delegate object, see [WKApplicationDelegate](../wkapplicationdelegate.md).

## See Also

### Accessing the app delegate

- [WKApplicationDelegate](../wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.

# delegate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The delegate of the WatchKit app object.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<WKApplicationDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object is an object that conforms to the [WKApplicationDelegate](../wkapplicationdelegate.md) protocol. You provide the delegate object and use it to manage lifecycle events in your extension. Providing a delegate object is required if your extension supports actionable notifications or Handoff behaviors.

For more information about the methods of the delegate object, see [WKApplicationDelegate](../wkapplicationdelegate.md).

## See Also

### Accessing the app delegate

- [WKApplicationDelegate](../wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
