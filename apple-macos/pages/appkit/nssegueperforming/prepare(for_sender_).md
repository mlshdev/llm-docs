> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegueperforming/prepare(for:sender:)](https://developer.apple.com/documentation/appkit/nssegueperforming/prepare(for:sender:))

# prepare(for:sender:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when a segue is about to be performed.

## Declaration

```swift
@MainActor optional func prepare(for segue: NSStoryboardSegue, sender: Any?)
```

## Parameters

- `segue`: The segue object containing information about the view controllers involved in the segue.
- `sender`: The object that initiated the segue. You might use this parameter to perform different actions based on which control (or other object) initiated the segue.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing; you can override it to pass relevant data to the new view controller or window controller, based on the context of the segue. The `segue` object describes the transition and includes references to both controllers involved in the segue.

Segues can be triggered from multiple sources, so use the information in the `segue` and `sender` parameters to disambiguate between different logical paths in your app. For example, if the segue originated from a table view, the `sender` parameter would identify the cell that the user clicked. You could use that information to set the data on the destination view controller.

## See Also

### Working with Storyboard Segues

- [performSegue(withIdentifier:sender:)](performsegue%28withidentifier_sender_%29.md): Performs the specified segue.
- [shouldPerformSegue(withIdentifier:sender:)](shouldperformsegue%28withidentifier_sender_%29.md): Called immediately prior to the performance of a storyboard segue.

# prepareForSegue:sender: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when a segue is about to be performed.

## Declaration

```objectivec
- (void) prepareForSegue:(NSStoryboardSegue *) segue sender:(id) sender;
```

## Parameters

- `segue`: The segue object containing information about the view controllers involved in the segue.
- `sender`: The object that initiated the segue. You might use this parameter to perform different actions based on which control (or other object) initiated the segue.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing; you can override it to pass relevant data to the new view controller or window controller, based on the context of the segue. The `segue` object describes the transition and includes references to both controllers involved in the segue.

Segues can be triggered from multiple sources, so use the information in the `segue` and `sender` parameters to disambiguate between different logical paths in your app. For example, if the segue originated from a table view, the `sender` parameter would identify the cell that the user clicked. You could use that information to set the data on the destination view controller.

## See Also

### Working with Storyboard Segues

- [performSegueWithIdentifier:sender:](performsegue%28withidentifier_sender_%29.md): Performs the specified segue.
- [shouldPerformSegueWithIdentifier:sender:](shouldperformsegue%28withidentifier_sender_%29.md): Called immediately prior to the performance of a storyboard segue.
