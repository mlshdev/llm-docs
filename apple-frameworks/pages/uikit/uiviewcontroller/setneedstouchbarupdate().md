> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedstouchbarupdate()

# setNeedsTouchBarUpdate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+

Tells the system to update the Touch Bar.

## Declaration

```swift
func setNeedsTouchBarUpdate()
```

<a id="Discussion"></a>

## Discussion

Call this method when the value from [childViewControllerForTouchBar](childviewcontrollerfortouchbar.md) changes.

## See Also

### Managing the Touch Bar

- [childViewControllerForTouchBar](childviewcontrollerfortouchbar.md): The child view controller that the system uses to display content in the Touch Bar.

# setNeedsTouchBarUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+

Tells the system to update the Touch Bar.

## Declaration

```objectivec
- (void) setNeedsTouchBarUpdate;
```

<a id="Discussion"></a>

## Discussion

Call this method when the value from [childViewControllerForTouchBar](childviewcontrollerfortouchbar.md) changes.

## See Also

### Managing the Touch Bar

- [childViewControllerForTouchBar](childviewcontrollerfortouchbar.md): The child view controller that the system uses to display content in the Touch Bar.
