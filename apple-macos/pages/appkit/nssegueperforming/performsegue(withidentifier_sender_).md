> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegueperforming/performsegue(withidentifier:sender:)](https://developer.apple.com/documentation/appkit/nssegueperforming/performsegue(withidentifier:sender:))

# performSegue(withIdentifier:sender:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Performs the specified segue.

## Declaration

```swift
@MainActor optional func performSegue(withIdentifier identifier: NSStoryboardSegue.Identifier, sender: Any?)
```

## Parameters

- `identifier`: The string that uniquely identifies the segue in the storyboard file.

  In Interface Builder, you can provide an identifier string to a segue using the inspector. Pass this string to this parameter.

  > **Note**

  >  This method throws an [Exception handling](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ExceptionHandling.html#//apple_ref/doc/uid/TP40008195-CH18) if there is no segue with the specified identifier or if the identifier is `nil`.
- `sender`: The object that you want to use to initiate the segue. This parameter makes the object available to your implementation during the segue.

<a id="Discussion"></a>

## Discussion

Apps typically do not need to trigger segues programmatically. If needed, you can call this method to trigger a segue for an action that cannot be expressed in a storyboard file, such as a transition between scenes in different storyboards.

Typically, a segue is triggered by a user action, such as clicking a button. In Interface Builder, configure an object, such as a control embedded in the view controller’s view hierarchy, to trigger the segue.

## See Also

### Working with Storyboard Segues

- [prepare(for:sender:)](prepare%28for_sender_%29.md): Called when a segue is about to be performed.
- [shouldPerformSegue(withIdentifier:sender:)](shouldperformsegue%28withidentifier_sender_%29.md): Called immediately prior to the performance of a storyboard segue.

# performSegueWithIdentifier:sender: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Performs the specified segue.

## Declaration

```objectivec
- (void) performSegueWithIdentifier:(NSStoryboardSegueIdentifier) identifier sender:(id) sender;
```

## Parameters

- `identifier`: The string that uniquely identifies the segue in the storyboard file.

  In Interface Builder, you can provide an identifier string to a segue using the inspector. Pass this string to this parameter.

  > **Note**

  >  This method throws an [Exception handling](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ExceptionHandling.html#//apple_ref/doc/uid/TP40008195-CH18) if there is no segue with the specified identifier or if the identifier is `nil`.
- `sender`: The object that you want to use to initiate the segue. This parameter makes the object available to your implementation during the segue.

<a id="Discussion"></a>

## Discussion

Apps typically do not need to trigger segues programmatically. If needed, you can call this method to trigger a segue for an action that cannot be expressed in a storyboard file, such as a transition between scenes in different storyboards.

Typically, a segue is triggered by a user action, such as clicking a button. In Interface Builder, configure an object, such as a control embedded in the view controller’s view hierarchy, to trigger the segue.

## See Also

### Working with Storyboard Segues

- [prepareForSegue:sender:](prepare%28for_sender_%29.md): Called when a segue is about to be performed.
- [shouldPerformSegueWithIdentifier:sender:](shouldperformsegue%28withidentifier_sender_%29.md): Called immediately prior to the performance of a storyboard segue.
