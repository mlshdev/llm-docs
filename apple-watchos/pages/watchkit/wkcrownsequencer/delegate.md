> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkcrownsequencer/delegate](https://developer.apple.com/documentation/watchkit/wkcrownsequencer/delegate)

# delegate (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The object you use to monitor changes to the crown state.

## Declaration

```swift
weak var delegate: (any WKCrownDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a delegate object to receive notifications about crown rotation events. For more information about receiving crown-related data, see [WKCrownDelegate](../wkcrowndelegate.md).

# delegate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The object you use to monitor changes to the crown state.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<WKCrownDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Assign a delegate object to receive notifications about crown rotation events. For more information about receiving crown-related data, see [WKCrownDelegate](../wkcrowndelegate.md).
