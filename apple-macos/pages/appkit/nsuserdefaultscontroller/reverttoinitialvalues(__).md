> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserdefaultscontroller/reverttoinitialvalues(_:)](https://developer.apple.com/documentation/appkit/nsuserdefaultscontroller/reverttoinitialvalues(_:))

# revertToInitialValues(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.

## Declaration

```swift
@IBAction func revertToInitialValues(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

This effectively sets the preferences that a user can change to their “out-of-the-box” values. This method has no effect if initial values were not specified. The `sender` is typically the object that invoked this method.

## See Also

### Managing user defaults values

- [defaults](defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [initialValues](initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert(\_:)](revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [save(\_:)](save%28__%29.md): Saves the values of the receiver’s user default properties.

# revertToInitialValues: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.

## Declaration

```objectivec
- (void) revertToInitialValues:(id) sender;
```

<a id="Discussion"></a>

## Discussion

This effectively sets the preferences that a user can change to their “out-of-the-box” values. This method has no effect if initial values were not specified. The `sender` is typically the object that invoked this method.

## See Also

### Managing user defaults values

- [defaults](defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [initialValues](initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert:](revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [save:](save%28__%29.md): Saves the values of the receiver’s user default properties.
