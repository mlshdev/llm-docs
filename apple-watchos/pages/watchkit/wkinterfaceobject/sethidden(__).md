> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/sethidden(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/sethidden(_:))

# setHidden(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Hides or shows the interface object in your user interface.

## Declaration

```swift
func setHidden(_ hidden: Bool)
```

## Parameters

- `hidden`: A Boolean value indicating the visibility of the object. Specify [true](https://developer.apple.com/documentation/swift/true) to hide the object. Specify [false](https://developer.apple.com/documentation/swift/false) to show it.

## Mentioned In

- [Connecting Your User Interface to Your Code](../connecting-your-user-interface-to-your-code.md)

<a id="Discussion"></a>

## Discussion

When you hide or show an object in your interface, WatchKit makes a note to update the layout during the next refresh cycle. During that cycle, WatchKit adjusts the layout to display only the currently visible objects.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Hiding and Showing an Object

- [setAlpha(\_:)](setalpha%28__%29.md): Sets the opacity of the interface object.

# setHidden: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Hides or shows the interface object in your user interface.

## Declaration

```objectivec
- (void) setHidden:(BOOL) hidden;
```

## Parameters

- `hidden`: A Boolean value indicating the visibility of the object. Specify [true](https://developer.apple.com/documentation/swift/true) to hide the object. Specify [false](https://developer.apple.com/documentation/swift/false) to show it.

## Mentioned In

- [Connecting Your User Interface to Your Code](../connecting-your-user-interface-to-your-code.md)

<a id="Discussion"></a>

## Discussion

When you hide or show an object in your interface, WatchKit makes a note to update the layout during the next refresh cycle. During that cycle, WatchKit adjusts the layout to display only the currently visible objects.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Hiding and Showing an Object

- [setAlpha:](setalpha%28__%29.md): Sets the opacity of the interface object.
