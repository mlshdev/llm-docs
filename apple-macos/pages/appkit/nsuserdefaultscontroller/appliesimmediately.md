> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserdefaultscontroller/appliesimmediately](https://developer.apple.com/documentation/appkit/nsuserdefaultscontroller/appliesimmediately)

# appliesImmediately (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether any changes made to bound user default properties are saved immediately.

## Declaration

```swift
var appliesImmediately: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Default is [true](https://developer.apple.com/documentation/swift/true).

This property is observable using key-value observing.

## See Also

### Managing user defaults values

- [defaults](defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [initialValues](initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert(\_:)](revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [revertToInitialValues(\_:)](reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.
- [save(\_:)](save%28__%29.md): Saves the values of the receiver’s user default properties.

# appliesImmediately (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether any changes made to bound user default properties are saved immediately.

## Declaration

```objectivec
@property BOOL appliesImmediately;
```

<a id="Discussion"></a>

## Discussion

Default is [true](https://developer.apple.com/documentation/swift/true).

This property is observable using key-value observing.

## See Also

### Managing user defaults values

- [defaults](defaults.md): Returns the instance of NSUserDefaults in use by the receiver.
- [initialValues](initialvalues.md): Returns a dictionary containing the receiver’s initial default values.
- [hasUnappliedChanges](hasunappliedchanges.md): Returns whether the receiver has user default values that have not been saved to NSUserDefaults.
- [values](values.md): Returns a key value coding compliant object that is used to access the user default properties.
- [revert:](revert%28__%29.md): Causes the receiver to discard any unsaved changes to bound user default properties, restoring their previous values.
- [revertToInitialValues:](reverttoinitialvalues%28__%29.md): Causes the receiver to discard all edits and replace the values of all the user default properties with any corresponding values in the [initialValues](initialvalues.md) dictionary.
- [save:](save%28__%29.md): Saves the values of the receiver’s user default properties.
