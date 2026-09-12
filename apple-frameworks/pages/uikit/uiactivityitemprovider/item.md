> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemprovider/item](https://developer.apple.com/documentation/uikit/uiactivityitemprovider/item)

# item (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Generates and returns the actual data-bearing object.

## Declaration

```swift
var item: Any { get }
```

<a id="Discussion"></a>

## Discussion

When the actual data-bearing object is required, this method is called by the provider object’s infrastructure. Subclasses must override this method and use it to perform whatever work is required to create the object and return it. You implement this method instead of the normal [main()](../../foundation/operation/main%28%29.md) method you would implement for operation objects. This method is called on a secondary thread of your app.

The system provides no built-in progress indicator, so if generating the item may take a long time you should plan on providing feedback in your app yourself.

## See Also

### Accessing the provider attributes

- [placeholderItem](placeholderitem.md): The placeholder object you specified at initialization time.
- [activityType](activitytype.md): The type of the activity object that is expecting the data.

# item (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Generates and returns the actual data-bearing object.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) id item;
```

<a id="Discussion"></a>

## Discussion

When the actual data-bearing object is required, this method is called by the provider object’s infrastructure. Subclasses must override this method and use it to perform whatever work is required to create the object and return it. You implement this method instead of the normal [main](../../foundation/operation/main%28%29.md) method you would implement for operation objects. This method is called on a secondary thread of your app.

The system provides no built-in progress indicator, so if generating the item may take a long time you should plan on providing feedback in your app yourself.

## See Also

### Accessing the provider attributes

- [placeholderItem](placeholderitem.md): The placeholder object you specified at initialization time.
- [activityType](activitytype.md): The type of the activity object that is expecting the data.
