> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/takeselectedindexfrom(_:)](https://developer.apple.com/documentation/appkit/nspagecontroller/takeselectedindexfrom(_:))

# takeSelectedIndexFrom(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Navigates to the selected index, which is taken from the sender.

## Declaration

```swift
@IBAction func takeSelectedIndexFrom(_ sender: Any?)
```

## Parameters

- `sender`: The control that invoked the action.

<a id="Discussion"></a>

## Discussion

When invoked, this method causes the page controller’s view to display the object specified by the value taken from the `sender` control.

This method is animated and invokes the delegate’s [pageControllerWillStartLiveTransition(\_:)](../nspagecontrollerdelegate/pagecontrollerwillstartlivetransition%28__%29.md) and [pageControllerDidEndLiveTransition(\_:)](../nspagecontrollerdelegate/pagecontrollerdidendlivetransition%28__%29.md) methods.

## See Also

### Related Documentation

- [navigateForward(to:)](navigateforward%28to_%29.md): Navigates to the specific object.

### Page Controller Navigation

- [navigateBack(\_:)](navigateback%28__%29.md): Navigates backwards in the page controller’s arranged objects array.
- [navigateForward(\_:)](navigateforward%28__%29.md): Navigates to the next object in the page controller’s arranged objects array, if appropriate.

# takeSelectedIndexFrom: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Navigates to the selected index, which is taken from the sender.

## Declaration

```objectivec
- (void) takeSelectedIndexFrom:(id) sender;
```

## Parameters

- `sender`: The control that invoked the action.

<a id="Discussion"></a>

## Discussion

When invoked, this method causes the page controller’s view to display the object specified by the value taken from the `sender` control.

This method is animated and invokes the delegate’s [pageControllerWillStartLiveTransition:](../nspagecontrollerdelegate/pagecontrollerwillstartlivetransition%28__%29.md) and [pageControllerDidEndLiveTransition:](../nspagecontrollerdelegate/pagecontrollerdidendlivetransition%28__%29.md) methods.

## See Also

### Related Documentation

- [navigateForwardToObject:](navigateforward%28to_%29.md): Navigates to the specific object.

### Page Controller Navigation

- [navigateBack:](navigateback%28__%29.md): Navigates backwards in the page controller’s arranged objects array.
- [navigateForward:](navigateforward%28__%29.md): Navigates to the next object in the page controller’s arranged objects array, if appropriate.
