> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/actions](https://developer.apple.com/documentation/quartzcore/calayer/actions)

# actions (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A dictionary containing layer actions.

## Declaration

```swift
var actions: [String : any CAAction]? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. You can use this dictionary to store custom actions for your layer. The contents of this dictionary searched as part of the standard implementation of the [action(forKey:)](action%28forkey_%29.md) method.

## See Also

### Getting the layer’s actions

- [action(forKey:)](action%28forkey_%29.md): Returns the action object assigned to the specified key.
- [defaultAction(forKey:)](defaultaction%28forkey_%29.md): Returns the default action for the current class.

# actions (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A dictionary containing layer actions.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id<CAAction>> * actions;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. You can use this dictionary to store custom actions for your layer. The contents of this dictionary searched as part of the standard implementation of the [actionForKey:](action%28forkey_%29.md) method.

## See Also

### Getting the layer’s actions

- [actionForKey:](action%28forkey_%29.md): Returns the action object assigned to the specified key.
- [defaultActionForKey:](defaultaction%28forkey_%29.md): Returns the default action for the current class.
