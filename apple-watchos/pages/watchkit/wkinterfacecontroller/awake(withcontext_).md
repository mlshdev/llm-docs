> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/awake(withcontext:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/awake(withcontext:))

# awake(withContext:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Initializes the interface controller with the specified context data.

## Declaration

```swift
func awake(withContext context: Any?)
```

## Parameters

- `context`: The context object (if any) provided by the previous interface controller. This parameter may be `nil`. If it is not `nil`, you are responsible for saving a reference to the provided object and using it to configure your interface controller.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The system calls this method at initialization time to provide the interface controller with any relevant contextual data from a previous interface controller. Use this method to finish the initialization of your interface. For example, you might use this method to load data and to set the values for labels, images, tables, and other interface objects in your storyboard scene. If context data is available, use it to assist in the configuration of the new interface controller.

The default implementation of this method does nothing.

## See Also

### Creating the interface controller

- [init()](init%28%29.md): Returns an initialized interface controller object.
- [setTitle(\_:)](settitle%28__%29.md): Sets the title of the interface.

# awakeWithContext: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Initializes the interface controller with the specified context data.

## Declaration

```objectivec
- (void) awakeWithContext:(id) context;
```

## Parameters

- `context`: The context object (if any) provided by the previous interface controller. This parameter may be `nil`. If it is not `nil`, you are responsible for saving a reference to the provided object and using it to configure your interface controller.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The system calls this method at initialization time to provide the interface controller with any relevant contextual data from a previous interface controller. Use this method to finish the initialization of your interface. For example, you might use this method to load data and to set the values for labels, images, tables, and other interface objects in your storyboard scene. If context data is available, use it to assist in the configuration of the new interface controller.

The default implementation of this method does nothing.

## See Also

### Creating the interface controller

- [init](init%28%29.md): Returns an initialized interface controller object.
- [setTitle:](settitle%28__%29.md): Sets the title of the interface.
