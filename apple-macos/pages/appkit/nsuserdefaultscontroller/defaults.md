> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserdefaultscontroller/defaults](https://developer.apple.com/documentation/appkit/nsuserdefaultscontroller/defaults)

# defaults (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the instance of NSUserDefaults in use by the receiver.

## Declaration

```swift
var defaults: UserDefaults { get }
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Managing user defaults values

- [initialValues](initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert(\_:)](revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [revertToInitialValues(\_:)](reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.
- [save(\_:)](save%28__%29.md): Saves the values of the receiver’s user default properties.

# defaults (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the instance of NSUserDefaults in use by the receiver.

## Declaration

```objectivec
@property (strong, readonly) NSUserDefaults * defaults;
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Managing user defaults values

- [initialValues](initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert:](revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [revertToInitialValues:](reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.
- [save:](save%28__%29.md): Saves the values of the receiver’s user default properties.
