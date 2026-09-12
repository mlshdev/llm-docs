> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/defaultaction(forkey:)](https://developer.apple.com/documentation/quartzcore/calayer/defaultaction(forkey:))

# defaultAction(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the default action for the current class.

## Declaration

```swift
class func defaultAction(forKey event: String) -> (any CAAction)?
```

## Parameters

- `event`: The identifier of the action.

<a id="return-value"></a>

## Return Value

Returns a suitable action object for the given key or `nil` of no action object was associated with that key.

<a id="Discussion"></a>

## Discussion

Classes that want to provide default actions can override this method and use it to return those actions.

## See Also

### Getting the layer’s actions

- [action(forKey:)](action%28forkey_%29.md): Returns the action object assigned to the specified key.
- [actions](actions.md): A dictionary containing layer actions.

# defaultActionForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the default action for the current class.

## Declaration

```objectivec
+ (id<CAAction>) defaultActionForKey:(NSString *) event;
```

## Parameters

- `event`: The identifier of the action.

<a id="return-value"></a>

## Return Value

Returns a suitable action object for the given key or `nil` of no action object was associated with that key.

<a id="Discussion"></a>

## Discussion

Classes that want to provide default actions can override this method and use it to return those actions.

## See Also

### Getting the layer’s actions

- [actionForKey:](action%28forkey_%29.md): Returns the action object assigned to the specified key.
- [actions](actions.md): A dictionary containing layer actions.
