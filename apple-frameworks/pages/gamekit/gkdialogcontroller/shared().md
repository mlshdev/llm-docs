> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkdialogcontroller/shared()](https://developer.apple.com/documentation/gamekit/gkdialogcontroller/shared())

# shared() (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** macOS 10.8+

Retrieves the shared instance of the dialog controller.

## Declaration

```swift
class func shared() -> GKDialogController
```

<a id="return-value"></a>

## Return Value

The shared dialog controller.

<a id="Discussion"></a>

## Discussion

You can use the shared dialog controller or create your own [GKDialogController](../gkdialogcontroller.md) object. For example, you can create separate [GKDialogController](../gkdialogcontroller.md) objects for different windows.

# sharedDialogController (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** macOS 10.8+

Retrieves the shared instance of the dialog controller.

## Declaration

```objectivec
+ (GKDialogController *) sharedDialogController;
```

<a id="return-value"></a>

## Return Value

The shared dialog controller.

<a id="Discussion"></a>

## Discussion

You can use the shared dialog controller or create your own [GKDialogController](../gkdialogcontroller.md) object. For example, you can create separate [GKDialogController](../gkdialogcontroller.md) objects for different windows.
