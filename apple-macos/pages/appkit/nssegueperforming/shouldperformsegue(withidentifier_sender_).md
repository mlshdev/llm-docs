> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegueperforming/shouldperformsegue(withidentifier:sender:)](https://developer.apple.com/documentation/appkit/nssegueperforming/shouldperformsegue(withidentifier:sender:))

# shouldPerformSegue(withIdentifier:sender:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called immediately prior to the performance of a storyboard segue.

## Declaration

```swift
@MainActor optional func shouldPerformSegue(withIdentifier identifier: NSStoryboardSegue.Identifier, sender: Any?) -> Bool
```

## Parameters

- `identifier`: The string that identifies the segue to be performed.

  Using the Interface Builder inspector, provide a unique identifier string for each segue in a storyboard. The system provides a segue’s identifier to this parameter when it calls this method. The identifier string is used to locate the segue inside the storyboard file that contains the view controller.

  > **Note**

  >  This method throws an [Exception handling](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ExceptionHandling.html#//apple_ref/doc/uid/TP40008195-CH18) if there is no segue with the specified identifier.
- `sender`: The object that initiated the segue. This object is made available for informational purposes during the segue.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow a segue to proceed or [false](https://developer.apple.com/documentation/swift/false) to stop it from proceeding.

<a id="Discussion"></a>

## Discussion

Override this method to return [false](https://developer.apple.com/documentation/swift/false) for cases where you want to prevent the performance of a segue. By default, invocation of a segue results in the segue being performed.

## See Also

### Working with Storyboard Segues

- [performSegue(withIdentifier:sender:)](performsegue%28withidentifier_sender_%29.md): Performs the specified segue.
- [prepare(for:sender:)](prepare%28for_sender_%29.md): Called when a segue is about to be performed.

# shouldPerformSegueWithIdentifier:sender: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called immediately prior to the performance of a storyboard segue.

## Declaration

```objectivec
- (BOOL) shouldPerformSegueWithIdentifier:(NSStoryboardSegueIdentifier) identifier sender:(id) sender;
```

## Parameters

- `identifier`: The string that identifies the segue to be performed.

  Using the Interface Builder inspector, provide a unique identifier string for each segue in a storyboard. The system provides a segue’s identifier to this parameter when it calls this method. The identifier string is used to locate the segue inside the storyboard file that contains the view controller.

  > **Note**

  >  This method throws an [Exception handling](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ExceptionHandling.html#//apple_ref/doc/uid/TP40008195-CH18) if there is no segue with the specified identifier.
- `sender`: The object that initiated the segue. This object is made available for informational purposes during the segue.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow a segue to proceed or [false](https://developer.apple.com/documentation/swift/false) to stop it from proceeding.

<a id="Discussion"></a>

## Discussion

Override this method to return [false](https://developer.apple.com/documentation/swift/false) for cases where you want to prevent the performance of a segue. By default, invocation of a segue results in the segue being performed.

## See Also

### Working with Storyboard Segues

- [performSegueWithIdentifier:sender:](performsegue%28withidentifier_sender_%29.md): Performs the specified segue.
- [prepareForSegue:sender:](prepare%28for_sender_%29.md): Called when a segue is about to be performed.
