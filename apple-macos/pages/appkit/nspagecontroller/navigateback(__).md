> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/navigateback(_:)](https://developer.apple.com/documentation/appkit/nspagecontroller/navigateback(_:))

# navigateBack(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Navigates backwards in the page controller’s arranged objects array.

## Declaration

```swift
@IBAction func navigateBack(_ sender: Any?)
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

- [navigateForward(\_:)](navigateforward%28__%29.md): Navigates to the next object in the page controller’s arranged objects array, if appropriate.
- [takeSelectedIndexFrom(\_:)](takeselectedindexfrom%28__%29.md): Navigates to the selected index, which is taken from the sender.

# navigateBack: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Navigates backwards in the page controller’s arranged objects array.

## Declaration

```objectivec
- (void) navigateBack:(id) sender;
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

- [navigateForward:](navigateforward%28__%29.md): Navigates to the next object in the page controller’s arranged objects array, if appropriate.
- [takeSelectedIndexFrom:](takeselectedindexfrom%28__%29.md): Navigates to the selected index, which is taken from the sender.
