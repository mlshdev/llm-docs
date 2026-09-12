> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayerdelegate/action(for:forkey:)](https://developer.apple.com/documentation/quartzcore/calayerdelegate/action(for:forkey:))

# action(for:forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the default action of the [action(forKey:)](../calayer/action%28forkey_%29.md) method.

## Declaration

```swift
optional func action(for layer: CALayer, forKey event: String) -> (any CAAction)?
```

## Parameters

- `layer`: The layer that is the target of the action.
- `event`: The identifier of the action.

<a id="return-value"></a>

## Return Value

An object implementing the [CAAction](../caaction.md) protocol or `nil` if the delegate does not specify a behavior for the specified `key`.

<a id="Discussion"></a>

## Discussion

A layer’s delegate that implements this method returns an action for a specified key and stops any further searches (i.e. actions for the same key in the layer’s [actions](../calayer/actions.md) dictionary or specified by [defaultAction(forKey:)](../calayer/defaultaction%28forkey_%29.md) are not returned).

The following code shows how you can create a class named `LayerDelegate` that implements [CALayerDelegate](../calayerdelegate.md) and sets it as a layer’s (named `sublayer`) delegate. `LayerDelegate` returns a basic animation that moves an object from left to right. The `moveSublayer()` method searches `sublayer` for an action with the key `moveRight` and, if the action is found, runs it.

```swift
let delegate = LayerDelegate()
     
lazy var sublayer: CALayer = {
    let layer = CALayer()
    layer.delegate = self.delegate
    
    return layer
}()
     
func moveSublayer() {
    guard let action = sublayer.action(forKey: "moveRight") else {
        return
    }
    
    action.run(forKey: "transform", object: sublayer, arguments: nil)
}
     
class LayerDelegate: NSObject, CALayerDelegate {
    func action(for layer: CALayer, forKey event: String) -> CAAction? {
        
        guard event == "moveRight" else {
            return nil
        }
        
        let animation = CABasicAnimation()
        animation.valueFunction = CAValueFunction(name: kCAValueFunctionTranslateX)
        animation.fromValue = 1
        animation.toValue = 300
        animation.duration = 2
        
        return animation
    }
}
```

# actionForLayer:forKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the default action of the [actionForKey:](../calayer/action%28forkey_%29.md) method.

## Declaration

```objectivec
- (id<CAAction>) actionForLayer:(CALayer *) layer forKey:(NSString *) event;
```

## Parameters

- `layer`: The layer that is the target of the action.
- `event`: The identifier of the action.

<a id="return-value"></a>

## Return Value

An object implementing the [CAAction](../caaction.md) protocol or `nil` if the delegate does not specify a behavior for the specified `key`.

<a id="Discussion"></a>

## Discussion

A layer’s delegate that implements this method returns an action for a specified key and stops any further searches (i.e. actions for the same key in the layer’s [actions](../calayer/actions.md) dictionary or specified by [defaultActionForKey:](../calayer/defaultaction%28forkey_%29.md) are not returned).

The following code shows how you can create a class named `LayerDelegate` that implements [CALayerDelegate](../calayerdelegate.md) and sets it as a layer’s (named `sublayer`) delegate. `LayerDelegate` returns a basic animation that moves an object from left to right. The `moveSublayer()` method searches `sublayer` for an action with the key `moveRight` and, if the action is found, runs it.

```swift
let delegate = LayerDelegate()
     
lazy var sublayer: CALayer = {
    let layer = CALayer()
    layer.delegate = self.delegate
    
    return layer
}()
     
func moveSublayer() {
    guard let action = sublayer.action(forKey: "moveRight") else {
        return
    }
    
    action.run(forKey: "transform", object: sublayer, arguments: nil)
}
     
class LayerDelegate: NSObject, CALayerDelegate {
    func action(for layer: CALayer, forKey event: String) -> CAAction? {
        
        guard event == "moveRight" else {
            return nil
        }
        
        let animation = CABasicAnimation()
        animation.valueFunction = CAValueFunction(name: kCAValueFunctionTranslateX)
        animation.fromValue = 1
        animation.toValue = 300
        animation.duration = 2
        
        return animation
    }
}
```
