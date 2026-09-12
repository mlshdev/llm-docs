> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserdefaultscontroller/initialvalues](https://developer.apple.com/documentation/appkit/nsuserdefaultscontroller/initialvalues)

# initialValues (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns a dictionary containing the receiver’s initial default values.

## Declaration

```swift
var initialValues: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

These values are used when is no value found for the bound property in [defaults](defaults.md).

This property is observable using key-value observing.

## See Also

### Managing user defaults values

- [defaults](defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert(\_:)](revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [revertToInitialValues(\_:)](reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.
- [save(\_:)](save%28__%29.md): Saves the values of the receiver’s user default properties.

# initialValues (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns a dictionary containing the receiver’s initial default values.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * initialValues;
```

<a id="Discussion"></a>

## Discussion

These values are used when is no value found for the bound property in [defaults](defaults.md).

This property is observable using key-value observing.

## See Also

### Managing user defaults values

- [defaults](defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [appliesImmediately](appliesimmediately.md): Returns whether any changes made to bound user default properties are saved immediately.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert:](revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [revertToInitialValues:](reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.
- [save:](save%28__%29.md): Saves the values of the receiver’s user default properties.
