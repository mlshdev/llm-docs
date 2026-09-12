> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/navigateforward(_:)](https://developer.apple.com/documentation/appkit/nspagecontroller/navigateforward(_:))

# navigateForward(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Navigates to the next object in the page controller’s arranged objects array, if appropriate.

## Declaration

```swift
@IBAction func navigateForward(_ sender: Any?)
```

## Parameters

- `sender`: The sender.

<a id="Discussion"></a>

## Discussion

This method is typically invoked in response to a user interacting with a control, the `sender`.

This method is animated and invokes the delegate’s [pageControllerWillStartLiveTransition(\_:)](../nspagecontrollerdelegate/pagecontrollerwillstartlivetransition%28__%29.md) and [pageControllerDidEndLiveTransition(\_:)](../nspagecontrollerdelegate/pagecontrollerdidendlivetransition%28__%29.md) methods.

## See Also

### Related Documentation

- [navigateForward(to:)](navigateforward%28to_%29.md): Navigates to the specific object.

### Page Controller Navigation

- [navigateBack(\_:)](navigateback%28__%29.md): Navigates backwards in the page controller’s arranged objects array.
- [takeSelectedIndexFrom(\_:)](takeselectedindexfrom%28__%29.md): Navigates to the selected index, which is taken from the sender.

# navigateForward: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Navigates to the next object in the page controller’s arranged objects array, if appropriate.

## Declaration

```objectivec
- (void) navigateForward:(id) sender;
```

## Parameters

- `sender`: The sender.

<a id="Discussion"></a>

## Discussion

This method is typically invoked in response to a user interacting with a control, the `sender`.

This method is animated and invokes the delegate’s [pageControllerWillStartLiveTransition:](../nspagecontrollerdelegate/pagecontrollerwillstartlivetransition%28__%29.md) and [pageControllerDidEndLiveTransition:](../nspagecontrollerdelegate/pagecontrollerdidendlivetransition%28__%29.md) methods.

## See Also

### Related Documentation

- [navigateForwardToObject:](navigateforward%28to_%29.md): Navigates to the specific object.

### Page Controller Navigation

- [navigateBack:](navigateback%28__%29.md): Navigates backwards in the page controller’s arranged objects array.
- [takeSelectedIndexFrom:](takeselectedindexfrom%28__%29.md): Navigates to the selected index, which is taken from the sender.
