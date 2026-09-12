> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/navigateforward(to:)](https://developer.apple.com/documentation/appkit/nspagecontroller/navigateforward(to:))

# navigateForward(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Navigates to the specific object.

## Declaration

```swift
func navigateForward(to object: Any)
```

## Parameters

- `object`: The object to display.

<a id="Discussion"></a>

## Discussion

Clears the [arrangedObjects](arrangedobjects.md) array after the selected index, adds the argument to that array, and sets the [selectedIndex](selectedindex.md) to the object’s index.

## See Also

### Related Documentation

- [takeSelectedIndexFrom(\_:)](takeselectedindexfrom%28__%29.md): Navigates to the selected index, which is taken from the sender.
- [navigateBack(\_:)](navigateback%28__%29.md): Navigates backwards in the page controller’s arranged objects array.
- [navigateForward(\_:)](navigateforward%28__%29.md): Navigates to the next object in the page controller’s arranged objects array, if appropriate.

### Page Controller Items

- [arrangedObjects](arrangedobjects.md): An array containing the objects displayed in the page controller’s view.
- [selectedIndex](selectedindex.md): The currently selected object in the arranged objects array.

# navigateForwardToObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Navigates to the specific object.

## Declaration

```objectivec
- (void) navigateForwardToObject:(id) object;
```

## Parameters

- `object`: The object to display.

<a id="Discussion"></a>

## Discussion

Clears the [arrangedObjects](arrangedobjects.md) array after the selected index, adds the argument to that array, and sets the [selectedIndex](selectedindex.md) to the object’s index.

## See Also

### Related Documentation

- [takeSelectedIndexFrom:](takeselectedindexfrom%28__%29.md): Navigates to the selected index, which is taken from the sender.
- [navigateBack:](navigateback%28__%29.md): Navigates backwards in the page controller’s arranged objects array.
- [navigateForward:](navigateforward%28__%29.md): Navigates to the next object in the page controller’s arranged objects array, if appropriate.

### Page Controller Items

- [arrangedObjects](arrangedobjects.md): An array containing the objects displayed in the page controller’s view.
- [selectedIndex](selectedindex.md): The currently selected object in the arranged objects array.
