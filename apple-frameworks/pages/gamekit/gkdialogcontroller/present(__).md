> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkdialogcontroller/present(_:)](https://developer.apple.com/documentation/gamekit/gkdialogcontroller/present(_:))

# present(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Presents the dashboard in the window.

## Declaration

```swift
func present(_ viewController: any NSViewController & GKViewController) -> Bool
```

## Parameters

- `viewController`: A Game Center view controller that represents the dashboard.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the dashboard is presented. [false](https://developer.apple.com/documentation/swift/false) if an error occurs.

<a id="Discussion"></a>

## Discussion

The dashboard covers the window until the player dismisses it.

## See Also

### Presenting and Dismissing the Dialog

- [dismiss(\_:)](dismiss%28__%29.md): Dismisses the dashboard.

# presentViewController: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Presents the dashboard in the window.

## Declaration

```objectivec
- (BOOL) presentViewController:(NSViewController<GKViewController> *) viewController;
```

## Parameters

- `viewController`: A Game Center view controller that represents the dashboard.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the dashboard is presented. [false](https://developer.apple.com/documentation/swift/false) if an error occurs.

<a id="Discussion"></a>

## Discussion

The dashboard covers the window until the player dismisses it.

## See Also

### Presenting and Dismissing the Dialog

- [dismiss:](dismiss%28__%29.md): Dismisses the dashboard.
