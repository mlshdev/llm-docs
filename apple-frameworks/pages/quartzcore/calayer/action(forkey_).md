> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/action(forkey:)](https://developer.apple.com/documentation/quartzcore/calayer/action(forkey:))

# action(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the action object assigned to the specified key.

## Declaration

```swift
func action(forKey event: String) -> (any CAAction)?
```

## Parameters

- `event`: The identifier of the action.

<a id="return-value"></a>

## Return Value

Returns the object that provides the action for `key`. The object must implement the [CAAction](../caaction.md) protocol.

<a id="Discussion"></a>

## Discussion

This method searches for the given action object of the layer. Actions define dynamic behaviors for a layer. For example, the animatable properties of a layer typically have corresponding action objects to initiate the actual animations. When that property changes, the layer looks for the action object associated with the property name and executes it. You can also associate custom action objects with your layer to implement app-specific actions.

This method searches for the layer’s associated actions in the following order:

1. If the layer has a delegate that implements the [action(for:forKey:)](../calayerdelegate/action%28for_forkey_%29.md) method, the layer calls that method. The delegate must do one of the following:

- Return the action object for the given key.
- Return the [NSNull](../../foundation/nsnull.md) object if it does not handle the action.

2. The layer looks in the layer’s [actions](actions.md) dictionary for a matching key/action pair.
3. The layer looks in the [style](style.md) dictionary for an [actions](actions.md) dictionary  for a matching key/action pair.
4. The layer calls the [defaultAction(forKey:)](defaultaction%28forkey_%29.md) class method to look for any class-defined actions.

If any of the above steps returns an instance of [NSNull](../../foundation/nsnull.md), it is converted to `nil` before continuing.

When an action object is invoked it receives three parameters: the name of the event, the object on which the event happened (the layer), and a dictionary of named arguments specific to each event kind.

## See Also

### Related Documentation

- [Layer filters](../calayer.md#Layer-filters)
- [style](style.md): An optional dictionary used to store property values that aren’t explicitly defined by the layer.

### Getting the layer’s actions

- [actions](actions.md): A dictionary containing layer actions.
- [defaultAction(forKey:)](defaultaction%28forkey_%29.md): Returns the default action for the current class.

# actionForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the action object assigned to the specified key.

## Declaration

```objectivec
- (id<CAAction>) actionForKey:(NSString *) event;
```

## Parameters

- `event`: The identifier of the action.

<a id="return-value"></a>

## Return Value

Returns the object that provides the action for `key`. The object must implement the [CAAction](../caaction.md) protocol.

<a id="Discussion"></a>

## Discussion

This method searches for the given action object of the layer. Actions define dynamic behaviors for a layer. For example, the animatable properties of a layer typically have corresponding action objects to initiate the actual animations. When that property changes, the layer looks for the action object associated with the property name and executes it. You can also associate custom action objects with your layer to implement app-specific actions.

This method searches for the layer’s associated actions in the following order:

1. If the layer has a delegate that implements the [actionForLayer:forKey:](../calayerdelegate/action%28for_forkey_%29.md) method, the layer calls that method. The delegate must do one of the following:

- Return the action object for the given key.
- Return the [NSNull](../../foundation/nsnull.md) object if it does not handle the action.

2. The layer looks in the layer’s [actions](actions.md) dictionary for a matching key/action pair.
3. The layer looks in the [style](style.md) dictionary for an [actions](actions.md) dictionary  for a matching key/action pair.
4. The layer calls the [defaultActionForKey:](defaultaction%28forkey_%29.md) class method to look for any class-defined actions.

If any of the above steps returns an instance of [NSNull](../../foundation/nsnull.md), it is converted to `nil` before continuing.

When an action object is invoked it receives three parameters: the name of the event, the object on which the event happened (the layer), and a dictionary of named arguments specific to each event kind.

## See Also

### Related Documentation

- [Layer filters](../calayer.md#Layer-filters)
- [style](style.md): An optional dictionary used to store property values that aren’t explicitly defined by the layer.

### Getting the layer’s actions

- [actions](actions.md): A dictionary containing layer actions.
- [defaultActionForKey:](defaultaction%28forkey_%29.md): Returns the default action for the current class.
