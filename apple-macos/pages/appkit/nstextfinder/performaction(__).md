> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/performaction(_:)](https://developer.apple.com/documentation/appkit/nstextfinder/performaction(_:))

# performAction(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Performs the specified text finding action.

## Declaration

```swift
func performAction(_ op: NSTextFinder.Action)
```

## Parameters

- `op`: The text finding action. See [NSTextFinder.Action](action.md) for the possible values.

<a id="Discussion"></a>

## Discussion

Objects that respond to [performTextFinderAction(\_:)](../nsresponder/performtextfinderaction%28__%29.md) typically call [validateAction(\_:)](validateaction%28__%29.md) to ensure that the action is valid and then invoke [performAction(\_:)](performaction%28__%29.md) if validation is successful.

When invoking the [validateAction(\_:)](validateaction%28__%29.md) and [performAction(\_:)](performaction%28__%29.md) the item or sender’s tag should be passed as the parameter. By convention, the `sender` parameter for this method will have an [NSTextFinder.Action](action.md) set as its tag. The responder that receives this method should pass the tag as the action for this method:

```objc
- (void)performTextFinderAction:(id)sender {
    [self.textFinder performAction:[sender tag]];
}
```

## See Also

### Validating and Performing Text Finding

- [validateAction(\_:)](validateaction%28__%29.md): Allows validation of the find action before performing.
- [cancelFindIndicator()](cancelfindindicator%28%29.md): Cancels the find indicator immediately.

# performAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Performs the specified text finding action.

## Declaration

```objectivec
- (void) performAction:(NSTextFinderAction) op;
```

## Parameters

- `op`: The text finding action. See [NSTextFinderAction](action.md) for the possible values.

<a id="Discussion"></a>

## Discussion

Objects that respond to [performTextFinderAction:](../nsresponder/performtextfinderaction%28__%29.md) typically call [validateAction:](validateaction%28__%29.md) to ensure that the action is valid and then invoke [performAction:](performaction%28__%29.md) if validation is successful.

When invoking the [validateAction:](validateaction%28__%29.md) and [performAction:](performaction%28__%29.md) the item or sender’s tag should be passed as the parameter. By convention, the `sender` parameter for this method will have an [NSTextFinderAction](action.md) set as its tag. The responder that receives this method should pass the tag as the action for this method:

```objc
- (void)performTextFinderAction:(id)sender {
    [self.textFinder performAction:[sender tag]];
}
```

## See Also

### Validating and Performing Text Finding

- [validateAction:](validateaction%28__%29.md): Allows validation of the find action before performing.
- [cancelFindIndicator](cancelfindindicator%28%29.md): Cancels the find indicator immediately.
