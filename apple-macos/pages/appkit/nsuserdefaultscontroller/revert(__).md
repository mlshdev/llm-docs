> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserdefaultscontroller/revert(_:)](https://developer.apple.com/documentation/appkit/nsuserdefaultscontroller/revert(_:))

# revert(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.

## Declaration

```swift
@IBAction func revert(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

The receiver invokes [discardEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting) on any currently registered editors. The `sender` is typically the object that invoked this method.

If [appliesImmediately](appliesimmediately.md) is [true](https://developer.apple.com/documentation/swift/true), this method only causes any bound editors with uncommitted changes to discard their edits.

## See Also

### Managing user defaults values

- [defaults](defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [initialValues](initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revertToInitialValues(\_:)](reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.
- [save(\_:)](save%28__%29.md): Saves the values of the receiver’s user default properties.

# revert: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.

## Declaration

```objectivec
- (void) revert:(id) sender;
```

<a id="Discussion"></a>

## Discussion

The receiver invokes [discardEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting) on any currently registered editors. The `sender` is typically the object that invoked this method.

If [appliesImmediately](appliesimmediately.md) is [true](https://developer.apple.com/documentation/swift/true), this method only causes any bound editors with uncommitted changes to discard their edits.

## See Also

### Managing user defaults values

- [defaults](defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [initialValues](initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revertToInitialValues:](reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.
- [save:](save%28__%29.md): Saves the values of the receiver’s user default properties.
